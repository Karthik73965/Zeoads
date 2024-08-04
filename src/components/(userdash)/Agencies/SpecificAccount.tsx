import React from 'react'
import MainNav from '../MainNav'
import SpecificSection from './SpecificSection'

type Props = {}

export default function SpecificMain({ }: Props) {
    return (
        <main className='w-full  min-h-screen dh-bg'>
            <MainNav />
            <SpecificSection/>
        </main>

    )
}