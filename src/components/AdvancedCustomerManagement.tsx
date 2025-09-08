import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import MobileCustomerList from './MobileCustomerList'
import { useCustomers } from '@/hooks/useCustomers'
import type { Customer } from '@/hooks/useCustomers'
import { 
  Search, 
  Plus, 
  Edit, 
  Trash2, 
  Filter, 
  Download, 
  Users, 
  UserCheck, 
  DollarSign, 
  TrendingUp,
  Eye,
  MoreHorizontal,
  ArrowUpDown
} from 'lucide-react'

export default function AdvancedCustomerManagement() {
  const { customers, loading, error } = useCustomers()
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('All')
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [sortBy, setSortBy] = useState<'name' | 'orders' | 'spent' | 'joinDate'>('name')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const [isMobile, setIsMobile] = useState(false)

  // Responsive detection
  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768)
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  // CMS Integration - отримуємо дані з Prismic через hook

  const filteredAndSortedCustomers = customers
    .filter(customer => {
      const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           customer.phone.includes(searchTerm)
      const matchesStatus = statusFilter === 'All' || customer.status === statusFilter
      return matchesSearch && matchesStatus
    })
    .sort((a, b) => {
      let aValue: any
      let bValue: any
      
      switch (sortBy) {
        case 'name':
          aValue = a.name.toLowerCase()
          bValue = b.name.toLowerCase()
          break
        case 'orders':
          aValue = a.orders
          bValue = b.orders
          break
        case 'spent':
          aValue = a.spent
          bValue = b.spent
          break
        case 'joinDate':
          aValue = new Date(a.joinDate).getTime()
          bValue = new Date(b.joinDate).getTime()
          break
        default:
          return 0
      }
      
      if (sortOrder === 'asc') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0
      }
    })

  const handleSort = (column: typeof sortBy) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(column)
      setSortOrder('asc')
    }
  }

  const getStatusBadgeVariant = (status: Customer['status']) => {
    switch (status) {
      case 'Active':
        return 'default'
      case 'Inactive':
        return 'secondary'
      case 'Pending':
        return 'outline'
      default:
        return 'secondary'
    }
  }

  const getStatusStyles = (status: Customer['status']) => {
    switch (status) {
      case 'Active':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100'
      case 'Inactive':
        return 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
      case 'Pending':
        return 'bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100'
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
    }
  }

  const statsData = [
    {
      title: 'Total Customers',
      value: customers.length.toLocaleString(),
      change: '+12%',
      trend: 'up',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'Active Customers',
      value: customers.filter(c => c.status === 'Active').length.toLocaleString(),
      change: '+5%',
      trend: 'up',
      icon: UserCheck,
      color: 'text-emerald-600'
    },
    {
      title: 'Total Revenue',
      value: `$${customers.reduce((sum, c) => sum + c.spent, 0).toLocaleString()}`,
      change: '+18%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-purple-600'
    },
    {
      title: 'Avg Order Value',
      value: `$${Math.round(customers.reduce((sum, c) => sum + c.spent, 0) / 
               customers.reduce((sum, c) => sum + c.orders, 0) || 0).toLocaleString()}`,
      change: '+3%',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-orange-600'
    }
  ]

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-600 mb-2">Error loading customers</div>
          <div className="text-slate-600">{error}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-4 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl lg:text-3xl font-semibold text-slate-900">Customer Management</h1>
              <p className="text-slate-600 mt-1">Manage your customers and track their activity</p>
            </div>
            
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="hidden sm:flex">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              
              <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
                <DialogTrigger asChild>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Customer
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Add New Customer</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <label htmlFor="name" className="text-sm font-medium text-slate-700">
                        Full Name
                      </label>
                      <Input id="name" placeholder="Enter customer name" />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-700">
                        Email Address
                      </label>
                      <Input id="email" type="email" placeholder="customer@email.com" />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="phone" className="text-sm font-medium text-slate-700">
                        Phone Number
                      </label>
                      <Input id="phone" placeholder="+1 (555) 123-4567" />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="status" className="text-sm font-medium text-slate-700">
                        Status
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Active">Active</SelectItem>
                          <SelectItem value="Inactive">Inactive</SelectItem>
                          <SelectItem value="Pending">Pending</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="flex justify-end gap-3">
                    <Button variant="outline" onClick={() => setIsAddModalOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={() => setIsAddModalOpen(false)} className="bg-blue-600 hover:bg-blue-700">
                      Add Customer
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {statsData.map((stat, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-slate-600">{stat.title}</p>
                      <p className="text-2xl font-semibold text-slate-900">{stat.value}</p>
                      <p className="text-xs text-emerald-600 font-medium">
                        {stat.change} from last month
                      </p>
                    </div>
                    <div className={`p-3 rounded-lg bg-slate-50 ${stat.color}`}>
                      <stat.icon className="h-5 w-5" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Filters and Search */}
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
                <div className="flex flex-col sm:flex-row gap-4 flex-1 w-full lg:w-auto">
                  <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                    <Input
                      placeholder="Search customers..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-full sm:w-[180px] border-slate-200">
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All">All Status</SelectItem>
                      <SelectItem value="Active">Active</SelectItem>
                      <SelectItem value="Inactive">Inactive</SelectItem>
                      <SelectItem value="Pending">Pending</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-center gap-2 w-full lg:w-auto">
                  <Button variant="outline" size="sm" className="flex-1 lg:flex-none lg:hidden">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                  <span className="text-sm text-slate-600 px-3 py-2 bg-slate-50 rounded-md">
                    {filteredAndSortedCustomers.length} customers
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Customer Table - Desktop */}
          <div className="hidden md:block">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-slate-200 hover:bg-transparent">
                        <TableHead 
                          className="cursor-pointer select-none font-semibold text-slate-700 py-4 px-6"
                          onClick={() => handleSort('name')}
                        >
                          <div className="flex items-center gap-2">
                            Customer
                            <ArrowUpDown className="h-4 w-4" />
                          </div>
                        </TableHead>
                        <TableHead className="font-semibold text-slate-700 py-4 px-6">Contact Info</TableHead>
                        <TableHead className="font-semibold text-slate-700 py-4 px-6">Status</TableHead>
                        <TableHead 
                          className="text-right cursor-pointer select-none font-semibold text-slate-700 py-4 px-6"
                          onClick={() => handleSort('orders')}
                        >
                          <div className="flex items-center justify-end gap-2">
                            Orders
                            <ArrowUpDown className="h-4 w-4" />
                          </div>
                        </TableHead>
                        <TableHead 
                          className="text-right cursor-pointer select-none font-semibold text-slate-700 py-4 px-6"
                          onClick={() => handleSort('spent')}
                        >
                          <div className="flex items-center justify-end gap-2">
                            Total Spent
                            <ArrowUpDown className="h-4 w-4" />
                          </div>
                        </TableHead>
                        <TableHead 
                          className="cursor-pointer select-none font-semibold text-slate-700 py-4 px-6"
                          onClick={() => handleSort('joinDate')}
                        >
                          <div className="flex items-center gap-2">
                            Join Date
                            <ArrowUpDown className="h-4 w-4" />
                          </div>
                        </TableHead>
                        <TableHead className="text-right font-semibold text-slate-700 py-4 px-6">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredAndSortedCustomers.map((customer) => (
                        <TableRow key={customer.id} className="border-slate-200 hover:bg-slate-50/50">
                          <TableCell className="py-4 px-6">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                                {customer.name.charAt(0)}
                              </div>
                              <div>
                                <div className="font-medium text-slate-900">{customer.name}</div>
                                <div className="text-sm text-slate-500">ID: {customer.id}</div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="py-4 px-6">
                            <div className="space-y-1">
                              <div className="text-sm font-medium text-slate-900">{customer.email}</div>
                              <div className="text-sm text-slate-500">{customer.phone}</div>
                              {customer.location && (
                                <div className="text-xs text-slate-400">{customer.location}</div>
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="py-4 px-6">
                            <Badge className={`border ${getStatusStyles(customer.status)}`}>
                              {customer.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right font-semibold text-slate-900 py-4 px-6">
                            {customer.orders}
                          </TableCell>
                          <TableCell className="text-right font-semibold text-slate-900 py-4 px-6">
                            ${customer.spent.toLocaleString()}
                          </TableCell>
                          <TableCell className="text-slate-600 py-4 px-6">
                            <div className="space-y-1">
                              <div className="text-sm">
                                {new Date(customer.joinDate).toLocaleDateString()}
                              </div>
                              {customer.lastOrder && (
                                <div className="text-xs text-slate-400">
                                  Last: {new Date(customer.lastOrder).toLocaleDateString()}
                                </div>
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="text-right py-4 px-6">
                            <div className="flex justify-end gap-1">
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-slate-100">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-slate-100">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-red-50 hover:text-red-600">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-slate-100">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                
                {filteredAndSortedCustomers.length === 0 && (
                  <div className="text-center py-12">
                    <Users className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                    <h3 className="text-sm font-medium text-slate-900 mb-1">No customers found</h3>
                    <p className="text-sm text-slate-500">Try adjusting your search or filter criteria.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Customer List - Mobile */}
          <div className="block md:hidden">
            <MobileCustomerList
              customers={filteredAndSortedCustomers}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
              onAddCustomer={() => setIsAddModalOpen(true)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
