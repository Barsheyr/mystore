import React from "react";
import Dot from "@/assests/dot.svg";
import Image from "next/image";
import { TwitterLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import Basketball from "@/assests/Basketball.svg";
import BE from "@/assests/BE.svg";
import Twitter from "@/assests/Twitter.svg";
import Instagram from "@/assests/Instagram.svg";

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
            <h1 className="text-6xl  font-bold"> Style </h1>
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
      </div>
    </section>
  );
};

export default Footer;
