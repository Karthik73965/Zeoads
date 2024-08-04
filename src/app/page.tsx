import Footer from '@/components/Footer'
import Ads from '@/components/Home/Ads'
import Appointnment from '@/components/Home/Appointnment'
import Faq from '@/components/Home/Faq'
import Feautures from '@/components/Home/Feautures'
import FollowUs from '@/components/Home/FollowUs'
import Hero from '@/components/Home/Hero'
import HomeCta from '@/components/Home/HomeCta'
import Patners from '@/components/Home/Patners'
import Problem from '@/components/Home/Problem'
import Stats from '@/components/Home/Stats'
import Stories from '@/components/Home/Stories'
import WhyZeoAds from '@/components/Home/WhyZeoAds'
import Navbar from '@/components/Navbar'
import React from 'react'

type Props = {}

export default function Page({}: Props) {
  return (
    <>
    <Navbar route='Home'/>
    <Hero/>
    <Ads/>
    <Feautures/>
    <WhyZeoAds/>
    <Problem/>
    <HomeCta/>
    <Stories/>
    <Faq/>
    <Appointnment/>
    <Stats/>
    <FollowUs/>
    <Patners/>
    <Footer/>
    </>
  )
}