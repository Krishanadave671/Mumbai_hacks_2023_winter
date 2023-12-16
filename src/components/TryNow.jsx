'use client'

import React, { useRef, useState } from 'react'
import axios from 'axios'

export function TryNow() {
	const [videoUrl, setVideoUrl] = useState("")
	const [shortsVideoUrls, setShortsVideoUrls] = useState([
		"https://hacks-dub-ai.s3.eu-north-1.amazonaws.com/4c6f6502-0239-4863-b079-464a1baa2ecb.mp4",
		"https://hacks-dub-ai.s3.eu-north-1.amazonaws.com/39aa0700-0084-496c-8fae-bd8d48c7cb40.mp4",
		"https://hacks-dub-ai.s3.eu-north-1.amazonaws.com/8b8cbfcf-0dce-42e3-85fa-b93609f2c589.mp4"
	]);

	const handleCreateShort = async () => {
		console.log(videoUrl)
		return;
		if(videoUrl) {
			const {data} = await axios.post("api/generateShorts", {url: videoUrl});
			const response = {
				"message": "Video downloaded successfully",
				"urls": [
					"https://hacks-dub-ai.s3.eu-north-1.amazonaws.com/4c6f6502-0239-4863-b079-464a1baa2ecb.mp4",
					"https://hacks-dub-ai.s3.eu-north-1.amazonaws.com/39aa0700-0084-496c-8fae-bd8d48c7cb40.mp4",
					"https://hacks-dub-ai.s3.eu-north-1.amazonaws.com/8b8cbfcf-0dce-42e3-85fa-b93609f2c589.mp4"
				]
			}
			console.log("data: ", data)
		}
	}

  return (
    <div className='mt-8'>
        <div className="title-input grid">
					<span className="instruct justify-self-center">
						Paste Youtube video link.
					</span>
 
					<div className="input-repo mx-auto flex relative">
						<label htmlFor="name"></label>
						<input
						onChange={({target}) => {
							setVideoUrl(target.value)
						}}
							placeholder="https://youtube.com/watch?v=video_id"
							type="text"
							id="repo-link"
							name="repo-link"
							required
							className='shadow-lg'
							autoFocus
						/>
						<button onClick={handleCreateShort} className='w-16 h-12 bg-green-600 absolute right-3 top-0 bottom-0 my-auto rounded-lg text-white flex justify-center items-center hover:bg-green-500 cursor-pointer shadow-md'>Go</button>
					</div>
			</div>

			<section className="flex justify-around gap-8 mt-8 sm:mt-12 items-center">
				{
					shortsVideoUrls.map((shortVideo, index) => (
<div key={shortVideo} className="hidden sm:block bg-gray-800/50 w-[240px] rounded-xl overflow-hidden">
					<ShowShortVideo video_url={shortVideo}  autoPlay={index === 0} />
				</div>
					))
				}
			</section>
    </div>
  )
}

function ShowShortVideo({video_url, autoPlay}) {
	const videoRef = useRef(null)
	const [isPlaying, setIsPlaying] = useState(autoPlay);

	const handleTogglePlay = () => {
		const video = videoRef.current;
	
		if (video) {
		  if (video.paused) {
			video.play();
		  } else {
			video.pause();
		  }
	
		  setIsPlaying(!isPlaying);
		}
	  };
	

	return (
		<div className='relative cursor-pointer aspect-auto'>
			<video className='' ref={videoRef} src={video_url} autoPlay={autoPlay} preload={"true"} loop />
			<div onClick={handleTogglePlay}>
				{
					isPlaying ? <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="absolute z-[4] fill-orange-500 flex items-center justify-center hover:fill-orange-300 duration-150 hover:scale-110 ease-in-out m-auto top-0 left-0 right-0 bottom-0" height="50" width="50" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm-16 328c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v160zm112 0c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v160z"></path></svg> : <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="absolute z-[4] fill-orange-500 flex items-center justify-center hover:fill-orange-300 duration-150 hover:scale-110 ease-in-out m-auto top-0 left-0 right-0 bottom-0" height="50" width="50" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"></path></svg>
				}
			</div>
		</div>
	)
}