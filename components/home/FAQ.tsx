import React from "react";
import Image from "next/image";
import SectionThree3 from "@/assests/SectionThree.svg";
import Tabs from "./Tabs";

const FAQ = () => {
  return (
    <section className="border-dashed border-2 mt-20 rounded-md relative">
      <div className="space-y-10 lg:p-24 p-10">
        <h1 className="lg:text-4xl text-xl">
          HAVE QUESTIONS? WE HAVE ANSWERS.
        </h1>
        <p className="text-sm text-[#C4A484]">
          Ease into the world of StyleLoom with clarity. Our FAQs cover over a
          spectrum of topics.
        </p>
      </div>
      <Image
        src={SectionThree3}
        alt="image"
        className="absolute top-0 right-0 lg:block hidden"
      />

      <div>
        <Tabs />
      </div>
    </section>
  );
};

export default FAQ;
