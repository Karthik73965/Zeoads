"use client";
import { getAblogId, getRecent3Blogs } from "@/actions/admin/ProductActions";
import BlogCard from "@/components/Blog/BlogCard";
import CtaBlog from "@/components/Blog/CtaBlog";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Blog } from "@prisma/client";
import React, { useEffect, useState } from "react";

type Props = {};

export default function Page({ params }: { params: { slug: string } }) {
  const [Data, SetData] = useState<Blog | null>(null);
  const [blogs, setBlogs] = useState<Blog[] | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const data = await getAblogId(params.slug);
        const res = await getRecent3Blogs();
        if (data && res) {
          SetData(data);
          setBlogs(res);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchBlog();
  }, [params]);

  return (
    <main className="pt-10">
      <Navbar route="Blog" />
      <center>
        <div className="bg-[#F5F6FF] mx-auto mb-3 justify-center align-middle w-[73px] py-[4px] px-2 md:px-[24px] primary-text rounded-[100px] mt-20">
          Blog
        </div>
      </center>
      <main className="grid px-5 md:px-20 items-center justify-center">
        <img
          src={Data?.image_url}
          className="md:h-[400px] mx-auto"
          alt="blog image "
        />
        <h2 className="text-[#1F2933] mt-5 text-[20px] md:text-[56px] font-bold md:leading-[70px]">
          {Data?.Heading}
        </h2>
        {/* //@ts-ignore */}
        <article
          id="blog-content"
          className="text-[#3E4C59]  text-[14px] md:text-[20px] mt-5 md:leading-[38px] "
          dangerouslySetInnerHTML={{
            __html: Data?.Article.replace(/\n/g, "</br>") || "",
          }}
        />
      </main>
      <section className="px-5 md:px-20">
        <h5 className="text-[24px] text-[#1F2933] font-medium mb-5">
          Popular Blogs
        </h5>
        <div className="grid md:flex justify-between gap-5">
          {blogs &&
            blogs.map((i, index) => (
              <BlogCard
                key={i.id} // Added key prop
                id={i.id}
                imageurl={i.image_url}
                main={true}
                date={JSON.stringify(i.createdAt)}
                description={i.Article}
                heading={i.Heading}
              />
            ))}
        </div>
      </section>
      <CtaBlog />
      <Footer />
    </main>
  );
}
