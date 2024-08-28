import DashNav from '@/components/(userdash)/DashNav'
import React from 'react'
import MainRecharge from './MainRecharge'

type Props = {}

export default function Page({ params }: { params: { slug: string }}) {
  const id = params.slug || ""
  return ( 
    <main className='flex  w-full'>
      <DashNav route='Recharge-wallet'/>
      <MainRecharge id={id}/>
    </main>
  )
}