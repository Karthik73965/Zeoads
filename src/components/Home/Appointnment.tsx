import React from 'react'

type Props = {}

export default function Appointnment({}: Props) {
  return (
    <main className='md:h-[419px] md:mx-20 mx-5 mt-20 bg-[#EEF9F5] rounded-2xl flex-1 grid md:flex justify-between py-[32px] px-[24px]'>
        <img src="/Home/Appointment.svg" alt="appointment imge"  />
        <section className='md:ml-10 '>
            <h5 className='text-[32px] font-bold text-[#1F2933] mt-5 md:mt-20'>Book Your Appointment Now!</h5>
            <p className='text-left  text-[#3E4C59] mt-5'>Still confused? We got you covered! Our Agents will talk to you and help you out with your issue. Just book an timeslot on the button below and our agent will guide you throughout the process. For immediate assistance reach out to us via WhatsApp.</p>
            <div className='gap-x-[16px] grid md:flex gap-y-5 mt-10'>
                <button className=' flex  text-white gap-x-3 bg-[#52CC5A] w-full  rounded-[4px] py-[12px] -pb-8 pl-[32px] pr-[24px]'>
                    <img src='/Home/appoint/wh.png' alt='wh'/> <span>Chat Via Whatsapp</span>
                </button>
                <button className=' flex   text-white gap-x-3 bg-[#4779E8] w-full rounded-[4px] py-[12px] pl-[32px] pr-[24px]'>
                <img src='/Home/appoint/cal.png' alt='cal'/>Book An Appointment
                </button>
            </div>
        </section>

    </main>
  )
}