import React from "react";
import Image from "next/image";
import HeroImg from "@/assests/heroImg.jpg";
import { Button } from "@/components/ui/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Badge from "@/components/global/Badge";
import { RiBriefcase4Fill, RiTeamFill, RiTodoFill } from "react-icons/ri";

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
        className="grid lg:grid-cols-2 outline-dashed
       outline-2 outline-offset-2 outline-[#C777D4] p-10"
      >
        <div>
          <h1 className="lg:text-4xl"> ELEVATE YOUR STYLE WITH STYLELOOM </h1>
          <p>
            Explore a world of fashion at StyleLoom, where trends meet
            affordability. Immerse yourself in the latest styles and seize
            exclusive promotions.
          </p>
        </div>
        <div>
          <div className="">
            {/* badge 1*/}
            <Badge
              containerStyles=""
              icon={<RiBriefcase4Fill />}
              endCountNum={3}
              badgeText="Years Of Experience"
            />
            {/* badge 2 */}
            <Badge
              containerStyles=""
              icon={<RiTodoFill />}
              endCountNum={6}
              endCountText="k"
              badgeText="Finished Projects"
            />
            {/* badge 3 */}
            <Badge
              containerStyles=""
              icon={<RiTeamFill />}
              endCountNum={2}
              endCountText="k"
              badgeText="Happy Clients"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
