"use client";

import { pushNotificationAll } from "@/actions/admin/NotifyActions";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { uploadImageToS3 } from "@/actions/UploadImage";
import { useState } from "react";
import { ErrorToast, SucessToast } from "@/utils/ToastFucntion";

export function NotificationDialog() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [customEmail, setCustomEmail] = useState("");
  const [showCustomEmail, setShowCustomEmail] = useState(false);
  const [To, setTo] = useState<string>("To");
  const [heading, setHeading] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string | null>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleFormSubmit = async () => {
    try {
      let fileUrl = "";

      // Upload image if available
      if (selectedFile) {
        const uploadedImageUrl = await uploadImageToS3(selectedFile);
        await fetch(uploadedImageUrl, {
          method: "PUT",
          headers: {
            "Content-Type": selectedFile.type,
          },
          body: selectedFile,
        });
        fileUrl = uploadedImageUrl.split("?")[0];
        setImageUrl(fileUrl);
        const res = await pushNotificationAll(
          heading,
          message,
          To,
          fileUrl,
          customEmail
        );
        console.log(res)
      }

      // Push notification
      const res = await pushNotificationAll(
        heading,
        message,
        To,
        fileUrl,
        customEmail
      );
      console.log(res);
      SucessToast("Notification sent successfully!");

      // Reset state after submission
      setSelectedFile(null);
      setCustomEmail("");
      setHeading("");
      setMessage("");
      setImageUrl(null);
      setShowCustomEmail(false);
      setTo("To");
    } catch (error) {
      console.error(error);
      ErrorToast("Failed to send notification");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="bg-blue-600 cursor-pointer p-2 text-white">
          Create New Notification
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[65vw] h-[99vh] overflow-y-scroll">
        <DialogHeader>
          <DialogTitle>Send New Notification</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="mb-1">
            <label className="block text-gray-700 font-semibold mb-2 -mt-5">
              Notification Image (Optional)
            </label>
            <div className="border-dashed border-2 border-gray-300 rounded-lg p-4 relative">
              {selectedFile ? (
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt="Selected"
                  className="object-cover w-full h-48 rounded-lg"
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-36">
                  <input
                    type="file"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    onChange={handleFileChange}
                  />
                  <svg
                    className="w-12 h-12 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01.88-2.54A4.014 4.014 0 019 14h6a4 4 0 013.12 7.34A4 4 0 0117 22H7a4 4 0 01-4-4v-1a4 4 0 014-4h.88M15 10V7a3 3 0 00-6 0v3M15 10h-6"
                    />
                  </svg>
                  <span className="text-gray-400">
                    Click and upload or drag and drop
                  </span>
                  <span className="text-gray-400 text-sm">
                    maximum file size is 2 MB
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="mb-1">
            <label
              htmlFor="notification-title"
              className="block text-gray-700 font-semibold mb-2"
            >
              Notification Heading
            </label>
            <input
              id="notification-title"
              type="text"
              placeholder="Notification Title"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
              className="w-full border-[2px] outline-none p-2"
            />
          </div>

          <div className="mb-1">
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold mb-2"
            >
              Message
            </label>
            <input
              type="text"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              className="w-full border-[2px] p-2 outline-none"
            />
          </div>

          <div className="mb-1">
            <label className="block text-gray-700 font-semibold mb-2">To</label>
            <div className="flex space-x-2">
              <button
                className={`${
                  To === "ALL" ? "bg-blue-500 text-white" : "text-black"
                } border-[1px] rounded-full p-2`}
                onClick={() => {
                  setShowCustomEmail(false);
                  setTo("ALL");
                }}
              >
                All Users
              </button>
              <button
                className={`${
                  To === "ACTIVE" ? "bg-blue-500 text-white" : ""
                } border-[1px] rounded-full p-2`}
                onClick={() => {
                  setShowCustomEmail(false);
                  setTo("ACTIVE");
                }}
              >
                Active Users
              </button>
              <button
                className={`${
                  To === "PAID" ? "bg-blue-500 text-white" : ""
                } border-[1px] rounded-full p-2`}
                onClick={() => {
                  setShowCustomEmail(false);
                  setTo("PAID");
                }}
              >
                Paid Users
              </button>
              <button
                className={`${
                  To === "CUSTOM" ? "bg-blue-500 text-white" : ""
                } border-[1px] rounded-full p-2`}
                onClick={() => {
                  setShowCustomEmail(true);
                  setTo("CUSTOM");
                }}
              >
                Custom
              </button>
            </div>
            {showCustomEmail && (
              <div className="mt-4">
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="w-full p-2 border-[2px] outline-none rounded-md"
                  value={customEmail}
                  onChange={(e) => setCustomEmail(e.target.value)}
                />
              </div>
            )}
          </div>
        </div>

        <DialogFooter>
          <button
            type="submit"
            onClick={handleFormSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Send Notification
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
