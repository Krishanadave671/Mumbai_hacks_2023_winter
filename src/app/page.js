import DemoSection from "@/components/DemoSection";
import PageHeaders from "@/components/PageHeaders";
import UploadForm from "@/components/UploadForm";
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
    </>
  );
}
