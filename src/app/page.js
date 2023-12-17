import DemoSection from "@/components/DemoSection";
import PageHeaders from "@/components/PageHeaders";
import UploadForm from "@/components/UploadForm";
import Image from "next/image";
import "./globals.css";
import { TryNow } from "@/components/TryNow";

export default function Home() {
  return (
    <>
      <PageHeaders
        class="font-poppins font-bold"
        h1Text={"Integrate & Forget"}
        h2Text={
          "Ride the Algorithm with just one click, one time. It’s magic✨"
        }
      />
      <div className="text-center">
        <UploadForm />
      </div>
      <TryNow />
      <div className="flex justify-between items-center my-32">
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
      <h2 className="text-4xl font-bold text-black text-center mb-24">
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
            Subtitle Translation & Voice Dubbing
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
    </>
  );
}
