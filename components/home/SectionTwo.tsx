import React from "react";
import Image from "next/image";
import wrong from "@/assests/Vector.svg";
import SectionTO from "@/assests/SectionTO.svg";
import SectionThree from "@/assests/Section3.svg";
import SectionFour from "@/assests/Section4.svg";
import SectionFive from "@/assests/Section5.svg";
import SectionSix from "@/assests/Section6.svg";
import SectionSeven from "@/assests/Section7.svg";
import SectionEight from "@/assests/Section8.svg";
import SectionNine from "@/assests/Section9.svg";
import SectionTen from "@/assests/Section10.svg";
import SectionEleven from "@/assests/Section11.svg";
import SectionTwelve from "@/assests/Section12.svg";

const SectionTwo = () => {
  return (
    <section className="border-dashed border-2 mt-20 rounded-md">
      <div className="space-y-10 lg:p-20 p-10">
        <h1 className="lg:text-4xl text-xl">
          CRAFTING TRENDS, INSPIRING CONFIDENCE
        </h1>
        <p className="text-sm text-[#C4A484]">
          Explore a world of fashion at StyleLoom, where trends meet
          affordability.
        </p>
      </div>

      <div className="grid lg:grid-cols-3">
        <div className="border-dashed border-y-2 border-r-2 p-10 relative">
          <div className="space-y-5 mt-28">
            <Image src={SectionTO} alt="image" className="" />
            <h1 className="text-xl"> Passionate Craftsmanship </h1>
            <p className="text-sm text-[#C4A484]">
              Every garment at StyleLoom is crafted with passion, reflecting our
              commitment to quality and innovation.
            </p>
          </div>
          <Image
            src={wrong}
            alt="image"
            className="absolute top-0 right-0 dark:bg-red-700:"
          />
        </div>
        <div className="border-dashed border-y-2 border-r-2 p-10 relative">
          <div className="space-y-5 mt-28">
            <Image src={SectionFour} alt="image" />
            <h1 className="text-xl"> Fashion Forward </h1>
            <p className="text-sm text-[#C4A484]">
              We are more than a brand; we are trendsetters, curating styles
              that empower and inspire confidence.
            </p>
          </div>
          <Image
            src={SectionThree}
            alt="image"
            className="absolute top-0 right-0"
          />
        </div>
        <div className="border-dashed border-y-2 border-r-2 p-10 relative">
          <div className="space-y-5 mt-28">
            <Image src={SectionSix} alt="image" />
            <h1 className="text-xl"> Customer-Center Approach </h1>
            <p className="text-sm text-[#C4A484]">
              At StyleLoom, our customers are at the heart of everything we do.
              Your satisfaction is our measure of success.
            </p>
          </div>
          <Image
            src={SectionFive}
            alt="image"
            className="absolute top-0 right-0"
          />
        </div>
        <div className="border-dashed border-y-2 border-r-2 p-10 relative">
          <div className="space-y-5 mt-28">
            <Image src={SectionEight} alt="image" />
            <h1 className="text-xl"> Global Inspiration </h1>
            <p className="text-sm text-[#C4A484]">
              Influenced by global trends, we bring you a diverse and dynamic
              collection, embodying the spirit of fashion from around the world.
            </p>
          </div>
          <Image
            src={SectionSeven}
            alt="image"
            className="absolute top-0 right-0"
          />
        </div>
        <div className="border-dashed border-y-2 border-r-2 p-10 relative">
          <div className="space-y-5 mt-28">
            <Image src={SectionTen} alt="image" />
            <h1 className="text-xl"> Empowering Your Style </h1>
            <p className="text-sm text-[#C4A484]">
              Beyond clothing, StyleLoom is a lifestyle. Join us on a journey of
              self-expression and empowerment through fashion.
            </p>
          </div>
          <Image
            src={SectionNine}
            alt="image"
            className="absolute top-0 right-0"
          />
        </div>
        <div className="border-dashed border-y-2 border-r-2 p-10 relative">
          <div className="space-y-5 mt-28">
            <Image src={SectionTwelve} alt="image" />
            <h1 className="text-xl"> Sustainable Practices </h1>
            <p className="text-sm text-[#C4A484]">
              StyleLoom is committed to sustainability, integrating eco-friendly
              practices into our production process.
            </p>
          </div>
          <Image
            src={SectionEleven}
            alt="image"
            className="absolute top-0 right-0"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
