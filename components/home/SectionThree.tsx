import React from "react";
import Image from "next/image";
import SectionThree3 from "@/assets/SectionThree.svg";

const SectionThree = () => {
  return (
    <section className="border-dashed border-2 mt-20 rounded-md relative">
      <div className="space-y-10 lg:p-24 p-10">
        <h1 className="lg:text-4xl text-xl">
          Navigating the StyleLoom Fashion Journey.
        </h1>
        <p className="text-sm text-[#C4A484]">
          At StyleLoom, we have designed a straightforward shopping experience
          to make fashion accessible.
        </p>
      </div>
      <Image
        src={SectionThree3}
        alt="image"
        className="absolute top-0 right-0 lg:block hidden"
      />

      <div className="grid lg:grid-cols-4">
        <div className="border-dashed border-y-2 border-r-2 p-10 relative">
          <div className="space-y-5 mt-10">
            <p className="text-xs text-[#C4A484] tracking-widest"> STEP 01 </p>
            <h1 className="text-xl"> Discover Trends </h1>
            <p className="text-sm text-[#C4A484]">
              Explore our curated collection of over 1000 styles, spanning
              global fashion trends.
            </p>
          </div>
        </div>
        <div className="border-dashed border-y-2 border-r-2 p-10 relative">
          <div className="space-y-5 mt-10">
            <p className="text-xs text-[#C4A484] tracking-widest"> STEP 02 </p>
            <h1 className="text-xl"> Effortless Navigation </h1>
            <p className="text-sm text-[#C4A484]">
              Intuitive filters and categories help you find the perfect pieces
              tailored to your style.
            </p>
          </div>
        </div>
        <div className="border-dashed border-y-2 border-r-2 p-10 relative">
          <div className="space-y-5 mt-10">
            <p className="text-xs text-[#C4A484] tracking-widest"> STEP 03 </p>
            <h1 className="text-xl"> Secure Checkout </h1>
            <p className="text-sm text-[#C4A484]">
              Multiple payment options and encrypted transactions ensure a safe
              and hassle-free purchase.
            </p>
          </div>
        </div>
        <div className="border-dashed border-y-2 border-r-2 p-10 relative">
          <div className="space-y-5 mt-10">
            <p className="text-xs text-[#C4A484] tracking-widest"> STEP 04 </p>
            <h1 className="text-xl"> Unbox Happiness </h1>
            <p className="text-sm text-[#C4A484]">
              Unbox a fashion-forward experience delivered right to your door,
              ready to elevate your style.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
