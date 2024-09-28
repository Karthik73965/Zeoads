"use client";
import { getVideobyTitle } from "@/actions/admin/NotifyActions";
import React, { useCallback, useEffect, useState } from "react";
import { ProductVideoEdit } from "./comp/ProductVideoEditModal";

type Props = {};

export default function EditProductVideo({}: Props) {
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [videoUrl, setVideoUrl] = useState<string>("");

  const getVideo = useCallback(async () => {
    try {
      const data = await getVideobyTitle("PRODUCT_VIDEO");
      if (data) {
        setVideoUrl(data);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getVideo();
  }, [getVideo]);

  return (
    <>
      {/* video */}
      <section className=" my-4  bg-white rounded-[8px] p-[24px]  border-[1px] border-[#E4E7EC] ">
        <div className="flex gap-[24px] pb-5">
           {videoUrl ? (
          <video
            className=" w-[454px] h-[250px] rounded-xl mt-5 rounded-t-2xl"
            src={videoUrl}
            controls
          ></video>
        ) : (
          <div className="w-[534px] h-[320px] rounded-[8px]" />
        )}
          <div className="mt-7 ">
            <div className="text-[#727F8F]">Here&apos;s Quick Tutorial!</div>
            <h3 className="font-medium mt-5 text-[24px] text-[#1F2933]">
              Watch our video guide - learn how to start your Zeoads account
              today.
            </h3>
            <div className="primary-text mt-5 font-medium">
              Feel free to contact our support{" "}
            </div>
            <div className="mt-5">
              <div className="text-[#171C20] font-medium">Select Model </div>
              <div className="flex mt-3 ">
                <div
                  className={`px-[16px] py-[8px] gap-[16px] flex text-center rounded-[4px] h-[40px] `}
                  onClick={() => setSelectedModel("commission")}
                >
                  <input
                    name="model"
                    type="radio"
                    checked={selectedModel === "commission"}
                    onChange={() => setSelectedModel("commission")}
                  />
                  <div>Commission Based Model</div>
                </div>
                <div
                  className={`px-[16px] py-[8px] gap-[16px] flex text-center rounded-[4px] h-[40px] `}
                  onClick={() => setSelectedModel("non-commission")}
                >
                  <input
                    name="model"
                    type="radio"
                    checked={selectedModel === "non-commission"}
                    onChange={() => setSelectedModel("non-commission")}
                  />
                  <div>Non-Commission Based Model</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* edit  */}
        <div className=" flex  justify-start gap-x-10 mb-3 mx-6 mt-3 fon">
        <ProductVideoEdit/>
        </div>
      </section>
    </>
  );
}
