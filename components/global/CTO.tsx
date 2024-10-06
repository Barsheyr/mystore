import React from "react";
import { Button } from "../ui/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const CTO = () => {
  return (
    <div className="py-20 mt-20 rounded-lg bg-[#C4A484]">
      <div className="flex lg:flex-row flex-col justify-between gap-20 lg:px-20 px-10">
        <div className="text-black space-y-5">
          <h1 className="lg:text-5xl text-4xl font-bold">
            ELEVATE YOUR WARDROBE
          </h1>
          <p className="text-sm">
            Do not miss out – experience the epitome of fashion by clicking -
            Buy Now - and embrace a world of chic elegance delivered to your
            doorstep. Your style journey begins here.
          </p>
        </div>

        <Link href="/products">
          <Button variant="outline" className=" rounded-md w-full p-5">
            Shop Now
            <ArrowTopRightIcon className="ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CTO;
