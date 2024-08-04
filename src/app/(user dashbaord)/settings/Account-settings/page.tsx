import DashNav from '@/components/(userdash)/DashNav'
import MainSettings from '@/components/(userdash)/Settings/MainSettings'
import React from 'react'

type Props = {}

export default function Page({ }: Props) {
    return (
        <main className='flex  w-full'>
            <DashNav route='Settings' />
            <MainSettings/>
        </main>
    )
}