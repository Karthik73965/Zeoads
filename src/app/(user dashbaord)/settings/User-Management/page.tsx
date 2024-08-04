import DashNav from '@/components/(userdash)/DashNav'
import MainUser from '@/components/(userdash)/Settings/MainUser'

type Props = {}

export default function Page({ }: Props) {
    return (
        <main className='flex  w-full'>
            <DashNav route='User-Management' />
            <MainUser />
        </main>
    )
}