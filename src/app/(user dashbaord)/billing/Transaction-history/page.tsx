import DashNav from '@/components/(userdash)/DashNav'
import MainHistory from '@/components/(userdash)/History/MainHistory'
import React from 'react'

type Props = {}

export default function Page({ }: Props) {
    return (
        <main className='flex  w-full'>
            <DashNav route='Transaction-history' />
            <MainHistory />
        </main>
    )
}