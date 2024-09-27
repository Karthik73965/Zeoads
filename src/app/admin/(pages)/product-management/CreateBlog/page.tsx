'use client'
import AdminMainNav from '@/app/admin/components/AdminMainNav'
import AdminNav from '@/app/admin/components/AdminNav'
import { CreateBlog } from '@/app/admin/components/CreateBlog'
import React from 'react'

type Props = {}

export default function Page({}: Props) {
  return (
    
    <main className='flex'>
      <AdminNav route='Product'/>
      <section className='w-full dh-bg'>
        <AdminMainNav/>

        <CreateBlog/>
      </section>
    </main>
  )
}