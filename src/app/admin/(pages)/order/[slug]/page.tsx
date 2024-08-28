import React from 'react'
import AdminNav from '@/app/admin/components/AdminNav'
import MainOrders from '../../manage-orders/MainOrders'
import MainOrderSlug from './MainOrderSlug'

type Props = {}

export default function page({ params }: { params: { slug: string } }) {
  const id = params.slug
  return (
    <main className='flex'>
      <AdminNav route='Orders'/>
      <MainOrderSlug id={id} />
      </main>
  )
}