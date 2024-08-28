import React from 'react'
import AdminNav from '../../components/AdminNav'
import MainOrders from './MainOrders'

type Props = {}

export default function page({}: Props) {
  return (
    <main className='flex'>
      <AdminNav route='Orders'/>
      <MainOrders />
    </main>
  )
}