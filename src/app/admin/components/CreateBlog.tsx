'use client '

import react , {useState} from 'react'

export const Createblog = ()=>{
    const [cta, setCta] = useState('read');

    return   <div className=" p-6  bg-white shadow-md rounded-lg mt-10 mx-5">
    <div className="mb-6">
         <div className='flex gap-x-2 ml-5'>
         <img src="/utils/arrowblueleft.svg" className='-mt-4' alt="arrow" />
         <h1 className="text-xl font-semibold mb-4">Create New Blog</h1>
         </div>
      <div className="border-dashed border-2 border-gray-300 rounded-md p-6 text-center">
        <svg
          className="mx-auto h-10 w-10 text-gray-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          ></path>
        </svg>
        <p className="mt-2 text-sm text-gray-600">
          <span className="font-medium text-blue-600 hover:underline cursor-pointer">
            Click and upload
          </span>{' '}
          or drag and drop maximum file size is 5 MB.
        </p>
      </div>
    </div>

    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Blog Heading
      </label>
      <input
        type="text"
        placeholder="Enter Blog Title"
        className="w-full p-3 border border-gray-300 rounded-md"
      />
    </div>

    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Article
      </label>
      <textarea
        placeholder="Enter Complete Article"
        className="w-full p-3 border border-gray-300 rounded-md h-32"
      ></textarea>
    </div>

    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        CTA
      </label>
      <div className="flex space-x-6">
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="cta"
            value="read"
            checked={cta === 'read'}
            onChange={() => setCta('read')}
            className="form-radio text-blue-600"
          />
          <span className="ml-2">Read Blog</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="cta"
            value="view"
            checked={cta === 'view'}
            onChange={() => setCta('view')}
            className="form-radio text-blue-600"
          />
          <span className="ml-2">View Blog</span>
        </label>
      </div>
    </div>

    <button className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold text-lg hover:bg-blue-700 transition duration-200">
      Upload Blog
    </button>
  </div>
}