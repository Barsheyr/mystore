import React from "react";
import Image from "next/image";
import HeroImg from "@/assets/HeroImg.jpg";
import { Button } from "@/components/ui/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Badge from "@/components/global/Badge";

const Hero = () => {
  return (
    <div className="">
      <Image src={HeroImg} alt="Hero" className="rounded-md" />
      <Button
        variant="outline"
        className="capitalize lg:p-6 p-2 bg-black relative lg:-top-8 text-white flex mx-auto max-w-6xl 
        outline-dashed"
      >
        Shop Now
        <ArrowTopRightIcon className="ml-2" />
      </Button>

      <div
        className="grid lg:grid-cols-2 border-dashed
       border-2"
      >
        <div className="p-10 space-y-10">
          <h1 className="text-3xl lg:text-4xl font-bold">
            ELEVATE YOUR STYLE WITH STYLELOOM
          </h1>
          <p className="text-[#C4A484]">
            Explore a world of fashion at StyleLoom, where trends meet
            affordability. Immerse yourself in the latest styles and seize
            exclusive promotions.
          </p>
        </div>
        <div className="grid grid-cols-2">
          {/* badge 1*/}
          <Badge
            containerStyles="border-dashed border-l-2 border-b-2"
            endCountNum={1500}
            endCountText="+"
            badgeText="Fashion Products"
          />
          {/* badge 2 */}
          <Badge
            containerStyles="border-dashed border-l-2 border-b-2"
            endCountNum={50}
            endCountText="+"
            badgeText="New arrivals every month"
          />
          {/* badge 3 */}
          <Badge
            containerStyles="border-dashed border-l-2"
            endCountNum={30}
            endCountText="%"
            badgeText="OFF on select items"
          />
          {/* badge 4 */}
          <Badge
            containerStyles="border-dashed border-l-2"
            endCountNum={95}
            endCountText="%"
            badgeText="Customer Satisfaction Rate"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
