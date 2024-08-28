import DashNav from '@/components/(userdash)/DashNav'
import MainRecharge from '@/components/(userdash)/RechargeWallet/MainRecharge'
import React from 'react'


export default function Page() {
  return (
    <main className='flex  w-full'>
      <DashNav route='Recharge-wallet'/>
      <MainRecharge/>
    </main>
  )
}