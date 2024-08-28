import React from 'react'
import AdminMainNav from '../../components/AdminMainNav'
import OrdersTable from '../../components/OrdersTable'

type Props = {}

export default function MainOrders() {
  return (
    <main className='w-full dh-bg'>
        <AdminMainNav/>
        <OrdersTable />  
    </main>
  )
}