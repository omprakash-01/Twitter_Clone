import { FaceSmileIcon, PhotoIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function input() {
  return (
    <div className='flex border-b border-gray-200'>
        <img src="https://yt3.googleusercontent.com/mMkGHtWc98CYoUfKIT-iIxtKF5jiU9XOl0wH9wG4b7Q0Zeq9qKPs1H4TKTDL7rpEghV7XRWtoUI=s900-c-k-c0x00ffffff-no-rj" alt="user-img" className='h-14 w-14 rounded full cursor-pointer hover:brightness-95 p-3 space-x-3'  />
        <div className="w-full divide-y divide-gray-200">
            <div className="">
                <textarea className='w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700 ' rows="2" placeholder="What's happing guy's?" ></textarea>
            </div>
            <div className="flex items-center justify-between pt-2.5">
                <div className="flex ">
                    <PhotoIcon className= "h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
                    <FaceSmileIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
                </div>
                <button className='bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shawdow-md hover:brightness-95 disabled:opacity-50'>Tweet</button>
            </div>
        </div>
    </div>
  )
}
