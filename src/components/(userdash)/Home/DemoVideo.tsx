import React from 'react'

type Props = {}

export default function DemoVideo({ }: Props) {
    return (
        <section className='m-4 bg-white rounded-[8px] p-[24px] h-[368px] flex gap-[24px] border-[1px] border-[#E4E7EC] ' >
            <div className='mt-10' >
                <div className='text-[#727F8F]'>Here's Quick Tutorial!</div>
                <h3 className='font-medium mt-5 text-[24px] text-[#1F2933]'>Watch our video guide - learn how to start your Zeoads account today.</h3>
                <div className='primary-text mt-5 font-medium'>Feel free to contact our support </div>
                <div className='primary-text mt-5 font-medium'>Mark As Complete </div>
            </div>
            <img className='w-[534px] h-[320px]  rounded-[8px]' src="/userDash/video.svg" alt="video" />
        </section>
    )
}