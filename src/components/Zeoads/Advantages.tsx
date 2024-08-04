import AdvantagesChild from '@/app/ui/AdvantagesChild'
import React from 'react'

type Props = {}

export default function Advantages({ }: Props) {
    return (
        <main className='mx-20 mt-20'>
                <AdvantagesChild index={1} heading='Multiple Payment Methods' text='Enjoy the convenience of topping up balances using various payment methods, including credit cards, bank transfers, Wise, Stripe, Payoneer, and even crypto (available with USDT). Reach out to our sales consultants to confirm availability in your region.'/>
                <AdvantagesChild index={2} heading='Ad Account Transaction Overview' text='Keep a sharp eye on your transactions with an intuitive overview screen, allowing you to track expenditures within your account effortlessly. Efficiently analyze and adjust your campaign budgets with a clear, real-time overview of your financial transactions.'/>
                <AdvantagesChild index={3} heading='Auto Wallet Loading' text='The long-awaited feature is now live! Elevate your Rockads experience with our latest update. Dive in and explore easy payback between ad accounts and credit account you’ve been waiting for! Get and allocate ad credit through your single customer balance for all your accounts across all platforms. Reload, withdraw and transfer ad credit from one platform to another.'/>
        </main>
    )
}