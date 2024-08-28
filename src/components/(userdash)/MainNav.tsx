import React from 'react'
import { ProfileToggle } from './Nav/ProfieToggle'
import { NotificationsToggle } from './Nav/NotificationsToggle'


export default function MainNav() {
  return (
    <header className='h-[84px] w-full flex justify-between py-[16px] px-[24px]  border-b-[1px] brder-[#E4E7EC]'>
      <h3 className='text-[#171C20] gap-[4px] mt-2 flex font-semibold text-[20px]'><div>Good Morning!</div> <img className='w-[32px] -mt-5 ' src='/home/handshake.svg' alt='handshake' /></h3>
      <section className=' flex gap-[24px] '>
        <div className='flex bg-white border-[1px] rounded-[8px] gap-[10px]  w-[287px]'>
          <img className='w-[22px] my-auto mx-auto h-[22px]' src="/userDash/Nav/search.png" alt="search" />
          <input type="text" className='outline-none text-[#52606D]' placeholder='Search' />
        </div>
        <div className='flex border-r-[1px]'>
          <NotificationsToggle />
          <img src="/userDash/Nav/Faq.svg" alt="Faq" />
        </div>
        <ProfileToggle />
      </section>
    </header>
  )
}