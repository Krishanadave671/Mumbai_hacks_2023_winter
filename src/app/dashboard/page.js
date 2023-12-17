import React from "react";

const Page = () => {
  return (
    <div className="dashboard-body">
      <nav className=" py-2 px-12 absolute left-0 w-full">
        <div className="container mx-auto flex flex-col items-center justify-between">
          {/* Logo on the left */}
          <div className="flex flex-col items-start p-8 bg-[transparent] shadow-xl rounded-xl">
            <div className="flex items-center justify-start">
              <div className="rounded-[50%] bg-gray-500 w-[4em] h-[4em]">
                <img />
              </div>
              <div className="text-black font-bold text-3xl ml-4">
                Mr. Beast
              </div>
              {/* Navigation options on the right */}
              <div className="flex space-x-12 items-center ml-12">
                <a href="#" className="text-gray-600">
                  456 videos
                </a>
                <a href="#" className="text-gray-600">
                  4.6B views
                </a>
              </div>
            </div>

            <div className="mt-6 flex justify-start">
              <a
                href="#"
                className=" hover:text-[#111111] bg-[transparent] border-[#d74141] border-[1px] text-[#d74141] text-sm py-2 px-5
              rounded-[24px]"
                // className="  text-red-600 ml-12"
              >
                Change/Remove Channel
              </a>
              <a
                href="#"
                className=" hover:text-gray-300 bg-[#000000] border-[#afafaf] border-[1px] text-[#eeeeee] text-sm py-2 px-5
              rounded-[24px] ml-8"
                // className="  text-red-600 ml-12"
              >
                Pause Service
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 flex">
          <h3 className="text-black text-xl">Upcoming Uploads</h3>
          <button className="text-base text-[#424dc2] ml-6">Customize</button>
        </div>
        <div className="h-[1px] w-[full] bg-gray-300 mt-4"></div>
        <section className="flex justify-left mt-8 sm:mt-12 items-center gap-[6em]">
          <div className="hidden sm:block bg-black w-[240px] rounded-xl aspect-[9/16] overflow-hidden">
            <video
              className="py-16 object-cover h-full"
              src="https://hacks-dub-ai.s3.eu-north-1.amazonaws.com/4c6f6502-0239-4863-b079-464a1baa2ecb.mp4"
              preload={"true"}
              muted
              autoPlay
              loop
            ></video>
          </div>
          <div className="hidden sm:block bg-black w-[240px] rounded-xl aspect-[9/16] overflow-hidden">
            <video
              className="py-16 object-cover h-full"
              src="https://hacks-dub-ai.s3.eu-north-1.amazonaws.com/39aa0700-0084-496c-8fae-bd8d48c7cb40.mp4"
              preload={"true"}
              muted
              autoPlay
              loop
            ></video>
          </div>
          {/* <div className="hidden sm:block">
            <SparklesIcon />
          </div> */}
          <div className="bg-black w-[240px] rounded-xl aspect-[9/16] overflow-hidden">
            <video
              className="py-16 object-cover h-full"
              src="https://hacks-dub-ai.s3.eu-north-1.amazonaws.com/8b8cbfcf-0dce-42e3-85fa-b93609f2c589.mp4"
              preload={"true"}
              muted
              autoPlay
              loop
            ></video>
          </div>
        </section>
      </nav>
    </div>
  );
};

export default Page;
