import { SparklesIcon } from "@heroicons/react/24/outline";
import Input from "./Input";
import Post from "./Post";

export default function Feed() {
  const posts=[
    {
      id:"1",
      name:"Sarkari Kingdom",
      username:"sarkarikingdom",
      userImg:"https://yt3.googleusercontent.com/mMkGHtWc98CYoUfKIT-iIxtKF5jiU9XOl0wH9wG4b7Q0Zeq9qKPs1H4TKTDL7rpEghV7XRWtoUI=s900-c-k-c0x00ffffff-no-rj",
      img:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
      text:"How to Learn Coding?",
      timestamp:"1 hour ago",
    },
    {
      id:"2",
      name:"Sarkari Kingdom",
      username:"sarkarikingdom",
      userImg:"https://yt3.googleusercontent.com/mMkGHtWc98CYoUfKIT-iIxtKF5jiU9XOl0wH9wG4b7Q0Zeq9qKPs1H4TKTDL7rpEghV7XRWtoUI=s900-c-k-c0x00ffffff-no-rj",
      img:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
      text:"Do you Known Coding?",
      timestamp:"3 hour ago",
    },
  ]
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200  xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
        <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
            <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
            <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
                <SparklesIcon className="h-5"/>
            </div>
        </div>
        <Input/>
        {posts.map((post) => (
          <Post key={post.id} post={post}/>
        ))}
    </div>
  );
}
