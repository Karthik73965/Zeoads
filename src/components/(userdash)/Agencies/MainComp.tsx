import React from 'react'
import MainNav from '../MainNav'
import Filters from './Filters'
import Table from './Table'

type Props = {}

export default function MainComp({ }: Props) {
    return (
        <main className='w-full  min-h-screen dh-bg'>
            <MainNav />
            <Filters/>
            <Table route='account'/>
        </main>
    )
}