
import {  EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import {  ChartBarIcon, ChatBubbleOvalLeftEllipsisIcon, HeartIcon, ShareIcon, TrashIcon, } from "@heroicons/react/24/outline";


export default function Post({post}) {
  return (
    <div className="flex  p-3 cursor-pointer border-b border-gray-200 ">

    {/* User image */}

    <img  src={post.userImg} alt="user-img " className="h-14 w-14 rounded-full mr-4 " />


    {/* right Side */}
    <div className="">
    {/* Header */}
    <div className="flex items-center justify-between">
        {/* Post User information */}
        <div className="flex items-center space-x-1 whitespace-nowrap ">
        <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">{post.name}</h4>
        <span className="text-sm sm:text-[15px] ">@{post.username} - </span>
        <span className="text-sm sm:text-[15px] hover:underline">{post.timestamp}</span>
        </div>
        {/* dot Icon */}
        <EllipsisHorizontalIcon className="h-12 hoverEffect w-12 hover:bg-sky-100 hover:text-sky-500 p-2" />

    </div>

{/* Post text */}

<p className="text-gray-800 text-[15px] sm:text-[16px] mb-2">{post.text}</p>

{/* Post image*/}
<img className="rounded-2xl mr-2 " src={post.img} alt=""  />


{/* Icons */}
<div className="flex justify-between text-gray-500 p-2">
<ChatBubbleOvalLeftEllipsisIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100 "/>
<TrashIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100  "/>
<HeartIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100"/>
<ShareIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100"/>
<ChartBarIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100"/>
</div>

    </div>

    </div>
  )
}
