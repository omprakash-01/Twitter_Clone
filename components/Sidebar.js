import Image from "next/image";
import SidebarMenuitem from "./SidebarMenuitem";
import {HomeIcon} from "@heroicons/react/24/solid";
import {BellIcon, BookmarkIcon, ClipboardIcon, HashtagIcon, InboxIcon, UserIcon, EllipsisHorizontalCircleIcon, EllipsisHorizontalIcon, } from "@heroicons/react/24/outline";
import { useSession, signIn, signOut} from "next-auth/react";
export default function sidebar() {
  const {data:session} = useSession();
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
            {session && (
              <>
              <SidebarMenuitem text="Notification" Icon={BellIcon}/>
            <SidebarMenuitem text="Messages" Icon={InboxIcon}/>
            <SidebarMenuitem text="Bookmark" Icon={BookmarkIcon}/>
            <SidebarMenuitem text="Lists" Icon={ClipboardIcon}/>
            <SidebarMenuitem text="Profile" Icon={UserIcon}/>
            <SidebarMenuitem text="More" Icon={EllipsisHorizontalCircleIcon}/>
              </>
          

      
            )}
            
        </div>


        {/* Buttons */}
        {session ? (
          <>
          <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
            Tweet
          </button>


        {/* mini-Profile */}
        <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
            <img onClick={signOut} src={session.user.image}  alt="user-img" className="h-10 w-10 rounded-full xl:mr-2 " />
            <div className="leading-5 hidden xl:inline">
                <h4 className="font-bold ">{session.user.name}</h4>
                <p className="text-grey-500">@ {session.user.username}</p>
            </div>
            <EllipsisHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline"/>
        </div>
          </>
        ):(
          <button onClick={signIn} className="bg-blue-400 text-white rounded-full w-36 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline" >Sign in</button>
        )}

        
    </div>
  );
}
