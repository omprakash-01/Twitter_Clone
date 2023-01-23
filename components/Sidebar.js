import Image from "next/image";
import SidebarMenuitem from "./SidebarMenuitem";
import {HomeIcon} from "@heroicons/react/24/solid";
import {BellIcon, BookmarkIcon, ClipboardIcon, HashtagIcon, InboxIcon, UserIcon, EllipsisHorizontalCircleIcon, EllipsisHorizontalIcon, } from "@heroicons/react/24/outline";
export default function sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">

        {/* Twitter Logo */}

        <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">

            <Image 
           width="50"
          height="50"
          src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png" >
            </Image>
        </div>



        {/* Menu */}
        <div className="mt-4 mb-2.5 xl:items-start ">
            <SidebarMenuitem text="Home" Icon={HomeIcon} active/>
            <SidebarMenuitem text="Explore" Icon={HashtagIcon}/>
            <SidebarMenuitem text="Notification" Icon={BellIcon}/>
            <SidebarMenuitem text="Messages" Icon={InboxIcon}/>
            <SidebarMenuitem text="Bookmark" Icon={BookmarkIcon}/>
            <SidebarMenuitem text="Lists" Icon={ClipboardIcon}/>
            <SidebarMenuitem text="Profile" Icon={UserIcon}/>
            <SidebarMenuitem text="More" Icon={EllipsisHorizontalCircleIcon}/>
        </div>


        {/* Buttons */}

        <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
            Tweet
          </button>


        {/* mini-Profile */}
        <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
            <img src="https://yt3.googleusercontent.com/mMkGHtWc98CYoUfKIT-iIxtKF5jiU9XOl0wH9wG4b7Q0Zeq9qKPs1H4TKTDL7rpEghV7XRWtoUI=s900-c-k-c0x00ffffff-no-rj" alt="user-img" className="h-10 w-10 rounded-full xl:mr-2 " />
            <div className="leading-5 hidden xl:inline">
                <h4 className="font-bold ">Sarkari Kingdom</h4>
                <p className="text-grey-500">@sarkarikingdom</p>
            </div>
            <EllipsisHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline"/>
        </div>
    </div>
  )
}
