import { useEffect, useState } from 'react'
import { client } from '@/prismic'

interface PrismicCustomer {
  id: string
  uid?: string
  data: {
    name: string
    email: string
    phone: string
    status: 'Active' | 'Inactive' | 'Pending'
    orders: number
    total_spent: number
    join_date: string
    location?: string
    last_order?: string
  }
}

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

export function useCustomers() {
  const [customers, setCustomers] = useState<Customer[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const mockCustomers: Customer[] = [
    {
      id: '1',
      name: 'Alice Johnson',
      email: 'alice@example.com',
      phone: '+1 (555) 123-4567',
      status: 'Active',
      orders: 12,
      spent: 2450,
      joinDate: '2024-01-15',
      location: 'New York, USA',
      lastOrder: '2024-08-30'
    },
    {
      id: '2',
      name: 'Bob Smith',
      email: 'bob@example.com',
      phone: '+1 (555) 234-5678',
      status: 'Inactive',
      orders: 3,
      spent: 890,
      joinDate: '2024-02-20',
      location: 'Los Angeles, USA',
      lastOrder: '2024-07-15'
    },
    {
      id: '3',
      name: 'Carol Davis',
      email: 'carol@example.com',
      phone: '+1 (555) 345-6789',
      status: 'Pending',
      orders: 0,
      spent: 0,
      joinDate: '2024-03-10',
      location: 'Chicago, USA',
      lastOrder: null
    },
    {
      id: '4',
      name: 'David Wilson',
      email: 'david@example.com',
      phone: '+1 (555) 456-7890',
      status: 'Active',
      orders: 8,
      spent: 1680,
      joinDate: '2024-01-30',
      location: 'Miami, USA',
      lastOrder: '2024-09-01'
    },
    {
      id: '5',
      name: 'Emma Brown',
      email: 'emma@example.com',
      phone: '+1 (555) 567-8901',
      status: 'Active',
      orders: 15,
      spent: 3200,
      joinDate: '2023-12-05',
      location: 'Seattle, USA',
      lastOrder: '2024-09-05'
    },
    {
      id: '6',
      name: 'Frank Miller',
      email: 'frank@example.com',
      phone: '+1 (555) 678-9012',
      status: 'Active',
      orders: 7,
      spent: 1420,
      joinDate: '2024-02-14',
      location: 'Dallas, USA',
      lastOrder: '2024-08-25'
    },
    {
      id: '7',
      name: 'Grace Lee',
      email: 'grace@example.com',
      phone: '+1 (555) 789-0123',
      status: 'Inactive',
      orders: 2,
      spent: 340,
      joinDate: '2024-03-20',
      location: 'San Francisco, USA',
      lastOrder: '2024-06-10'
    }
  ]

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        setLoading(true)
        
        // Спроба отримання даних з Prismic CMS
        // Розкоментувати коли налаштований Prismic репозиторій
        
        // const response = await client.getAllByType('customer', {
        //   orderings: {
        //     field: 'document.first_publication_date',
        //     direction: 'desc',
        //   },
        // })

        // const prismicCustomers: Customer[] = response.map((doc: PrismicCustomer) => ({
        //   id: doc.id,
        //   name: doc.data.name,
        //   email: doc.data.email,
        //   phone: doc.data.phone,
        //   status: doc.data.status,
        //   orders: doc.data.orders,
        //   spent: doc.data.total_spent,
        //   joinDate: doc.data.join_date,
        //   location: doc.data.location,
        //   lastOrder: doc.data.last_order || null,
        // }))

        // setCustomers(prismicCustomers)
        
        // Поки використовуємо mock дані
        await new Promise(resolve => setTimeout(resolve, 800)) // Симуляція завантаження
        setCustomers(mockCustomers)
        
      } catch (err) {
        console.error('Error fetching customers:', err)
        setError('Failed to load customers')
        // Fallback до mock даних при помилці
        setCustomers(mockCustomers)
      } finally {
        setLoading(false)
      }
    }

    fetchCustomers()
  }, [])

  const addCustomer = async (customer: Omit<Customer, 'id'>) => {
    try {
      // Тут буде логіка додавання в Prismic
      // const newDoc = await client.createDocument({
      //   type: 'customer',
      //   data: {
      //     name: customer.name,
      //     email: customer.email,
      //     phone: customer.phone,
      //     status: customer.status,
      //     orders: customer.orders,
      //     total_spent: customer.spent,
      //     join_date: customer.joinDate,
      //     location: customer.location,
      //     last_order: customer.lastOrder,
      //   },
      // })
      
      // Поки додаємо локально
      const newCustomer: Customer = {
        ...customer,
        id: Date.now().toString(),
      }
      
      setCustomers(prev => [newCustomer, ...prev])
      return newCustomer
      
    } catch (err) {
      console.error('Error adding customer:', err)
      throw new Error('Failed to add customer')
    }
  }

  const updateCustomer = async (id: string, updates: Partial<Customer>) => {
    try {
      // Тут буде логіка оновлення в Prismic
      // await client.updateDocument(id, { data: updates })
      
      // Поки оновлюємо локально
      setCustomers(prev => 
        prev.map(customer => 
          customer.id === id ? { ...customer, ...updates } : customer
        )
      )
      
    } catch (err) {
      console.error('Error updating customer:', err)
      throw new Error('Failed to update customer')
    }
  }

  const deleteCustomer = async (id: string) => {
    try {
      // Тут буде логіка видалення з Prismic
      // await client.deleteDocument(id)
      
      // Поки видаляємо локально
      setCustomers(prev => prev.filter(customer => customer.id !== id))
      
    } catch (err) {
      console.error('Error deleting customer:', err)
      throw new Error('Failed to delete customer')
    }
  }

  return {
    customers,
    loading,
    error,
    addCustomer,
    updateCustomer,
    deleteCustomer,
  }
}

export type { Customer }
