"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {
    route: string
}

export default function Navbar({ route }: Props) {
    const router = useRouter();

    return (
        <nav className='h-[72px]  border-b-[1px] w-[100vw] fixed z-50 bg-white  border-[#E4E7EC]  px-20  pt-6 -mt-10  min- flex justify-between'>
            <img src='/logo.svg' className='w-[108px] h-[24px]' alt='logo' />
            <ul className='flex bg-white gap-x-[40px]'>
                <li onClick={()=>router.push('/')} className={` cursor-pointer ${route == "Home" ? 'primary-text ' : "Neutral5"}`}>Home</li>
                <li onClick={()=>router.push('/pricing')} className={` cursor-pointer ${route == "Pricing" ? 'primary-text ' : "Neutral5"}`}>Pricing</li>
                <li onClick={()=>router.push('/zeoads-for-agencies')} className={` cursor-pointer ${route == "Zeoads" ? 'primary-text ' : "Neutral5"}`}>Zeoads for agencies</li>
                <li onClick={()=>router.push('/Blog')} className={` cursor-pointer ${route == "Blog" ? 'primary-text ' : "Neutral5"} flex `}>Blog <div className='w-[47px] text-white h-[25px] bg-[#4779E8] text-center rounded-[4px]  ml-2'>New</div></li>
            </ul>
            <div className='flex  gap-x-[32px]'>
                <button className=' h-[40px] -mt-2 border w-[91px]  rounded-[4px] border-[#4779E8] primary-text '>Login</button>
                <div onClick={()=>router.push('/signup')}>
                    
                <button  className=' h-[40px] -mt-2  border rounded-[4px] w-[137px] border-[#4779E8] bg-[#4779E8] text-white '>Get started</button>
                </div>
            </div>
        </nav>
    )
}