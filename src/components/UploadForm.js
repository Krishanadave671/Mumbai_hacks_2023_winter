"use client";
import UploadIcon from "@/components/UploadIcon";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function UploadForm() {
  const [isUploading, setIsUploading] = useState(false);
  const router = useRouter();

  async function upload(ev) {
    ev.preventDefault();
    const files = ev.target.files;
    if (files.length > 0) {
      const file = files[0];
      setIsUploading(true);
      const res = await axios.postForm("/api/upload", {
        file,
      });
      setIsUploading(false);
      const newName = res.data.newName;
      router.push("/" + newName);
    }
  }

  return (
    <>
      {isUploading && (
        <div className="bg-black/90 text-white fixed inset-0 flex items-center">
          <div className="w-full text-center">
            <h2 className="text-4xl mb-4">Uploading</h2>
            <h3 className="text-xl">Please wait...</h3>
          </div>
        </div>
      )}
      <label className="bg-[#7569FF] py-3 px-8 rounded-[20px] inline-flex gap-2 cursor-pointer">
        {/* <UploadIcon /> */}
        <span>Connect Account</span>
        <input onChange={upload} type="file" className="hidden" />
      </label>
      <div className="flex justify-between items-center mt-8">
        <div className="relative h-[1px] w-[35vw]">
          <div
            className="absolute left-0 top-0 h-full bg-gray-500 w-full"
            style={{
              backgroundSize: "16px 2px", // Adjust the dash length
              backgroundImage:
                "repeating-linear-gradient(to right, transparent, transparent 8px, currentColor 8px, currentColor 16px)",
            }}
          ></div>
        </div>
        <div className="text-gray-500 ml-8 mr-8">OR</div>
        <div className="relative h-[1px] w-[35vw]">
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
    </>
  );
}
