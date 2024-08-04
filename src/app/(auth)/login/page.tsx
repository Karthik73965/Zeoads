import React from 'react'

type Props = {}

export default function page({ }: Props) {
    return (
        <main className='bg-gray-100 pt-10 min-h-screen'>
            <section className='w-[792px] border-[1px] rounded-[8px] shadow-xl bg-white border-[#E4E7EC] m-auto px-[24px] py-[40px]'>
                <img src="/logo.svg" alt="logo" className='mx-auto ' />
                <h2 className='text-center text-[#1F2933] mt-5 text-[32px] font-semibold'>Login to ZEOADS</h2>
                <p className='text-center text-[18px] text-[#3E4C59] mt-2'>ZEOADS is not a marketing platform, It is a focused partner to grow your business.</p>
                <div className='mt-10 flex justify-between'>
                    <div className='w-[360px] h-[56px]  py-[16px] px-[24px] border-[1px] justify-center flex gap-[8px] border-[#E4E7EC]  rounded-[4px] '>
                        <img className='w-[24px] h-[24px]' src='/Home/adlogos/google.svg' alt="Google" />
                        <span className='text-[#1F2933] font-medium'>Google</span>
                    </div>
                    <div className='w-[360px] h-[56px]  py-[16px] px-[24px] border-[1px] justify-center flex gap-[8px] border-[#E4E7EC]  rounded-[4px] '>
                        <img className='w-[24px] h-[24px] rounded-full' src='/Facebook.svg' alt="Google" />
                        <span className='text-[#1F2933] font-medium'>Facebook</span>
                    </div>
                </div>
                <div className="relative flex items-center mt-5">
                    <hr className="flex-grow  border-gray-300" />
                    <div className=" bg-white px-2 text-[#727F8F]">or continue with email</div>
                    <hr className="flex-grow border-gray-300" />
                </div>
                <section className='mt-5'>
                    <div className='border-[1px] border-[#E4E7EC] h-[56px] flex py-[12px] gap-[16px] px-[16px]'>
                        <img src="/utils/mail.svg" className='w-[21px] h-[15px] my-auto' alt="mail" />
                        <input type="text" className='outline-none w-full' placeholder='Email' name="" id="" />
                    </div>
                    <div className='border-[1px] mt-5 border-[#E4E7EC] h-[56px] flex py-[12px] gap-[16px] px-[16px]'>
                        <img src="/utils/lock.svg" className='w-[21px] h-[15px] my-auto' alt="mail" />
                        <input type="password" className='outline-none w-full' placeholder='password' name="" id="" />
                    </div>
                </section>
                <div className='flex justify-between mt-5 px-3'>
                    <div className='flex gap-x-3'>
                        <input type="checkbox" defaultChecked name="" id="" />
                        <div className='text-[12px]  text-[#727F8F] font-medium  mt-1'>Remember me</div>
                    </div>
                    <div className='text-[12px]  primary-text font-medium  mt-1'>
                        Forget Password ?
                    </div>
                </div>
                <button className='h-[56px] bg-[#4779E8] w-full text-center mt-5 text-white rounded-[4px] py-[16px] px-[40px] '>
                    Login Now
                </button>
                <div className='text-center mt-10'>
                    Not a member  ?  <span className='primary-text'>Sign Up Now </span>
                </div>
            </section>
        </main>
    )
}