import React from 'react'

type Props = {
    name: string,
    image: string,
    Heading: string,
    description: string,
    list: Array<string>
}


export default function FeauturesHome({ name, image, Heading, description, list }: Props) {
    return (
        <>
            <div className='  w-[384px] h-[776px] py-[40px] px-[24px] rounded-2xl  bg-[#171C20]'>
                <img src={image} alt={name} />
                <h4 className='text-[32px] mt-5 font-semibold text-white'> {Heading}</h4>
                <p className='text-[32px]  font-semibold text-white'>Accounts</p>
                <p className='text-[20px] mt-5 text-[#E4E7EC] font-medium '>{description}</p>
                <div className='text-[#F5F6FA] mt-10 h-[328px]  text-[16px]'>
                {list.map((item, index) => (
                    <div key={index} className=" flex  gap-y-10">
                        <img className='-mt-8' src="/utils/tick.svg" alt="tick" />
                        <p className='ml-5 mb-5'>{item}</p>
                    </div>
                ))}
                </div>
                <button className='bg-white text-black flex w-[336px]  px-[24px] py-[12px] gap-x-[12px] mt-10 text-center h-[48px] rounded-[4px]'>
                    Get {name} Agency Account <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
                </button>
            </div>
        </>

    )
}