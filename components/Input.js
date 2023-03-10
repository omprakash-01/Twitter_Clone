import { FaceSmileIcon, PhotoIcon } from "@heroicons/react/24/outline";
import { addDoc, collection, serverTimestamp, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { useSession, signOut} from "next-auth/react";
import { useRef, useState } from "react";
import {db, storage} from "../firebase";
export default function input() {
    const {data:session} = useSession();
    const [input, setInput]= useState("");
    const [selectedFile, setSelectedFile]= useState("");
    const filePickerRef= useRef(null);
    
    const sendPost = async () => {
        const docRef = await addDoc(collection(db, "posts"),{
            id: session.user.uid,
            text:input,
            userImg: session.user.image,
            timestamp: serverTimestamp(),
            name: session.user.name,
            username: session.user.username,
        });

        const imageRef = ref(storage, `posts/${docRef.id}/image`);
        // console.log(setSelectedFile);
        if (selectedFile) {
            await uploadString(imageRef, selectedFile, "data_url").then(async () => {
              const downloadURL = await getDownloadURL(imageRef);
              await updateDoc(doc(db, "posts", docRef.id), {
                image: downloadURL,
              });
            });
          }
        setInput("");
    };

    const addimagetoPost= (e)=>{
        const reader =new FileReader();
        if(e.target.files[0]){
            reader.readAsDataURL( e.target.files[0]);
        }
        reader.onload = (readerEvent) => {
           setSelectedFile(readerEvent.target.result);
        };
    };
  return ( 
    <>
 {session && (
        
        <div className='flex border-b border-gray-200'>
        <img onClick={signOut} src={session.user.image} alt="user-img" className='h-20 w-20 rounded-full cursor-pointer hover:brightness-95 p-3 space-x-3 '  />
        <div className="w-full divide-y divide-gray-200">
            <div className="">
                <textarea className='w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700 ' rows="2" placeholder="What's happing guy's?" value={input}
                onChange={(e) => setInput(e.target.value)} ></textarea>
            </div>
            {selectedFile && (
                <div className="">
                    <img src={selectedFile} alt="" />
                </div>
            )}
            <div className="flex items-center justify-between pt-2.5">
                <div className="flex ">
                <div className="" onClick={()=>filePickerRef.current.click()}>

                    <PhotoIcon className= "h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
                    <input type="file"  hidden ref={filePickerRef} onClick={addimagetoPost}/>
                </div>
                    <FaceSmileIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
                </div>
                <button onClick={sendPost} disabled={!input.trim()} className='bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shawdow-md hover:brightness-95 disabled:opacity-50'>Tweet</button>
            </div>
        </div>
    </div>

    )}
    </>
   
    
  );
}
