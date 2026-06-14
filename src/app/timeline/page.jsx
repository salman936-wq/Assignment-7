'use client'
import { Context } from "@/provider/ContextProvider";
import Image from "next/image";
import { useContext, useState } from "react";
import CallIcon from "../../../public/call.png"
import VideoIcon from "../../../public/video.png"
import TextIcon from "../../../public/text.png"



export default function TimelinePage() {

  const [filter, setFilter] = useState('');

  const { timeline, call, text, video} = useContext(Context);
  timeline.reverse();


    console.log(filter);



  return (
    <main className="min-h-screen bg-[#f0f2f5] px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-black text-gray-900 mb-6 tracking-tight">Timeline</h1>

        {/* Filter dropdown */}
        <details className="dropdown mb-6">
  <summary className="btn m-1 text-black bg-white shadow w-fit p-2 px-4 rounded-full drop-shadow cursor-pointer">Filter Timeline</summary>
  <ul className="menu dropdown-content rounded-box z-1 w-32 p-2 shadow-sm text-black bg-white rounded-2xl space-y-2 cursor-pointer first-letter:uppercase mt-4 px-4">

  <li onClick={()=> setFilter('calls')} className="w-full">
    <a className="flex items-center gap-2 w-full">
      <Image src={CallIcon} width={20} height={20} alt="Call Symbol" />
      Call
    </a>
  </li>

  <li onClick={()=> setFilter('texts')} className="w-full">
    <a className="flex items-center gap-2 w-full">
      <Image src={TextIcon} width={20} height={20} alt="Text Symbol" />
      Text
    </a>
  </li>

  <li onClick={()=> setFilter('videos')} className="w-full">
    <a className="flex items-center gap-2 w-full">
      <Image src={VideoIcon} width={20} height={20} alt="Video Symbol" />
      Video
    </a>
  </li>
</ul>
</details>


        {/* Events list */}
        <div className="flex flex-col gap-3">

          

          {filter == '' && timeline.map((e, index) => (
            <div key={index} className="bg-white rounded-xl px-5 py-4 flex items-center gap-4">

              <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                {e.type == "Call" && <Image src={CallIcon} width={40} height={40} alt="Call Symbell" />}
                {e.type == "Text" && <Image src={TextIcon} width={40} height={40} alt="Text Symbell" />}
                {e.type == "Video" && <Image src={VideoIcon} width={40} height={40} alt="Video Symbell" />}
              </div>

              <div>
                <p className="text-sm text-gray-900">
                  <span className="font-semibold">{e.type}</span>
                  <span className="text-gray-500"> with {e.name}</span>
                </p>

                <p className="text-xs text-gray-400 mt-0.5">{e.date}</p>
              </div>

            </div>
          ))}

          {filter == 'calls' && call.map((e, index) => (
            <div key={index} className="bg-white rounded-xl px-5 py-4 flex items-center gap-4">

              <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                {e.type == "Call" && <Image src={CallIcon} width={40} height={40} alt="Call Symbell" />}
                {e.type == "Text" && <Image src={TextIcon} width={40} height={40} alt="Text Symbell" />}
                {e.type == "Video" && <Image src={VideoIcon} width={40} height={40} alt="Video Symbell" />}
              </div>

              <div>
                <p className="text-sm text-gray-900">
                  <span className="font-semibold">{e.type}</span>
                  <span className="text-gray-500"> with {e.name}</span>
                </p>

                <p className="text-xs text-gray-400 mt-0.5">{e.date}</p>
              </div>

            </div>
          ))}

          {filter == 'texts' && text.map((e, index) => (
            <div key={index} className="bg-white rounded-xl px-5 py-4 flex items-center gap-4">

              <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                {e.type == "Call" && <Image src={CallIcon} width={40} height={40} alt="Call Symbell" />}
                {e.type == "Text" && <Image src={TextIcon} width={40} height={40} alt="Text Symbell" />}
                {e.type == "Video" && <Image src={VideoIcon} width={40} height={40} alt="Video Symbell" />}
              </div>

              <div>
                <p className="text-sm text-gray-900">
                  <span className="font-semibold">{e.type}</span>
                  <span className="text-gray-500"> with {e.name}</span>
                </p>

                <p className="text-xs text-gray-400 mt-0.5">{e.date}</p>
              </div>

            </div>
          ))}

          {filter == 'videos' && video.map((e, index) => (
            <div key={index} className="bg-white rounded-xl px-5 py-4 flex items-center gap-4">

              <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                {e.type == "Call" && <Image src={CallIcon} width={40} height={40} alt="Call Symbell" />}
                {e.type == "Text" && <Image src={TextIcon} width={40} height={40} alt="Text Symbell" />}
                {e.type == "Video" && <Image src={VideoIcon} width={40} height={40} alt="Video Symbell" />}
              </div>

              <div>
                <p className="text-sm text-gray-900">
                  <span className="font-semibold">{e.type}</span>
                  <span className="text-gray-500"> with {e.name}</span>
                </p>

                <p className="text-xs text-gray-400 mt-0.5">{e.date}</p>
              </div>

            </div>
          ))}

        </div>





      </div>
    </main>
  );
}
