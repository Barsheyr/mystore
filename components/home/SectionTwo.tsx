import React from "react";
import Image from "next/image";
import SectionTO from "@/assests/SectionTO.jpg";
import SectionTT from "@/assests/SectionTT.jpg";
import SectionThree from "@/assests/Section3.jpg";
import SectionFour from "@/assests/Section4.jpg";
import SectionFive from "@/assests/Section5.jpg";
import SectionSix from "@/assests/Section6.jpg";
import SectionSeven from "@/assests/Section7.jpg";
import SectionEight from "@/assests/Section8.jpg";
import SectionNine from "@/assests/Section9.jpg";
import SectionTen from "@/assests/Section10.jpg";
import SectionEleven from "@/assests/Section11.jpg";
import SectionTwelve from "@/assests/Section12.jpg";

const SectionTwo = () => {
  return (
    <section className="border-dashed border-2 mt-20 rounded-md">
      <div className="space-y-10 lg:p-20 p-10">
        <h1 className="lg:text-4xl text-xl">
          CRAFTING TRENDS, INSPIRING CONFIDENCE
        </h1>
        <p className="text-sm text-">
          Explore a world of fashion at StyleLoom, where trends meet
          affordability.
        </p>
      </div>

      <div className="grid lg:grid-cols-3">
        <div className="border-dashed border-y-2 border-r-2 p-10 relative">
          <div className="space-y-5 mt-10">
            <Image src={SectionTO} alt="image" className="" />
            <h1 className="text-xl"> Passionate Craftsmanship </h1>
            <p className="text-sm">
              Every garment at StyleLoom is crafted with passion, reflecting our
              commitment to quality and innovation.
            </p>
          </div>

          <Image
            src={SectionTT}
            alt="image"
            className="absolute top-0 right-0"
          />
        </div>
        <div className="border-dashed border-y-2 border-r-2 p-10 relative">
          <div className="space-y-5 mt-10">
            <Image src={SectionFour} alt="image" />
            <h1 className="text-xl"> Fashion Forward </h1>
            <p className="text-sm">
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
          <div className="space-y-5 mt-10">
            <Image src={SectionFive} alt="image" />
            <h1 className="text-xl"> Customer-Center Approach </h1>
            <p className="text-sm">
              At StyleLoom, our customers are at the heart of everything we do.
              Your satisfaction is our measure of success.
            </p>
          </div>
          <Image
            src={SectionSix}
            alt="image"
            className="absolute top-0 right-0"
          />
        </div>
        <div className="border-dashed border-y-2 border-r-2 p-10 relative">
          <div className="space-y-5 mt-10">
            <Image src={SectionSeven} alt="image" />
            <h1 className="text-xl"> Global Inspiration </h1>
            <p className="text-sm">
              Influenced by global trends, we bring you a diverse and dynamic
              collection, embodying the spirit of fashion from around the world.
            </p>
          </div>
          <Image
            src={SectionEight}
            alt="image"
            className="absolute top-0 right-0"
          />
        </div>
        <div className="border-dashed border-y-2 border-r-2 p-10 relative">
          <div className="space-y-5 mt-10">
            <Image src={SectionTen} alt="image" />
            <h1 className="text-xl"> Empowering Your Style </h1>
            <p className="text-sm">
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
          <div className="space-y-5 mt-10">
            <Image src={SectionEleven} alt="image" />
            <h1 className="text-xl"> Empowering Your Style </h1>
            <p className="text-sm">
              Beyond clothing, StyleLoom is a lifestyle. Join us on a journey of
              self-expression and empowerment through fashion.
            </p>
          </div>
          <Image
            src={SectionTwelve}
            alt="image"
            className="absolute top-0 right-0"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
