import CtaBlog from '@/components/Blog/CtaBlog'
import MainBlog from '@/components/Blog/MainBlog'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

type Props = {}

export default function Page({}: Props) {
  return (
    <>
    <Navbar route='Blog'/>
    <MainBlog/>
    <CtaBlog/>
    <Footer/>
    </>
  )
}