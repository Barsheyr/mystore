import React from "react";
import Dot from "@/assets/dot.svg";
import Image from "next/image";
import Basketball from "@/assets/Basketball.svg";
import BE from "@/assets/BE.svg";
import Twitter from "@/assets/Twitter.svg";
import Instagram from "@/assets/Instagram.svg";

const Footer = () => {
  return (
    <section className="py-20">
      <div>
        <div className="flex lg:flex-row flex-col items-center justify-between border-dashed border-2 p-10 text-3xl">
          <h3> TANK TOP </h3>
          <h3> V-NECK </h3>
          <h3> T-SHIRT </h3>
          <h3> LONG SLEEVE SHIRT </h3>
          <h3> CROP TOP </h3>
        </div>

        <div className="lg:px-20 px-5 py-20 flex lg:flex-row flex-col justify-between space-y-10">
          <div className="flex items-end gap-2">
            <h1 className="text-6xl  font-bold"> Arsheyr </h1>
            <Image src={Dot} alt="star" />
            <h1 className="text-6xl font-bold"> Loom </h1>
          </div>
          <div className="flex gap-3">
            <Image src={Basketball} alt="basketball" className="w-10" />
            <Image src={BE} alt="BE" className="w-10" />
            <Image src={Twitter} alt="twitter" className="w-10" />
            <Image src={Instagram} alt="Instagram" className="w-10" />
          </div>
        </div>

        <div className="border-dashed border-2">
          <div className="flex lg:flex-row flex-col justify-between py-20 lg:px-20 px-10">
            <div className="flex flex-col space-y-5">
              <h1 className="text-2xl"> Home</h1>
              <div className="flex flex-row items-center justify-between gap-5 text-[#C4A484]">
                <h1> Why US </h1>
                <h1> About US </h1>
                <h1> Testimonials </h1>
                <h1> FAQs </h1>
              </div>
            </div>
            <div className="flex flex-col space-y-5 lg:mt-0 mt-10">
              <h1 className="text-2xl"> Products </h1>
              <div className="flex flex-row items-center justify-between gap-5 text-[#C4A484]">
                <h1>Men&apos;s Wear</h1>
                <h1>Women&apos;s Wear</h1>
                <h1>Kids&apos; Wear</h1>
              </div>
            </div>

            <div className="mt-10">
              <h2> Subscribe to Newsletter </h2>
            </div>
          </div>
        </div>

        <div className="lg:px-20 px-10 py-10">
          <div className="flex lg:flex-row flex-col justify-between text-[#C4A484] space-y-10">
            <p>&copy; 2024 Arsheyr.Loom. All rights reserved.</p>
            <div className="flex items-center justify-between gap-10">
              <h1> Terms and Condition</h1>
              <h1> Privacy Policy </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
