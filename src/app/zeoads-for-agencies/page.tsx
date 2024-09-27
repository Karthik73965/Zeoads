import Footer from "@/components/Footer";
import Appointnment from "@/components/Home/Appointnment";
import Faq from "@/components/Home/Faq";
import Navbar from "@/components/Navbar";
import Advantages from "@/components/Zeoads/Advantages";
import CtaZeo from "@/components/Zeoads/CtaZeo";
import Hero from "@/components/Zeoads/Hero";
import Usp from "@/components/Zeoads/Usp";
import React from "react";

type Props = {};

export default function Page({}: Props) {
  return (
    <>
      <Navbar route="Zeoads" />
      <Hero />
      <Advantages />
      <Usp />
      <Appointnment />
      <div className="mt-20">
        <Faq />
      </div>
      <CtaZeo />
      <Footer />
    </>
  );
}
