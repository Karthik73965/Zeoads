import DashNav from '@/components/(userdash)/DashNav'
import MainInvoice from '@/components/(userdash)/Settings/MainInvoice'
import React from 'react'

type Props = {}

export default function Page({ }: Props) {
    return (
        <main className='flex  w-full'>
            <DashNav route='Invoice' />
            <MainInvoice />
        </main>
    )
}