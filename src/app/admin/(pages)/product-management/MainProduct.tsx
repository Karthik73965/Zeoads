"use client"
import React, { useState } from 'react'
import AdminMainNav from '../../components/AdminMainNav'
import BlogCard from '@/components/Blogs/BlogCard'
import { useRouter } from 'next/navigation'


type Props = {}

export default function MainProduct({ }: Props) {
  const [Option, SetOption] = useState<string>("Blog")

  const router = useRouter()
  return (
    <main className='w-full dh-bg'>
      <AdminMainNav />
      <section className='mt-10 flex justify-between  mx-5'>
        <div className='flex bg-white border-[1px] gap-[16px] h-[58px]  rounded-[8px]  px-[24px] py-[9px]  '>
          <div onClick={() => SetOption("Blog")} className={` h-[40px] border-b-[2px] pl-2  ${Option == "Blog" ? "primary-text border-[#4779E8]  " : "text-[#3E4C59] border-[] "} pt-2 `} >
            Blog Management
          </div>
          <div onClick={() => SetOption("Product")} className={`h-[40px] border-b-[2px] pl-2  ${Option == "Product" ? "primary-text border-[#4779E8]  " : "text-[#3E4C59] border-[] "} pt-2 [16px] `} >
            Product Edit
          </div>
          <div onClick={() => SetOption("Price")} className={`h-[40px] border-b-[2px] pl-2  ${Option == "Price" ? "primary-text border-[#4779E8]  " : "text-[#3E4C59] border-[] "} pt-2 [16px] `} >
            Price Edit
          </div>
          <div onClick={() => SetOption("Announcement")} className={`h-[40px] border-b-[2px] pl-2  ${Option == "Announcement" ? "primary-text border-[#4779E8]  " : "text-[#3E4C59] border-[] "} pt-2 [16px] `} >
            Announcement Bar
          </div>
        </div>
        {/* Create */}
        <div className='flex gap-[px]'>
          <button onClick={() => router.push('/admin/product-management/CreateBlog')} className='bg-[#4779E8] font-medium flex w-[231px] h-[56px] gap-[12px] py-[16px] pl-[32px] pr-[40px] text-white rounded-lg'>
            Create New blog <img className='mt-1' src="/userDash/Agencies/plus.svg" alt="" />
          </button>
        </div>
      </section>
      <section>
        {
          Option == "Blog" ? <Blogs /> : (
            Option == "Product" ? <ProductEdit /> : (
              Option == "Price" ? <PriceComp /> : (
                Option == "Announcement" ?  <UpdateAnnouncementBar/>:""
              )
            )
          )
        }
      </section>
    </main>
  )
}

const Blogs = () => {
  return <section className='flex size-96 scale-[.80] gap-x-10'>
    <BlogCard main />
    <BlogCard main />
    <BlogCard main />
  </section>
}





