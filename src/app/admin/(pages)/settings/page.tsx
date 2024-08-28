"use client"
import React from 'react'
import AdminNav from '../../components/AdminNav'
import MainAdminSettings from './MainAdminSettings'

type Props = {}

export default function page({}: Props) {
  return (
    <main className='flex'>
    <AdminNav route='Settings'/>
    <MainAdminSettings/>
    </main>
  )
}