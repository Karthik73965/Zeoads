import Balance from '@/components/(userdash)/Agencies/slug/Balance'
import Header from '@/components/(userdash)/Agencies/slug/Header'
import MainSlug from '@/components/(userdash)/Agencies/slug/MainSlug'
import React from 'react'

type Props = {}

export default function UserAgecyAcc({ }: Props) {
    return (
        <main className='w-full mt-10  mx-5 border-[1px] border-[#E4E7EC] rounded-[8px] p-[24px] bg-white  '>
            <Header  creditAccount='USD' id='things' link={"dasd"} status='asdasdas' userId='idk' key={"ASdas"}  />
            <Balance balance={1212} currency='USD' id='asdas'/>
            <MainSlug id='asdas'  />
        </main>
    )
}