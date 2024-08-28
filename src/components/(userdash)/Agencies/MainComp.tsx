"use client"
import React from 'react'
import MainNav from '../MainNav'
import Filters from './Filters'
import Table from './Table'
import useGetSubscription from '@/hooks/useGetSubscription'

type Props = {}
    
export default function MainComp({ }: Props) {
    const subscriptions = useGetSubscription()
    return (
        <main className='w-full  min-h-screen dh-bg'>
            <MainNav />
            <Filters />
            {
                subscriptions ? <Table route='account' /> : <div>NOt done </div>

            }
        </main>
    )
}