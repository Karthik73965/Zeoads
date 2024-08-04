import SpecificMain from '@/components/(userdash)/Agencies/SpecificAccount'
import DashNav from '@/components/(userdash)/DashNav'
import React from 'react'

type Props = {}

export default function page({}: Props) {
  return (
    <main className='flex  '>
    <DashNav route='account'/>
    <SpecificMain/>
  </main>
  )
}