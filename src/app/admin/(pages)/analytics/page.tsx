"use client"
import React from 'react'
import AdminNav from '../../components/AdminNav'
import MainAnalytics from './MainAnalytics'

type Props = {}

export default function page({}: Props) {
  return (
    <main className='flex'>
      <AdminNav route='Analytics'/>
      <MainAnalytics />
    </main>
  )
}