import CtaBlog from '@/components/Blogs/CtaBlog'
import MainBlog from '@/components/Blogs/MainBlog'
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