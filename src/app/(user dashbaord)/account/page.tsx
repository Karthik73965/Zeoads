import MainComp from '@/components/(userdash)/Agencies/MainComp'
import DashNav from '@/components/(userdash)/DashNav'
import React from 'react'


export default function Page() {
  return (
    <main className='flex'>
      <DashNav route='account' />
      <MainComp />
    </main>
  )
}