import React from 'react'
import AdminNav from '../../components/AdminNav'
import MainProduct from './MainProduct'

type Props = {}

export default function page({}: Props) {
  return (
    <main className='flex'>
      <AdminNav route='Product'/>
      <MainProduct/>
      </main>
  )
}