"use client"
import React from 'react'
import AdminNav from '../../components/AdminNav'
import MainFund from './MainFund'

type Props = {}

export default function page({}: Props) {
  return (
    <main className='flex'>
      <AdminNav route='Fund'/>
      <MainFund />
    </main>
  )
}