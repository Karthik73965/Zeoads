"use client";
import React, { useEffect, useState } from "react";
import AdminMainNav from "../../components/AdminMainNav";
import BlogCard from "@/components/Blog/BlogCard";
import { useRouter } from "next/navigation";
import { getAllBlogs } from "@/actions/admin/ProductActions";

import {
  getAnnouncementBar,
  UpdateAnnoucementBar,
  getPricePanel,
  UpdatePricePanel,
  CreateAdServer,
  UpdateADserver,
  getAllAdservers,
} from "@/actions/admin/ProductActions";
import { ErrorToast, SucessToast } from "@/utils/ToastFucntion";
import { Blog } from "@prisma/client";

type Props = {};

export default function MainProduct({}: Props) {
  const [Option, SetOption] = useState<string>("Blog");

  const router = useRouter();
  return (
    <main className="w-full dh-bg">
      <AdminMainNav />
      <section className="mt-10 flex justify-between  mx-5">
        <div className="flex bg-white border-[1px] gap-[16px] h-[58px]  rounded-[8px]  px-[24px] py-[9px]  ">
          <div
            onClick={() => SetOption("Blog")}
            className={` h-[40px] border-b-[2px] pl-2  ${
              Option == "Blog"
                ? "primary-text border-[#4779E8]  "
                : "text-[#3E4C59] border-[] "
            } pt-2 `}
          >
            Blog Management
          </div>
          <div
            onClick={() => SetOption("Product")}
            className={`h-[40px] border-b-[2px] pl-2  ${
              Option == "Product"
                ? "primary-text border-[#4779E8]  "
                : "text-[#3E4C59] border-[] "
            } pt-2 [16px] `}
          >
            Product Edit
          </div>
          <div
            onClick={() => SetOption("Price")}
            className={`h-[40px] border-b-[2px] pl-2  ${
              Option == "Price"
                ? "primary-text border-[#4779E8]  "
                : "text-[#3E4C59] border-[] "
            } pt-2 [16px] `}
          >
            Price Edit
          </div>
          <div
            onClick={() => SetOption("Announcement")}
            className={`h-[40px] border-b-[2px] pl-2  ${
              Option == "Announcement"
                ? "primary-text border-[#4779E8]  "
                : "text-[#3E4C59] border-[] "
            } pt-2 [16px] `}
          >
            Announcement Bar
          </div>
        </div>
        {/* Create */}
        <div className="flex gap-[px]">
          <button
            onClick={() => router.push("/admin/product-management/CreateBlog")}
            className="bg-[#4779E8] font-medium flex w-[231px] h-[56px] gap-[12px] py-[16px] pl-[32px] pr-[40px] text-white rounded-lg"
          >
            Create New blog{" "}
            <img className="mt-1" src="/userDash/Agencies/plus.svg" alt="" />
          </button>
        </div>
      </section>
      <section>
        {Option == "Blog" ? (
          <Blogs />
        ) : Option == "Product" ? (
          <ProductEdit />
        ) : Option == "Price" ? (
          <PriceComp />
        ) : Option == "Announcement" ? (
          <UpdateAnnouncementBar />
        ) : (
          ""
        )}
      </section>
    </main>
  );
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog [] | null>(null);

  const fetchBlogs = async () => {
    try {
      const data = await getAllBlogs();
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <section className="flex flex-wrap size-96 scale-[.80] gap-x-10">
      {blogs && blogs.length > 0 ? (
        blogs.map((blog) => (
          <BlogCard
            key={blog.id}  // Added key to avoid warnings
            id={blog.id}
            main
            heading={blog.Heading}
            imageurl={blog.image_url}
            description={blog.Article}
            date={JSON.stringify(blog.createdAt)}
          />
        ))
      ) : (
        <p>No blogs available</p>
      )}
    </section>
  );
};

const ProductEdit = () => {
  const [adServer, setAdServer] = useState("Meta");
  const [currency, setCurrency] = useState("USD");
  const [creditAccount, setCreditAccount] = useState("");
  const [timezone, setTimezone] = useState("");
  const [link, setLink] = useState("");
  const [buttonText, setButtonText] = useState("Pay Now");
  const [features, setFeatures] = useState([
    "Unlimited spending limit from day 1",
    "Unlimited Domains/Pages and Pixels",
    "Run ads on Restricted category",
    "Cheaper CPM and CPA",
    "Exclusive Panel to manage account",
    "Facebook Rep Support",
  ]);
  const [logo, setLogo] = useState(""); // Add state for logo
  const [allAdServers, setAllAdServers] = useState([]);

  useEffect(() => {
    // Fetch all ad servers when the component mounts
    const fetchAdServers = async () => {
      const data = await getAllAdservers();
      //@ts-ignore
      if (data) setAllAdServers(data);
    };
    fetchAdServers();
  }, []);

  const handleFeatureChange = (index: number, value: string) => {
    const updatedFeatures = [...features];
    updatedFeatures[index] = value;
    setFeatures(updatedFeatures);
  };

  const addFeature = () => {
    setFeatures([...features, ""]);
  };

  const handleSubmit = async () => {
    // Use UpdateADserver to update existing ad server
    const updatedAdServer = await UpdateADserver(adServer, logo, features, [
      currency,
    ]);

    if (updatedAdServer) {
      SucessToast("Ad server updated successfully");
      // You can add additional logic like redirecting or clearing form fields
    } else {
      ErrorToast("Failed to update the ad server");
    }
  };

  const handleCreateNewAdServer = async () => {
    // Use CreateAdServer to create a new ad server
    const newAdServer = await CreateAdServer(adServer);

    if (newAdServer) {
      SucessToast("New ad server created successfully");
      //@ts-ignore

      setAllAdServers([...allAdServers, newAdServer]); // Add the new server to the state
    } else {
      ErrorToast("Failed to create the ad server");
    }
  };

  return (
    <div className="max-w-full mx-5 mt-5 p-6 bg-white shadow-md rounded-lg">
      {/* Ad Server Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 font-semibold rounded ${
            adServer === "Meta" ? "bg-gray-200" : "bg-white"
          }`}
          onClick={() => setAdServer("Meta")}
        >
          Meta
        </button>
        <button
          className={`px-4 py-2 font-semibold rounded ${
            adServer === "Tiktok" ? "bg-gray-200" : "bg-white"
          }`}
          onClick={() => setAdServer("Tiktok")}
        >
          Tiktok
        </button>
        <button
          className={`px-4 py-2 font-semibold rounded ${
            adServer === "Google" ? "bg-gray-200" : "bg-white"
          }`}
          onClick={() => setAdServer("Google")}
        >
          Google
        </button>
      </div>

      <div className="flex justify-between mb-6">
        <h1 className="text-xl font-semibold">Product Edit</h1>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          onClick={handleCreateNewAdServer}
        >
          Create New Ad Server
        </button>
      </div>

      <div className="flex space-x-12">
        {/* Left Panel */}
        <div className="w-1/2">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Logo
            </label>
            <div className="border-dashed border-2 border-gray-300 rounded-lg p-6 text-center">
              <input
                type="file"
                onChange={(e) => setLogo(e.target.files?.[0]?.name || "")} // Update the logo state with file name
                className="hidden"
                id="logo-upload"
              />
              <label htmlFor="logo-upload" className="cursor-pointer">
                <svg
                  className="mx-auto h-10 w-10 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <p className="mt-2 text-sm text-gray-600">Select Logo</p>
              </label>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Feauture
            </label>
            <input
              type="text"
              placeholder="Facebook Agency Account"
              className="w-full p-3 border border-gray-300 rounded-md"
              // Add logic to handle this input if needed
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Body
            </label>
            <textarea
              placeholder="Top tier Facebook agency accounts with payment method activated."
              className="w-full p-3 border border-gray-300 rounded-md h-24"
              // Add logic to handle this input if needed
            ></textarea>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Features
            </label>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center justify-between">
                  <input
                    type="text"
                    value={feature}
                    onChange={(e) => handleFeatureChange(index, e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </li>
              ))}
              <li className="flex items-center justify-between">
                <button onClick={addFeature} className="text-blue-600">
                  + Add More
                </button>
              </li>
            </ul>
          </div>

          <button className="w-full bg-gray-200 text-gray-700 py-3 rounded-md font-semibold text-lg hover:bg-gray-300 transition duration-200">
            Cancel
          </button>
        </div>

        {/* Right Panel */}
        <div className="w-1/2">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Account Server
            </label>
            <select
              className="w-full p-3 border border-gray-300 rounded-md"
              value={adServer}
              onChange={(e) => setAdServer(e.target.value)}
            >
              {allAdServers.map((server) => (
                // @ts-ignore
                <option key={server.id} value={server.name}>
                  {/*   @ts-ignore*/}
                  {server.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Account Currency Option
            </label>
            <div className="flex space-x-4">
              <select
                className="w-1/2 p-3 border border-gray-300 rounded-md"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <option value="USD">USD</option>
                <option value="INR">INR</option>
              </select>
              <button className="w-1/2 bg-gray-200 text-gray-700 py-3 rounded-md font-semibold hover:bg-gray-300 transition duration-200">
                Add More
              </button>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Credit Account
            </label>
            <select
              className="w-full p-3 border border-gray-300 rounded-md"
              value={creditAccount}
              onChange={(e) => setCreditAccount(e.target.value)}
            >
              <option value="Credit Account">Credit Account</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Account Timezone
            </label>
            <select
              className="w-full p-3 border border-gray-300 rounded-md"
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
            >
              <option value="GMT +5:30 (India)">GMT +5:30 (India)</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Link
            </label>
            <input
              type="text"
              placeholder="Google.com"
              className="w-full p-3 border border-gray-300 rounded-md"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Button Text
            </label>
            <input
              type="text"
              placeholder="Pay Now"
              className="w-full p-3 border border-gray-300 rounded-md"
              value={buttonText}
              onChange={(e) => setButtonText(e.target.value)}
            />
          </div>

          <button
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold text-lg hover:bg-blue-700 transition duration-200"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

const PriceComp = () => {
  const [leftPanel, setLeftPanel] = useState<string[]>(["", "", "", "", ""]);
  const [rightPanel, setRightPanel] = useState<string[]>(["", "", "", "", ""]);
  const [price, setPrice] = useState("5999 INR");
  const [panelId, setPanelId] = useState<string | null>(null);

  useEffect(() => {
    // Fetch existing panel data on mount
    const fetchPanelData = async () => {
      const panelData = await getPricePanel();
      if (panelData) {
        //@ts-ignore
        setLeftPanel(panelData.leftPanel);
        //@ts-ignore
        setRightPanel(panelData.rightPanel);
        setPrice(panelData.Price.toString());
        setPanelId(panelData.id);
      }
    };
    fetchPanelData();
  }, []);

  const handleInputChange = (
    index: number,
    value: string,
    panelType: "left" | "right"
  ) => {
    if (panelType === "left") {
      const updatedPanel = [...leftPanel];
      updatedPanel[index] = value;
      setLeftPanel(updatedPanel);
    } else {
      const updatedPanel = [...rightPanel];
      updatedPanel[index] = value;
      setRightPanel(updatedPanel);
    }
  };

  const handleSubmit = async () => {
    if (panelId) {
      const updated = await UpdatePricePanel(
        panelId,
        leftPanel,
        rightPanel,
        parseFloat(price)
      );
      if (updated) {
        SucessToast("Price table updated successfully!");
      } else {
       ErrorToast ("Failed to update price table.");
      }
    }
  };

  return (
    <main className="bg-white rounded-md m-5 p-6">
      <div className="flex gap-x-2 ml-5 my-10">
        <img src="/utils/arrowblueleft.svg" alt="arrow" />
        <div className="text-xl font-medium">Price Table Update</div>
      </div>
      <div className="flex justify-between font-medium mx-5 border-b-2 pb-2">
        <div>Left Panel</div>
        <div>Right Panel</div>
      </div>
      <section className="mt-10 flex justify-between mx-5">
        {/* LEFT PANEL */}
        <div className="w-[48%]">
          {leftPanel.map((item, index) => (
            <div className="grid mt-5" key={index}>
              <div className="ml-3">Feature</div>
              <input
                value={item}
                onChange={(e) =>
                  handleInputChange(index, e.target.value, "left")
                }
                className="outline-none border-[1px] p-3 w-full rounded-md"
                type="text"
                placeholder="Plans"
              />
            </div>
          ))}
        </div>
        {/* RIGHT PANEL */}
        <div className="w-[48%]">
          {rightPanel.map((item, index) => (
            <div className="grid mt-5" key={index}>
              <div className="ml-3">Feature</div>
              <input
                value={item}
                onChange={(e) =>
                  handleInputChange(index, e.target.value, "right")
                }
                className="outline-none border-[1px] p-3 w-full rounded-md"
                type="text"
                placeholder="Plans"
              />
            </div>
          ))}
        </div>
      </section>
      {/* Price Input */}
      <div className="grid mt-10 mx-5">
        <div className="ml-3">Price</div>
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="outline-none border-[1px] p-3 w-full rounded-md"
          type="text"
          placeholder="Price"
        />
      </div>
      {/* Action buttons */}
      <div className="flex justify-between mt-10 mx-5 w-full">
        <button className="w-[48%] py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="w-[48%] py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Update Price Table
        </button>
      </div>
    </main>
  );
};

const UpdateAnnouncementBar = () => {
  const [message, setMessage] = useState(
    "Latest Summer Offer Sale Going On - Enroll Today"
  );
  const [id, setId] = useState("");
  const [textColor, setTextColor] = useState("#4779E8");
  const [backgroundColor, setBackgroundColor] = useState("#131516");
  const [load, setload] = useState<boolean>(false);

  const fetchbarDetails = async () => {
    try {
      const res = await getAnnouncementBar();
      if (res) {
        setMessage(res.message);
        setTextColor(res.HexaCode);
        setBackgroundColor(res.BgCode);
        setId(res.id);
      } else {
        console.error("Error while fetching announcment bar details ");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const UPdateAnnouncementBar = async () => {
    try {
      setload(true);
      const res = await UpdateAnnoucementBar(
        id,
        message,
        textColor,
        backgroundColor
      );
      if (res) {
        setMessage(res.message);
        setTextColor(res.HexaCode);
        setBackgroundColor(res.BgCode);
        setId(res.id);
      } else {
        console.error("Error while fetching announcment bar details ");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchbarDetails();
  }, []);
  return (
    <div className="mx-5 mt-5 p-6 bg-white shadow-md rounded-lg">
      <div className="flex items-center mb-6">
        <svg
          className="w-6 h-6 text-blue-500 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
          />
        </svg>
        <h2 className="text-xl font-semibold">Update Announcement Bar</h2>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Announcement Bar Message
        </label>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Text Color Hexa Code
          </label>
          <input
            type="text"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Background Label Color Code
          </label>
          <input
            type="text"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex justify-between">
        <button className="w-[48%] py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
          Cancel
        </button>
        <button className="w-[48%] py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Update Announcement Bar
        </button>
      </div>
    </div>
  );
};
