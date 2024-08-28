import SpecificMain from '@/components/(userdash)/Agencies/SpecificAccount'
import DashNav from '@/components/(userdash)/DashNav'
import React from 'react'


export default function page({ params }: { params: { slug: string } }) {
  const id = params.slug
  return (
    <main className='flex  '>
    <DashNav route='account'/>
    <SpecificMain id={id}/>
  </main>
  )
}