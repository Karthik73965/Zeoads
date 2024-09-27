import DashNav from '@/components/(userdash)/DashNav'
import MainDash from '@/components/(userdash)/dashboard/MainDash'
import React from 'react'

type Props = {}

export default function Page({}: Props) {
  return (
    <main className='flex '>
      <DashNav route='dashboard'/>
      <MainDash/>
    </main>
  )
}