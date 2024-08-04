import React from 'react'
import MainNav from '../MainNav'

type Props = {}

export default function MainInvoice({ }: Props) {
    return (
        <main className='w-full   dh-bg'>
            <MainNav />
            <main className='my-10 mx-5 bg-white rounded-[8px] p-[24px] border-[1px] '>
                <h3 className='text-[#1F2933]  font-medium text-[24px]' >Invoice Settings</h3>
                <p className='text-[#3E4C59] mt-1  text-[14px]'>Please enter company information</p>
                <div className='primary-text flex mt-2 gap-[5px]'>See all invoices <img src="/userDash/Agencies/tiltedblue.svg" alt="" /></div>
                {/* Details */}
                <section className='flex justify-between flex-1 mt-5'>
                    <div>
                        <div className='text-[#1F2933] font-medium'>Billing Type * </div>
                        <select defaultValue={"default"} className="outline-none mt-5 px-[16px] py-[12px] w-[434px] border-[1px] rounded-[8px] h-[56px] ">
                            <option className='p-7' value="default" disabled>Select an option</option>
                            <option className='p-7' value="default">Select an option</option>
                        </select>
                    </div>
                    <div>
                        <div className='text-[#1F2933] font-medium'>Country * </div>
                        <select defaultValue={"default"} className="outline-none mt-5 px-[16px] py-[12px] w-[434px] border-[1px] rounded-[8px] h-[56px] ">
                            <option className='p-7' value="default" disabled>Select an option</option>
                            <option className='p-7' value="default">Select an option</option>
                        </select>
                    </div>
                </section>
                {/* text feilds */}
                <section className='flex justify-between flex-1 mt-5'>
                    <div>
                        <div className='text-[#1F2933] font-medium'>Name * </div>
                        <input type='email' className="outline-none mt-5 px-[16px] py-[12px] w-[434px] border-[1px] rounded-[8px] h-[56px] " />
                    </div>
                    <div>
                        <div className='text-[#1F2933] font-medium'>Email * </div>
                        <input type='email' className="outline-none mt-5 px-[16px] py-[12px] w-[434px] border-[1px] rounded-[8px] h-[56px] " />
                    </div>
                </section>
                <div className='mt-5'>
                    <div className='text-[#1F2933] font-medium'>Adress Detials * </div>
                    <input type='email' className="outline-none mt-5 px-[16px] py-[12px]  w-full border-[1px] rounded-[8px] h-[80px] " />
                </div>
                {/* video */}
                <section className=' my-4 bg-white rounded-[8px] p-[24px]  border-[1px] border-[#E4E7EC] ' >
                   <div className='flex gap-[24px]'>
                   <img className='w-[534px] h-[320px]  rounded-[8px]' src="/userDash/video.svg" alt="video" />
                    <div className='mt-10' >
                        <div className='text-[#727F8F]'>Here's Quick Tutorial!</div>
                        <h3 className='font-medium mt-5 text-[24px] text-[#1F2933]'>Watch our video guide - learn how to start your Zeoads account today.</h3>
                        <div className='primary-text mt-5 font-medium'>Feel free to contact our support </div>
                    </div>
                   </div>
                    {/* stuff  */}
                    <div className='mt-5'>
                        <div className='text-[#171C20] font-medium'>Select Model </div>
                        <div className='flex mt-3 '>
                            <div className='px-[16px] py-[8px] gap-[16px]  flex text-center rounded-[4px] h-[40px]'>
                                <input name='model' type="radio" /> <div>Commission Based model </div>
                            </div>
                            <div className='px-[16px] py-[8px] gap-[16px]  flex text-center rounded-[4px] h-[40px]'>
                                <input name='model' type="radio" /> <div>Non - Commission Based model </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className='text-[#171C20] font-medium'>Select Currecny </div>
                        <div className='flex mt-3 gap-[16px]'>
                            <button className='px-[16px] py-[8px] border-[1px]  border-[#4779E8] text-center rounded-[4px] h-[40px]'>
                                USD
                            </button>
                            <button className='px-[16px] py-[8px] border-[1px]  border-[#4779E8] text-center rounded-[4px] h-[40px]'>
                                INR
                            </button>
                        </div>
                    </div>
                </section>
                {/* remaining details  */}
                <section className='flex justify-between flex-1 mt-5'>
                    <div>
                        <div className='text-[#1F2933] font-medium'>Zip Code  * </div>
                        <input type='email' className="outline-none mt-5 px-[16px] py-[12px] w-[434px] border-[1px] rounded-[8px] h-[56px] " />
                    </div>
                    <div>
                        <div className='text-[#1F2933] font-medium'>Tax Office * </div>
                        <input type='email' className="outline-none mt-5 px-[16px] py-[12px] w-[434px] border-[1px] rounded-[8px] h-[56px] " />
                    </div>
                </section>
                {/* last */}
                <section className='flex justify-between flex-1 mt-5'>
                    <div>
                        <div className='text-[#1F2933] font-medium'>Registration Number  * </div>
                        <input type='email' className="outline-none mt-5 px-[16px] py-[12px] w-[434px] border-[1px] rounded-[8px] h-[56px] " />
                    </div>
                    <div>
                        <div className='text-[#1F2933] font-medium'>Phone Number * </div>
                        <input type='email' className="outline-none mt-5 px-[16px] py-[12px] w-[434px] border-[1px] rounded-[8px] h-[56px] " />
                    </div>
                </section>
                {/* buttons */}
                <section className='mt-10 flex gap-x-[24px]'>
                    <button className='py-[12px] px-[32px] rounded-[4px] bg-[#4779E8] text-white'>
                        Save
                    </button>
                    <button className='py-[12px] px-[32px] rounded-[4px] primary-text border-[1px] border-[#4779E8] text-white'>
                        cancel 
                    </button>

                </section>

            </main>

        </main>
    )
}