import React from 'react'
import MainNav from '../MainNav'
import SpecificSection from './SpecificSection'

type Props = {
    id:string
}

export default function SpecificMain({id }: Props) {
    return (
        <main className='w-full  min-h-screen dh-bg'>
            <MainNav />
            <SpecificSection  id={id}/>
        </main>

    )
}