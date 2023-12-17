import DemoSection from "@/components/DemoSection";
import PageHeaders from "@/components/PageHeaders";
import UploadForm from "@/components/UploadForm";
import Image from "next/image";
import "./globals.css";
import { TryNow } from "@/components/TryNow";

export default function Home() {
  return (
    <div className="">
      <div className="max-w-4xl mx-auto">
      <PageHeaders
        class="font-poppins font-bold"
        h1Text={"Integrate & Forget"}
        h2Text={
          "One platform to rule them all ✨"
        }
      />
      <div className="text-center">
        <UploadForm />
      </div>
      <TryNow />
      <div className="flex justify-between items-center mb-8 mt-16">
        <div className="relative h-[1px] w-[100%]">
          <div
            className="absolute left-0 top-0 h-full bg-gray-500 w-full"
            style={{
              backgroundSize: "16px 2px", // Adjust the dash length
              backgroundImage:
                "repeating-linear-gradient(to right, transparent, transparent 8px, currentColor 8px, currentColor 16px)",
            }}
          ></div>
        </div>
      </div>
      </div>

      <div id="works" className="flex w-full flex-col items-center justify-center gap-12 mx-auto max-w-6xl">
          <h2 className="text-gray-600 text-2xl flex flex-col items-center">
          How it works:</h2>
          <div className="gap-1 items-center -mt-10 text-neutral-500 justify-center text-3xl flex flex-row mobile:text-base mb-4">QuickShorts allows translation <b className="text-black">FROM</b> these languages: <br /> 
          </div><div><h2 className="mobile:w-5/5 -mt-10 flex flex-row flex-wrap items-center justify-center gap-4 text-xl text-neutral-600"><div className="flex flex-col items-center justify-center gap-2">
          <p className="text-sm">Spanish</p><svg xmlns="http://www.w3.org/2000/svg" viewBox="3.75 0 15 15" className="cursor-pointer duration-150 ease-out hover:shadow-lg hover:shadow-neutral-400 w-[60px]">
          <title>Spanish</title><path fill="#FFF" d="M0 0h22.5v15H0V0z"></path><path fill="#D03433" d="M0 0h22.5v4H0V0zm0 11h22.5v4H0v-4z"></path><path fill="#FBCA46" d="M0 4h22.5v7H0V4z"></path><path fill="#FFF" d="M7.8 7h1v.5h-1V7z"></path><path fill="#A41517" d="M7.2 8.5c0 .3.3.5.6.5s.6-.2.6-.5L8.5 7H7.1l.1 1.5zM6.6 7c0-.3.2-.5.4-.5h1.5c.3 0 .5.2.5.4V7l-.1 1.5c-.1.6-.5 1-1.1 1-.6 0-1-.4-1.1-1L6.6 7z"></path><path fill="#A41517" d="M6.8 7.5h2V8h-.5l-.5 1-.5-1h-.5v-.5zM5.3 6h1v3.5h-1V6zm4 0h1v3.5h-1V6zm-2.5-.5c0-.3.2-.5.5-.5h1c.3 0 .5.2.5.5v.2c0 .2-.1.3-.3.3H7c-.1 0-.2-.1-.2-.2v-.3z">
          </path></svg></div><div className="flex flex-col items-center justify-center gap-2"><p className="text-sm">Hindi</p><svg xmlns="http://www.w3.org/2000/svg" viewBox="85.5 0 342 342" className="w-[60px] cursor-pointer duration-150 ease-out hover:shadow-lg hover:shadow-neutral-400"><title>Hindi</title><path fill="#181A93" d="M17.3 0h478.4v342H17.3V0z"></path><path fill="#FFA44A" d="M0 0h513v114H0V0z"></path><path fill="#1A9F0B" d="M0 228h513v114H0V228z">
          </path><path fill="#FFF" d="M0 114h513v114H0V114z"></path><circle fill="#FFF" cx="256.5" cy="171" r="34.2"></circle><path fill="#181A93" d="M256.5 216.6c-25.1 0-45.6-20.5-45.6-45.6s20.5-45.6 45.6-45.6 45.6 20.5 45.6 45.6-20.5 45.6-45.6 45.6zm0-11.4c18.2 0 34.2-16 34.2-34.2s-15.9-34.2-34.2-34.2-34.2 16-34.2 34.2 16 34.2 34.2 34.2z"></path><circle fill="#181A93" cx="256.5" cy="171" r="22.8"></circle></svg></div><div className="flex flex-col items-center justify-center gap-2"><p className="text-sm">German</p><svg xmlns="http://www.w3.org/2000/svg" viewBox="85.5 0 342 342"  className="w-[60px] cursor-pointer duration-150 ease-out hover:shadow-lg hover:shadow-neutral-400"><title>German</title><path fill="#D80027" d="M0 0h513v342H0z"></path><path d="M0 0h513v114H0z"></path><path fill="#FFDA44" d="M0 228h513v114H0z"></path></svg></div><div className="flex flex-col items-center justify-center gap-2"><p className="text-sm">Portuguese</p><svg xmlns="http://www.w3.org/2000/svg" viewBox="30.72 85.333 341.333 341.333" className=" w-[60px] cursor-pointer duration-150 ease-out hover:shadow-lg hover:shadow-neutral-400"><title>Portuguese</title><path fill="#D80027" d="M0 85.337h512v341.326H0z"></path><path fill="#6DA544" d="M196.641 85.337v341.326H0V85.337z"></path><circle fill="#FFDA44" cx="196.641" cy="256" r="64"></circle><path fill="#D80027" d="M160.638 224v40.001c0 19.882 16.118 36 36 36s36-16.118 36-36V224h-72z"></path><path fill="#FFF" d="M196.638 276c-6.617 0-12-5.383-12-12v-16h24.001v16c-.001 6.616-5.385 12-12.001 12z"></path></svg></div><div className="flex flex-col items-center justify-center gap-2"><p className="text-sm">Dutch</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="85.5 85.5 342 342" className=" w-[60px] cursor-pointer duration-150 ease-out hover:shadow-lg hover:shadow-neutral-400"><title>Polish</title><path fill="#FFF" d="M0 85.5h513v342H0z"></path><path fill="#cd1f2a" d="M0 85.5h513v114H0z"></path><path fill="#1d4185" d="M0 312h513v114H0z"></path></svg></div><div className="flex flex-col items-center justify-center gap-2"><p className="text-sm">Italian</p><svg xmlns="http://www.w3.org/2000/svg" viewBox="85.5 0 342 342" className=" w-[60px] cursor-pointer duration-150 ease-out hover:shadow-lg hover:shadow-neutral-400"><title>Italian</title><path fill="#FFF" d="M342 0H0v341.3h512V0z"></path><path fill="#6DA544" d="M0 0h171v342H0z"></path><path fill="#D80027" d="M342 0h171v342H342z"></path></svg></div><div className="flex flex-col items-center justify-center gap-2"><p className="text-sm">French</p><svg xmlns="http://www.w3.org/2000/svg" viewBox="85.5 0 342 342" className=" w-[60px] cursor-pointer duration-150 ease-out hover:shadow-lg hover:shadow-neutral-400"><title>French</title><path fill="#FFF" d="M0 0h513v342H0z"></path><path fill="#0052B4" d="M0 0h171v342H0z"></path><path fill="#D80027" d="M342 0h171v342H342z"></path></svg></div><div className="flex flex-col items-center justify-center gap-2"><p className="text-sm">English</p><svg xmlns="http://www.w3.org/2000/svg" viewBox="85.5 0 342 342" className=" w-[60px] hover:shadow-neutral-400 hover:shadow-lg cursor-pointer duration-150 ease-out"><title>English</title><g fill="#FFF"><path d="M0 0h513v341.3H0V0z"></path><path d="M311.7 230 513 341.3v-31.5L369.3 230h-57.6zM200.3 111.3 0 0v31.5l143.7 79.8h56.6z"></path></g><path d="M393.8 230 513 295.7V230H393.8zm-82.1 0L513 341.3v-31.5L369.3 230h-57.6zm146.9 111.3-147-81.7v81.7h147zM90.3 230 0 280.2V230h90.3zm110 14.2v97.2H25.5l174.8-97.2zm-82.1-132.9L0 45.6v65.7h118.2zm82.1 0L0 0v31.5l143.7 79.8h56.6zM53.4 0l147 81.7V0h-147zm368.3 111.3L513 61.1v50.2h-91.3zm-110-14.2V0h174.9L311.7 97.1z" fill="#0052B4"></path><g fill="#D80027"><path d="M288 0h-64v138.7H0v64h224v138.7h64V202.7h224v-64H288V0z">
          </path><path d="M311.7 230 513 341.3v-31.5L369.3 230h-57.6zm-168 0L0 309.9v31.5L200.3 230h-56.6zm56.6-118.7L0 0v31.5l143.7 79.8h56.6zm168 0L513 31.5V0L311.7 111.3h56.6z"></path></g></svg>
          </div><button className="mt-12 animated animation bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent duration-500">&amp; more..</button></h2></div><div className="flex w-full flex-row justify-center gap-8 mobile:flex-col"><div className="flex w-[500px] flex-col justify-center rounded-xl border border-neutral-400 p-8 font-[Createo] text-base font-bold text-neutral-600 duration-100 mobile:w-full"><div className="fontus flex flex-row items-center gap-4 text-2xl text-black"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" color="red" height="36" width="36" xmlns="http://www.w3.org/2000/svg"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>Enter your Youtube video link</div>QuickShorts will generate viral short form videos using GPT-4.</div><div className="flex w-[500px] flex-col justify-center rounded-xl border border-neutral-400 p-8 font-[Createo] text-base font-bold text-neutral-600 duration-100 mobile:w-full"><div className="fontus flex flex-row items-center gap-4 text-2xl text-black"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" color="black" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
          </path></svg>QuickShorts generates the translation</div>The audio is generated in the specified language, it takes roughly the videos length to generate the audio.</div><div className="flex w-[500px] flex-col justify-center rounded-xl border border-neutral-400 p-8 font-[Createo] text-base font-bold text-neutral-600 duration-100 mobile:w-full"><div className="fontus flex flex-row items-center gap-4 text-2xl text-black"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" color="red" height="36" width="36" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>Download link is generated</div>After the process is done, the video is automatically posted on your social media platforms.</div></div><div className="min-w-screen mx-4 w-full border-2 border-orange-300 border-dashed"></div></div>

            <div className="mt-24 mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-black text-center">
        Why Us?
      </h2>
      <div className="flex justify-between text-black text-center w-[88vw] translate-x-[-9rem] mb-16">
        <div className="w-[30%]">
          <h6 className="text-xl font-semibold h-[2.5em] mb-4 flex items-end justify-center">
            Shorts Generation
          </h6>
          <p className="text-[.9rem] text-gray-500">
            Effortlessly transform lengthy videos into engaging shorts with
            QuickShort, delivering concise and captivating content in a snap.
          </p>
        </div>
        <div className="w-[30%]">
          <h6 className="text-xl font-semibold h-[2.5em] mb-4 flex items-end justify-center">
            Voice Dubbing
          </h6>
          <p className="text-[.9rem] text-gray-500">
            Unlock a global audience by seamlessly translating subtitles and
            adding voice dubbing to your content, breaking language barriers and
            enhancing accessibility.
          </p>
        </div>
        <div className="w-[30%]">
          <h6 className="text-xl font-semibold h-[2.5em] mb-4 flex items-end justify-center">
            Automatic Posting
          </h6>
          <p className="text-[.9rem] text-gray-500">
            Automate your social media presence by effortlessly scheduling and
            posting your content across multiple platforms, ensuring a
            consistent and timely outreach.
          </p>
        </div>
      </div>
            </div>
    </div>
  );
}
