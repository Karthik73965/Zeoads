import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Compare from '@/components/Pricing/Compare'
import Cta from '@/components/Pricing/Cta'
import Demo from '@/components/Pricing/Demo'
import Hero from '@/components/Pricing/Hero'
import React from 'react'

type Props = {}

export default function Page({}: Props) {
  return (
    <>
    <Navbar route='Pricing'/>
    <Hero/>
    <Demo/>
    <Compare/>
    <Cta/>
    <Footer/>
    </>
  )
}