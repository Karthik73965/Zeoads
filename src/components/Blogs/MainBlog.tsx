import React from 'react'
import BlogCard from './BlogCard'

type Props = {}

export default function MainBlog({ }: Props) {
    return (
        <main className='px-20 pt-[72px] mt-10'>
            <section className='grid items-center justify-center'>
                <div className='bg-[#F5F6FF] flex justify-center align-middle py-[4px] ml-[200px] px-[24px] w-[82px]  primary-text rounded-[100px] mt-10'>
                    Blog
                </div>
                <div className='flex justify-center items-center mt-5'>
                    <img src="/utils/ArrowLeft..svg" alt="arrow" className=' mr-2' />
                    <h2 className='text-[32px] text-[#1F2933] font-bold'>News & Articles</h2>
                </div>
                <ul className='flex justify-center  bg-[#E4E7EC] mt-5'>
                    <li style={{
                        borderLeftColor: '#F5F6FA', // Red color
                        borderBottomColor: '#4779E8' // Yellow color
                    }}
                        className='py-[8px] px-[24px] border-l-2 border-b-2 text-center h-[48px]'>Featured</li>
                    <li style={{
                        borderLeftColor: '#F5F6FA', // Red color
                        borderBottomColor: '#4779E8' // Yellow color
                    }}
                        className='py-[8px] px-[24px] border-l-2 border-b-2 text-center h-[48px]'>Blogs</li>
                    <li style={{
                        borderLeftColor: '#F5F6FA', // Red color
                        borderBottomColor: '#4779E8' // Yellow color
                    }}
                        className='py-[8px] px-[24px] border-l-2 border-b-2 text-center h-[48px]'>Success Story</li>
                    <li style={{
                        borderLeftColor: '#F5F6FA', // Red color
                        borderBottomColor: '#4779E8' // Yellow color
                    }}
                        className='py-[8px] px-[24px] border-l-2 border-b-2 text-center h-[48px]'>Webinars</li>
                </ul>
            </section>
            <section className='mt-10'>
                <h3 className='font-medium text-[#1F2933] text-[24px]'>Our Top Featured Blog Posts</h3>
                <section className='flex justify-between mt-5'>
                    <BlogCard main={true}/>
                    <BlogCard main={false}/>
                    <BlogCard main={false}/>
                </section>

                <section className='flex justify-between mt-5'>
                    <BlogCard main={true}/>
                    <BlogCard main={false}/>
                    <BlogCard main={false}/>
                </section>

                <section className='flex justify-between mt-5'>
                    <BlogCard main={true}/>
                    <BlogCard main={false}/>
                    <BlogCard main={false}/>
                </section>

            </section>


        </main>

    )
}