const ProductEdit = () => {
  const [adServer, setAdServer] = useState('Meta');
  const [currency, setCurrency] = useState('USD');
  const [creditAccount, setCreditAccount] = useState('');
  const [timezone, setTimezone] = useState('');
  const [link, setLink] = useState('');
  const [buttonText, setButtonText] = useState('Pay Now');
  const [features, setFeatures] = useState([
    'Unlimited spending limit from day 1',
    'Unlimited Domains/Pages and Pixels',
    'Run ads on Restricted category',
    'Cheaper CPM and CPA',
    'Exclusive Panel to manage account',
    'Facebook Rep Support',
  ]);

  const handleFeatureChange = (index: number, value: string) => {
    const updatedFeatures = [...features];
    updatedFeatures[index] = value;
    setFeatures(updatedFeatures);
  };

  const addFeature = () => {
    setFeatures([...features, '']);
  };

  return (
    <div className="max-w-full mx-5 mt-5  p-6  bg-white shadow-md rounded-lg">
      {/* Ad Server Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 font-semibold rounded ${adServer === 'Meta' ? 'bg-gray-200' : 'bg-white'}`}
          onClick={() => setAdServer('Meta')}
        >
          Meta
        </button>
        <button
          className={`px-4 py-2 font-semibold rounded ${adServer === 'Tiktok' ? 'bg-gray-200' : 'bg-white'}`}
          onClick={() => setAdServer('Tiktok')}
        >
          Tiktok
        </button>
        <button
          className={`px-4 py-2 font-semibold rounded ${adServer === 'Google' ? 'bg-gray-200' : 'bg-white'}`}
          onClick={() => setAdServer('Google')}
        >
          Google
        </button>
      </div>

      <div className="flex justify-between mb-6">
        <h1 className="text-xl font-semibold">Product Edit</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Create New Ad Server</button>
      </div>

      <div className="flex space-x-12">
        {/* Left Panel */}
        <div className="w-1/2">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Logo</label>
            <div className="border-dashed border-2 border-gray-300 rounded-lg p-6 text-center">
              <svg
                className="mx-auto h-10 w-10 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              <p className="mt-2 text-sm text-gray-600">Select Logo</p>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Feauture </label>
            <input
              type="text"
              placeholder="Facebook Agency Account"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Body</label>
            <textarea
              placeholder="Top tier Facebook agency accounts with payment method activated."
              className="w-full p-3 border border-gray-300 rounded-md h-24"
            ></textarea>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Features</label>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center justify-between">
                  <input
                    type="text"
                    value={feature}
                    onChange={(e) => handleFeatureChange(index, e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </li>
              ))}
              <li className="flex items-center justify-between">
                <button onClick={addFeature} className="text-blue-600">+ Add More</button>
              </li>
            </ul>
          </div>

          <button className="w-full bg-gray-200 text-gray-700 py-3 rounded-md font-semibold text-lg hover:bg-gray-300 transition duration-200">
            Cancel
          </button>
        </div>

        {/* Right Panel */}
        <div className="w-1/2">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Account Server</label>
            <select
              className="w-full p-3 border border-gray-300 rounded-md"
              value={adServer}
              onChange={(e) => setAdServer(e.target.value)}
            >
              <option value="Meta">Meta</option>
              <option value="Tiktok">Tiktok</option>
              <option value="Google">Google</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Account Currency Option</label>
            <div className="flex space-x-4">
              <select
                className="w-1/2 p-3 border border-gray-300 rounded-md"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <option value="USD">USD</option>
                <option value="INR">INR</option>
              </select>
              <button className="w-1/2 bg-gray-200 text-gray-700 py-3 rounded-md font-semibold hover:bg-gray-300 transition duration-200">
                Add More
              </button>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Credit Account</label>
            <select
              className="w-full p-3 border border-gray-300 rounded-md"
              value={creditAccount}
              onChange={(e) => setCreditAccount(e.target.value)}
            >
              <option value="Credit Account">Credit Account</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Account Timezone</label>
            <select
              className="w-full p-3 border border-gray-300 rounded-md"
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
            >
              <option value="Timezone">Timezone</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Link <span className="text-gray-400">(Optional)</span>
            </label>
            <input
              type="text"
              placeholder="Website or App Store Link"
              className="w-full p-3 border border-gray-300 rounded-md"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Button CTA Text</label>
            <input
              type="text"
              placeholder="Pay Now"
              className="w-full p-3 border border-gray-300 rounded-md"
              value={buttonText}
              onChange={(e) => setButtonText(e.target.value)}
            />
          </div>

          <div className="flex space-x-4">
            <button className="w-1/2 bg-gray-200 text-gray-700 py-3 rounded-md font-semibold hover:bg-gray-300 transition duration-200">
              Cancel
            </button>
            <button className="w-1/2 bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-200">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const PriceComp = () => {
  return <main className='bg-white  rounded-md m-5 p-6'>
    <div className=' flex gap-x-2 ml-5 my-10'>
      <img src="/utils/arrowblueleft.svg" alt="ar" />
      <div className='text-xl font-medium'>Price Table Update </div>
      
    </div>
    <div className=' flex justify-between font-medium mx-5 border-b-2  pb-2'>
      <div>Left Panel </div>
      <div>Right Panel </div>
    </div>
    <section className='mt-10 flex justify-between  mx-5'>
      {/* LEFT PANEL  */}
      <div className="w-[48%]">
        <div className='grid mt-5'>
          <div className='ml-3'>Feauture </div>
          <input value="dummy" className='outline-none border-[1px] p-3 w-full rounded-md' type="text" placeholder='Plans' />
        </div>
        <div className='grid mt-5'>
          <div className='ml-3'>Feauture </div>
          <input value="dummy" className='outline-none border-[1px] p-3 w-full rounded-md' type="text" placeholder='Plans' />
        </div>
        <div className='grid mt-5'>
          <div className='ml-3'>Feauture </div>
          <input value="dummy" className='outline-none border-[1px] p-3 w-full rounded-md' type="text" placeholder='Plans' />
        </div>
        <div className='grid mt-5'>
          <div className='ml-3'>Feauture </div>
          <input value="dummy" className='outline-none border-[1px] p-3 w-full rounded-md' type="text" placeholder='Plans' />
        </div>
        <div className='grid mt-5'>
          <div className='ml-3'>Feauture </div>
          <input value="dummy" className='outline-none border-[1px] p-3 w-full rounded-md' type="text" placeholder='Plans' />
        </div>
      </div>
      {/* RIGHT PANEL  */}
      <div className="w-[48%]">
        <div className='grid mt-5'>
          <div className='ml-3'>Feauture </div>
          <input value="dummy" className='outline-none border-[1px] p-3 w-full rounded-md' type="text" placeholder='Plans' />
        </div>
        <div className='grid mt-5'>
          <div className='ml-3'>Feauture </div>
          <input value="dummy" className='outline-none border-[1px] p-3 w-full rounded-md' type="text" placeholder='Plans' />
        </div>
        <div className='grid mt-5'>
          <div className='ml-3'>Feauture </div>
          <input value="dummy" className='outline-none border-[1px] p-3 w-full rounded-md' type="text" placeholder='Plans' />
        </div>
        <div className='grid mt-5'>
          <div className='ml-3'>Feauture </div>
          <input value="dummy" className='outline-none border-[1px] p-3 w-full rounded-md' type="text" placeholder='Plans' />
        </div>
        <div className='grid mt-5'>
          <div className='ml-3'>Feauture </div>
          <input value="dummy" className='outline-none border-[1px] p-3 w-full rounded-md' type="text" placeholder='Plans' />
        </div>
      </div>
    </section>
    {/* BUtton Cta price change  */}
    <div className='grid mt-10 mx-5 '>
      <div className='ml-3'>Price </div>
      <input value="5999 INR" className='outline-none border-[1px] p-3 w-full rounded-md' type="text" placeholder='Plans' />
    </div>
    {/* Action buttons  */}
    <div className="flex justify-between mt-10 mx-5  w-full">
      <button className="w-[48%] py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
        Cancel
      </button>
      <button className="w-[48%] py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
        Update Price Table
      </button>
    </div>

  </main>
}



const UpdateAnnouncementBar = () => {
  const [message, setMessage] = useState('Latest Summer Offer Sale Going On - Enroll Today');
  const [textColor, setTextColor] = useState('#4779E8');
  const [backgroundColor, setBackgroundColor] = useState('#131516');

  return (
    <div className="mx-5 mt-5 p-6 bg-white shadow-md rounded-lg">
      <div className="flex items-center mb-6">
        <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
        <h2 className="text-xl font-semibold">Update Announcement Bar</h2>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Announcement Bar Message
        </label>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Text Color Hexa Code
          </label>
          <input
            type="text"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Background Label Color Code
          </label>
          <input
            type="text"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex justify-between">
        <button className="w-[48%] py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
          Cancel
        </button>
        <button className="w-[48%] py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Update Announcement Bar
        </button>
      </div>
    </div>
  );
};

