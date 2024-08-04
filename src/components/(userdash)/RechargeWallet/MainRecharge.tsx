import React from 'react'
import MainNav from '../MainNav'
import CreditCard from './CreditCard'
import { CreateCreditAccount } from '../CreateCreditAccount'

type Props = {}

export default function MainRecharge({ }: Props) {
  return (
    <main className='w-full  min-h-screen dh-bg'>
      <MainNav />
      <section className='mx-5 mt-10 flex justify-between'>
        <div className='flex bg-white border-[1px] gap-[16px] h-[56px] w-[364px] rounded-[8px]  px-3  '>
          <img className='w-[22px] my-auto  h-[22px]' src="/userDash/Nav/search.png" alt="search" />
          <input type="text" className='outline-none text-[#52606D]' placeholder='Search' />
        </div>
        <CreateCreditAccount/>
      </section>
      <section className='m-5 flex  gap-[50px]'>
        <CreditCard/>
        <CreditCard/>
      </section>
    </main>
  )
}