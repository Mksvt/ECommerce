import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  Search, 
  Plus, 
  Edit, 
  Trash2, 
  Filter, 
  Phone,
  Mail,
  MapPin,
  Calendar,
  ShoppingBag,
  DollarSign,
  MoreVertical
} from 'lucide-react'

interface Customer {
  id: string
  name: string
  email: string
  phone: string
  status: 'Active' | 'Inactive' | 'Pending'
  orders: number
  spent: number
  joinDate: string
  avatar?: string
  location?: string
  lastOrder?: string | null
}

interface MobileCustomerCardProps {
  customer: Customer
  onEdit: (customer: Customer) => void
  onDelete: (customerId: string) => void
}

function MobileCustomerCard({ customer, onEdit, onDelete }: MobileCustomerCardProps) {
  const [showActions, setShowActions] = useState(false)

  const getStatusStyles = (status: Customer['status']) => {
    switch (status) {
      case 'Active':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200'
      case 'Inactive':
        return 'bg-slate-50 text-slate-700 border-slate-200'
      case 'Pending':
        return 'bg-amber-50 text-amber-700 border-amber-200'
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200'
    }
  }

  return (
    <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3 flex-1">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
              {customer.name.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-slate-900 truncate">{customer.name}</h3>
              <p className="text-sm text-slate-500">ID: {customer.id}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Badge className={`border ${getStatusStyles(customer.status)} text-xs`}>
              {customer.status}
            </Badge>
            <Button 
              variant="ghost" 
              size="sm"
              className="h-8 w-8 p-0"
              onClick={() => setShowActions(!showActions)}
            >
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Mail className="h-4 w-4 text-slate-400" />
            <span className="truncate">{customer.email}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Phone className="h-4 w-4 text-slate-400" />
            <span>{customer.phone}</span>
          </div>
          {customer.location && (
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <MapPin className="h-4 w-4 text-slate-400" />
              <span className="truncate">{customer.location}</span>
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-3 gap-4 py-3 border-t border-slate-100">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-slate-500 mb-1">
              <ShoppingBag className="h-4 w-4" />
            </div>
            <div className="text-lg font-semibold text-slate-900">{customer.orders}</div>
            <div className="text-xs text-slate-500">Orders</div>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-slate-500 mb-1">
              <DollarSign className="h-4 w-4" />
            </div>
            <div className="text-lg font-semibold text-slate-900">${customer.spent.toLocaleString()}</div>
            <div className="text-xs text-slate-500">Spent</div>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-slate-500 mb-1">
              <Calendar className="h-4 w-4" />
            </div>
            <div className="text-sm font-medium text-slate-900">
              {new Date(customer.joinDate).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric' 
              })}
            </div>
            <div className="text-xs text-slate-500">Joined</div>
          </div>
        </div>
        
        {showActions && (
          <div className="flex gap-2 mt-3 pt-3 border-t border-slate-100">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1"
              onClick={() => onEdit(customer)}
            >
              <Edit className="h-4 w-4 mr-2" />
              Edit
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1 text-red-600 hover:text-red-700 hover:bg-red-50"
              onClick={() => onDelete(customer.id)}
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Delete
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

interface MobileCustomerListProps {
  customers: Customer[]
  searchTerm: string
  setSearchTerm: (term: string) => void
  statusFilter: string
  setStatusFilter: (status: string) => void
  onAddCustomer: () => void
}

export default function MobileCustomerList({ 
  customers, 
  searchTerm, 
  setSearchTerm, 
  statusFilter, 
  setStatusFilter, 
  onAddCustomer 
}: MobileCustomerListProps) {
  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.phone.includes(searchTerm)
    const matchesStatus = statusFilter === 'All' || customer.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const handleEdit = (customer: Customer) => {
    // Логіка редагування
    console.log('Edit customer:', customer)
  }

  const handleDelete = (customerId: string) => {
    // Логіка видалення
    console.log('Delete customer:', customerId)
  }

  return (
    <div className="space-y-4">
      {/* Mobile Search and Filter */}
      <div className="space-y-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
          <Input
            placeholder="Search customers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        
        <div className="flex gap-3">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="flex-1 border-slate-200">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Status</SelectItem>
              <SelectItem value="Active">Active</SelectItem>
              <SelectItem value="Inactive">Inactive</SelectItem>
              <SelectItem value="Pending">Pending</SelectItem>
            </SelectContent>
          </Select>
          
          <Button onClick={onAddCustomer} className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {/* Results Count */}
      <div className="flex items-center justify-between py-2">
        <span className="text-sm text-slate-600">
          {filteredCustomers.length} customers found
        </span>
      </div>
      
      {/* Customer Cards */}
      <div className="space-y-3">
        {filteredCustomers.map((customer) => (
          <MobileCustomerCard
            key={customer.id}
            customer={customer}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
      
      {filteredCustomers.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="h-8 w-8 text-slate-400" />
          </div>
          <h3 className="text-lg font-medium text-slate-900 mb-2">No customers found</h3>
          <p className="text-slate-500 mb-4">Try adjusting your search or filter criteria.</p>
          <Button onClick={onAddCustomer} className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Add First Customer
          </Button>
        </div>
      )}
    </div>
  )
}
