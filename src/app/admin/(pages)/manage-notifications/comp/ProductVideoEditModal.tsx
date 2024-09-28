"use client";
import { updateDbforVideos } from "@/actions/admin/NotifyActions";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ErrorToast, SucessToast } from "@/utils/ToastFucntion";
import { useState } from "react";

interface Props {}

export function ProductVideoEdit({}: Props) {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setVideoFile(file);
      setVideoPreview(URL.createObjectURL(file));
    }
  };

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = reader.result?.toString().split(",")[1];
        resolve(base64String || "");
      };
      reader.onerror = reject;
    });
  };

  const uploadVideoAndConfirm = async () => {
    if (!videoFile) {
      ErrorToast("No video file selected");
      return;
    }

    try {
      setIsUploading(true);

      const base64Video = await convertToBase64(videoFile);

      const response = await fetch("/api/VideotoS3", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          videoBase64: base64Video,
          fileName: videoFile.name,
          contentType: videoFile.type,
        }),
      });

      const result = await response.json();
      setIsUploading(false);

      if (response.ok && result.url) {
        SucessToast("Video uploaded successfully!");

        const videoURL = result.url;
        await handleAfterUpload(videoURL);

        setVideoFile(null);
        setVideoPreview(null);
      } else {
        ErrorToast("Failed to upload video.");
      }
    } catch (error) {
      setIsUploading(false);
      ErrorToast("Error uploading video.");
    }
  };

  const handleAfterUpload = async (videoURL: string) => {
    console.log("Video uploaded successfully. URL:", videoURL);
    const res = await updateDbforVideos("PRODUCT_VIDEO", videoURL);
    if (res) return;
    else throw Error("handleAfterUpload Error");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-[#4779E8] h-[48px] text-white w-[120px] py-3 px-3 rounded-md border-[1px]">
          Edit
        </button>
      </DialogTrigger>
      <DialogContent className="bg-white p-6 gap-6">
        <h5 className="text-3xl text-center font-semibold">
          Update Product Video {" "}
        </h5>
        <form className="mt-5 w-full">
          {/* Video Upload Field */}
          <div className="w-full mb-5">
            <label htmlFor="video">Upload Video</label>
            <br />
            <input
              type="file"
              accept="video/*"
              onChange={handleVideoChange}
              className="mt-1 block w-full text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            />
          </div>

          {/* Video Preview */}
          {videoPreview && (
            <div className="mb-5">
              <video controls className="w-full max-h-[200px] mb-3">
                <source src={videoPreview} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}

          <div className="flex gap-x-10 justify-center mt-5">
            <button
              type="button"
              className="h-[40px] w-[91px] border rounded-[4px] border-[#4779E8] primary-text"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={uploadVideoAndConfirm}
              className={`h-[40px] w-[137px] border rounded-[4px] border-[#4779E8] bg-[#4779E8] text-white ${
                isUploading ? "opacity-50" : ""
              }`}
              disabled={isUploading}
            >
              {isUploading ? "Uploading..." : "Confirm"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
