import React from 'react'

type Props = {}

export default function Footer({ }: Props) {
  return (
    <footer className='bg-[#171C20] h-[269px] flex align-middle justify-center py-[40px] px-[120px] mt-20 '>
      <section>
        <div className='text-center font-medium text-[#E4E7EC] mt-[24px]'> Our Financial Solutions</div>
             <img className='mt-3' src="/footer/payment.png" alt=" Payment patners" />
        

        <center className=' flex mt-5 gap-x-10 ml-36  text-center'>
          <img src='/footer/linkedin.svg' alt='linkedin' />
          <img src='/footer/facebook.svg' alt='facebook' />
          <img src='/footer/insta.svg' alt='instagram' />
          <img src='/footer/x.svg' alt='twitter' />
        </center>
        <div className='flex text-center text-[#E4E7EC] gap-x-5 ml-44 mt-7'> <img src='/footer/copy.svg' alt='copy' />Copyright 2024</div>
      </section>
    </footer>
  )
}