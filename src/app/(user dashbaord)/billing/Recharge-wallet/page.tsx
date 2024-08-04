import DashNav from '@/components/(userdash)/DashNav'
import MainRecharge from '@/components/(userdash)/RechargeWallet/MainRecharge'
import React from 'react'

type Props = {}

export default function Page({}: Props) {
  return (
    <main className='flex  w-full'>
      <DashNav route='Recharge-wallet'/>
      <MainRecharge/>
    </main>
  )
}