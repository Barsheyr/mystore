import React from "react";
import Image from "next/image";
import HeroImg from "@/assests/heroImg.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div>
      <Image src={HeroImg} alt="Hero" />
      <Button
        variant="outline"
        size="lg"
        className="capitalize bg-black text-white flex mx-auto max-w-6xl"
      >
        Shop Now
      </Button>
    </div>
  );
};

export default Hero;
