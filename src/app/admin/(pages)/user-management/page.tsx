
import React from 'react'
import AdminNav from '../../components/AdminNav'
import UserMain from '../../components/Main/UserMain'

type Props = {}

export default function page({ }: Props) {
  return (
    <main className='flex'>
      <AdminNav route='User' />
      <UserMain />
    </main>
  )
}