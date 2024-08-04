import MainComp from '@/components/(userdash)/Agencies/MainComp'
import DashNav from '@/components/(userdash)/DashNav'
import React from 'react'

type Props = {}

export default function page({ }: Props) {
  return (
    <main className='flex'>
      <DashNav route='account' />
      <MainComp />
    </main>
  )
}