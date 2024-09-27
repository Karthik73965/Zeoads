import React from 'react'

type Props = {}

export default function Hero({ }: Props) {
    return (
        <>
            <main className='px-5 md:px-20 pt-[72px] mt-10 justify-center  md:h-[800px] bg-[#171C20] '>
                <h1 className='text-[24px] xl:text-[56px] w-full mt-10 text-[#4779E8] font-bold text-center'>The Secret Hero ? </h1>
                <h3 className='text-center text-[14px] xl:text-[32px]  text-semibold text-white mt-4'>Behind Hundreds of Agencies All over the World ?</h3>
                <p className='text-center text-[#E4E7EC] text-[12px] xl:text-[16px]  my-4 xl:mt-5'>Move your customers under Rockads warranty.</p>

                <div className='flex justify-center items-center'>
                    <button className='py-[16px] text-center px-[40px] bg-[#4779E8] w-full text-white md:mt-10 md:w-[169px] rounded-sm'>
                        Get Started
                    </button>
                </div>
                <div className='flex justify-center mt-10 items-center'>
                    <img src="/utils/zeoads.png" alt="ads" />
                </div>
            </main>
            <section>
                <h3 className='text-center text-[#727F8F] text-[14px] md:text-[24px] text-medium  mt-20'>Developed According to Agency Needs</h3>
                <h2 className=' text-[20px] md:text-[32px] text-center mt-2 md:mt-5 font-semibold text-[#1F2933]'>Explore Zeoads Panel</h2>
                <div className='flex justify-center  items-center'>
                <img className='text-center' src="/utils/ArrowDown.svg" alt="arrow" />
                </div>
            </section>
        </>
    )
}