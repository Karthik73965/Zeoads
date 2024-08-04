import React from 'react'
import MainNav from '../MainNav'

type Props = {}

export default function MainSettings({ }: Props) {
    return (
        <main className='w-full   dh-bg'>
            <MainNav />
            <section className='bg-white mx-5 my-10  rounded-[8px] p-[24px] border-[1px]'>
                <section className='mx-5 flex justify-between '>
                    <div>
                        <div className='font-medium text-[#1F2933] text-[24px]'>User Management</div>
                        <div className='text-[#3E4C59] text-[14px] mt-1'>Manage profile and security settings</div>
                    </div>
                    <div className='border-[1px] flex h-[40px] gap-[16px] rounded-[8px] px-[16px] py-[8px]'>
                        <div>Edit</div>
                        <img className='w-[24px] h-[24px]' src="/utils/edit.svg" alt="edit" />
                    </div>
                </section>
                {/* profile info */}
                <section className='mt-5 border-b-[1px] pb-2 mx-5 flex justify-between border-[#E4E7EC] h-[220px]'>
                    <div className='my-10' >
                        <div className='text-[#1F2933] font-medium'>Profile picture</div>
                        <img className='w-[120px] h-[120px] rounded-full my-3' src="/userDash/Nav/Profile.svg" alt="Profile" />
                    </div>
                    <div className='w-[173px] my-auto'>
                        <div className='text-[#1F2933] font-medium'>Name</div>
                        <div className='text-[#3E4C59]'>Sai Kumar</div>
                    </div>
                    <div className='w-[173px] my-auto'>
                        <div className='text-[#1F2933] font-medium'>Email</div>
                        <div className='text-[#3E4C59]'>Saikumar@gmail.in</div>
                    </div>
                    <div className='w-[173px] my-auto'>
                        <div className='text-[#1F2933] font-medium'>Phone- Number </div>
                        <div className='text-[#3E4C59]'>+91 999999999</div>
                    </div>
                </section>
                {/* Panel info */}
                <section className=' border-b-[1px]  mx-5 flex justify-between border-[#E4E7EC] h-[180px]'>
                    <div className='my-auto'>
                        <div className='text-[#1F2933] font-medium'>Panel Settings</div>
                        <div className='text-[#3E4C59] text-[14px]'>Yoour Timezone and language</div>
                    </div>
                    <div className=' my-auto'>
                        <div className='text-[#1F2933] font-medium'>Commission</div>
                        <div className='text-[#3E4C59] text-[14px]'>16% Percent</div>
                    </div>
                    <div className=' my-auto'>
                        <div className='text-[#1F2933] font-medium'>Language</div>
                        <div className='text-[#3E4C59] text-[14px]'>English</div>
                    </div>
                    <div className=' my-auto'>
                        <div className='text-[#1F2933]  font-medium'>Time Zone</div>
                        <div className='text-[#3E4C59] text-[14px]'>IST - Indian Standard Time</div>
                    </div>
                    <div className='border-[1px] my-auto flex h-[40px] gap-[16px] rounded-[8px] px-[16px] py-[8px]'>
                        <div>Edit</div>
                        <img className='w-[24px] h-[24px]' src="/utils/edit.svg" alt="edit" />
                    </div>
                </section>
                {/* KYC status */}
                <section className=' border-b-[1px] py-10 mx-5 flex justify-between border-[#E4E7EC] '>
                    <div className=' my-auto'>
                        <div className='primary-text  font-semibold'>KYC Status</div>
                    </div>
                    <div>
                        <div className=' w-[100px] text-[14px] pr-4 h-[40px] text-center  cursor-pointer font-medium text-[#171C20]'><span className='text-[#F3CC02] bg-[#FCF8DD] py-[4px] px-[12px]'>Pending</span></div>
                    </div>
                </section>
                {/* CTA  */}
                <section className=' border-[1px]  mx-5 pl-3 py-[24px] flex justify-between border-[#E4E7EC] '>
                    <div className='flex h-[80px] gap-[24px]'>
                        <img className='rounded-full w-[56px] h-[56px]' src="/utils/walletblue.svg" alt="wallet" />
                        <div>
                            <div className='text-[24px] font-medium text-[#1F2933]'>Recharge Your wallet</div>
                            <p className='text-[#3E4C59] text-[14px] mt-2'>Feel free to contact us if you have any doubt regarding our plans.</p>
                        </div>
                        <div className='flex gap-[48px]'>
                            <button className='w- primary-text h-[48px]  rounded-[4px] py-[12px] px-[32px] border-[1px] border-[#4779E8] text-center'>
                                Contact Us
                            </button>
                            <button className=' text-white h-[48px]  rounded-[4px] py-[12px] px-[32px] border-[1px] bg-[#4779E8] text-center'>
                                Let's get Started
                            </button>

                        </div>

                    </div>

                </section>

            </section>
        </main>
    )
}