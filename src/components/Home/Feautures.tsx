import FeauturesHome from '../../app/ui/FeauturesHome'
import React from 'react'

type Props = {}

export const Facebookdata = [
    "One time Charges ( No monthly charges )",
    "Unlimited spending limit from day 1",
    "Add Unlimited Domains/Pages and Pixels",
    "Run ads on Restricted category",
    "Cheaper CPM and CPA",
    "Exclusive Panel to manage account",
    "Facebook Rep Support"
]
export const Tiktokdata = [
    "One time Charges ( No monthly charges )",
    "No Spending Limits from Day 1 ",
    "Add Unlimited Domains and Pages",
    "Run ads on Restricted category",
    "Cheaper CPM and CPA",
    "Target any geolocation",
    "Tiktok Rep Support"
]
export const Googledata = [
    "One time Charges ( No monthly charges )",
    "Unlimited spending limit from day 1",
    "Add Unlimited Domains and Pages",
    "Run ads on Restricted category",
    "Cheaper CPM and CPA",
    "Exclusive Panel to manage account",
    "Google Rep Support"
]

export default function Feautures({ }: Props) {
    return (
        <main className='md:px-20 mt-10 md:mt-0 px-5 pb-10 '>
            <h3 className='text-center font-medium text-[20px] md:text-[32px] '>We Can Provide Support for the Following Ad Platforms.</h3>
            <section className='md:flex grid gap-y-5 justify-between mt-10'>
                <FeauturesHome name='Facebook' Heading='Facebook Agency' description='Top tier Fb agency accounts with payment method activated.' image='/Home/adlogos/meta.svg' list={Facebookdata} />
                <FeauturesHome name='Tiktok' Heading='Tiktok Agency' description='Scale effortlessly with our Tiktok Agency accounts.' image='/Home/adlogos/tiktok.svg' list={Tiktokdata} />
                <FeauturesHome name='Google' Heading='Google Agency' description='Top tier Google agency accounts with payment method activated.' image='/Home/adlogos/google.svg' list={Googledata} />
            </section>
        </main>
    )
}