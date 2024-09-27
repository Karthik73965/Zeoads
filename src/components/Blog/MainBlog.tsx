"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { Blog } from "@prisma/client";
import { getAllBlogs } from "@/actions/admin/ProductActions";

type Props = {};

export default function MainBlog({}: Props) {
  const [blogs, Setblogs] = useState<Blog[] | null>(null);
  const fetchBlogs = async () => {
    try {
      const data = await getAllBlogs();
      Setblogs(data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <main className="px-5 md:px-20 pt-[72px] mt-10">
      <section className="grid items-center justify-center">
        <center className="bg-[#F5F6FF] flex justify-center align-middle py-[4px] ml-[25zvw] md:ml-[200px] px-[24px] w-[82px]  primary-text rounded-[100px] mt-10">
          Blog
        </center>
        <div className="flex justify-center items-center mt-5">
          <img src="/utils/ArrowLeft..svg" alt="arrow" className=" mr-2" />
          <h2 className="text-[32px] text-[#1F2933] font-bold">
            News & Articles
          </h2>
        </div>
        <ul className="flex justify-center   bg-[#E4E7EC] mt-5">
          <li
            style={{
              borderLeftColor: "#F5F6FA", // Red color
              borderBottomColor: "#4779E8", // Yellow color
            }}
            className="py-[8px] px-2 md:px-[24px] text-[14px] border-l-2 border-b-2 text-center h-[48px]"
          >
            Featured
          </li>
          <li
            style={{
              borderLeftColor: "#F5F6FA", // Red color
              borderBottomColor: "#4779E8", // Yellow color
            }}
            className="py-[8px] px-2 md:px-[24px] text-[14px] border-l-2 border-b-2 text-center h-[48px]"
          >
            Blogs
          </li>
          <li
            style={{
              borderLeftColor: "#F5F6FA", // Red color
              borderBottomColor: "#4779E8", // Yellow color
            }}
            className="py-[8px] px-2 md:px-[24px] text-[14px] border-l-2 border-b-2 text-center h-[48px]"
          >
            Success Story
          </li>
          <li
            style={{
              borderLeftColor: "#F5F6FA", // Red color
              borderBottomColor: "#4779E8", // Yellow color
            }}
            className="py-[8px] px-2 md:px-[24px] text-[14px] border-l-2 border-b-2 text-center h-[48px]"
          >
            Webinars
          </li>
        </ul>
      </section>
      <section className="mt-10">
        <h3 className="font-medium text-[#1F2933] text-[24px]">
          Our Top Featured Blog Posts
        </h3>
        <section className=" grid md:grid-cols-3 gap-5 mt-5">
          {blogs?.map((i, index) => {
            return (
              <>
                <BlogCard
                  id={i.id}
                  main={true}
                  date="07th may"
                  description={i.Article[9]}
                  heading={i.Heading}
                  imageurl={i.image_url}
                />
              </>
            );
          })}
        </section>
      </section>
    </main>
  );
}
