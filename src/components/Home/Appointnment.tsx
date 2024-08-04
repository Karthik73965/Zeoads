import React from 'react'

type Props = {}

export default function Appointnment({}: Props) {
  return (
    <main className='h-[419px] mx-20 mt-20 bg-[#EEF9F5] rounded-2xl flex-1 flex justify-between py-[32px] px-[24px]'>
        <img src="/Home/Appointment.svg" alt="appointment imge"  />
        <section className='ml-10 '>
            <h5 className='text-[32px] font-bold text-[#1F2933] mt-20'>Book Your Appointment Now!</h5>
            <p className='text-left  text-[#3E4C59] mt-5'>Still confused? We got you covered! Our Agents will talk to you and help you out with your issue. Just book an timeslot on the button below and our agent will guide you throughout the process. For immediate assistance reach out to us via WhatsApp.</p>
            <div className='gap-x-[16px] flex mt-10'>
                <button className=' flex  text-white gap-x-3 bg-[#52CC5A] rounded-[4px] py-[12px] -pb-8 pl-[32px] pr-[24px]'>
                    <img src='/Home/appoint/wh.png'/> <span>Chat Via Whatsapp</span>
                </button>
                <button className=' flex   text-white gap-x-3 bg-[#4779E8] rounded-[4px] py-[12px] pl-[32px] pr-[24px]'>
                <img src='/Home/appoint/cal.png'/>Book An Appointment
                </button>
            </div>
        </section>

    </main>
  )
}