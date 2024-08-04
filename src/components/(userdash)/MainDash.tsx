import React from 'react'
import MainNav from './MainNav'
import DemoVideo from './Home/DemoVideo'

type Props = {}

export default function MainDash({}: Props) {
  return (
    <main className='w-[100vw-252px] min-h-screen dh-bg'>
        <MainNav/>
        <DemoVideo/>
    </main>
  )
}