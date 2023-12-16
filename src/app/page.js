import DemoSection from "@/components/DemoSection";
import PageHeaders from "@/components/PageHeaders";
import UploadForm from "@/components/UploadForm";
import Image from "next/image";
import "./globals.css";
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

      <DemoSection />
      {/* <Image
        className="absolute top-[110%] left-0 opacity-25 z-[-100] translate-y-[-0%]"
        src="/tiles-bg.png"
        alt="tiles bg"
        width={275}
        height={225}
      /> */}
    </>
  );
}
