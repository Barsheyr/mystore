"use client";
import React, { useState } from "react";

// Define the Tab interface to type the tab objects
interface Tab {
  id: number;
  label: string;
  content?: string;
  Name1: string;
  Name2: string;
  Name3: string;
  Name4: string;
  Role: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
}

const Tabs: React.FC = () => {
  // Define the activeTab state with a type of number
  const [activeTab, setActiveTab] = useState<number>(0);

  // Array of tabs with the type Tab[]
  const tabs: Tab[] = [
    {
      id: 0,
      label: "All",
      content: "Content for Tab 1",
      Name1: "How can I place an order on Styleloom?",
      p1: "Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.",
      Name2: "Coastas Tsimi",
      p2: "Ordering is easy",
      Name3: "James Raphael",
      p3: "shop order",
      Name4: "Christian Jackson",
      p4: "buy order",
      Role: "Chief Marketing Officer",
    },
    {
      id: 1,
      label: "Returns",
      content: "Content for Tab 2",
      Name1: "What is the return policy?",
      p1: "We accept returns within 30 days of purchase. Items must be unused and in original packaging.",
      Name2: "Coastas Tsimi",
      p2: "Ordering is easy",
      Name3: "James Raphael",
      p3: "shop order",
      Name4: "Christian Jackson",
      p4: "buy order",
      Role: "Chief Marketing Officer",
    },
    {
      id: 2,
      label: "Ordering",
      content: "Content for Tab 3",
      Name1: "How can I place an order on Styleloom?",
      p1: "Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.",
      Name2: "Coastas Tsimi",
      p2: "Ordering is easy",
      Name3: "James Raphael",
      p3: "shop order",
      Name4: "Christian Jackson",
      p4: "buy order",
      Role: "Chief Marketing Officer",
    },
    {
      id: 3,
      label: "Shipping",
      content: "Content for Tab 4",
      Name1: "How can I place an order on Styleloom?",
      p1: "Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.",
      Name2: "Coastas Tsimi",
      p2: "Ordering is easy",
      Name3: "James Raphael",
      p3: "shop order",
      Name4: "Christian Jackson",
      p4: "buy order",
      Role: "Chief Marketing Officer",
    },
    {
      id: 4,
      label: "Support",
      content: "Content for Tab 5",
      Name1: "How can I get support",
      p1: "contact us",
      Name2: "Coastas Tsimi",
      p2: "Ordering support",
      Name3: "James Raphael",
      p3: "shop support",
      Name4: "Christian Jackson",
      p4: "buy order support",
      Role: "Chief Marketing Officer",
    },
  ];

  return (
    <section>
      <div className="">
        {/* Tab Buttons */}
        <div className="flex lg:flex-row flex-col p-5 gap-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex-1 py-2 text-center text-sm gap-10 ${
                activeTab === tab.id
                  ? "border-dashed border-2 gap-5 rounded-lg bg-[#C4A484]"
                  : "border-dashed border-2 rounded-lg"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-green95 mt-10 border-dashed border-2">
          {tabs.map(
            (tab) =>
              activeTab === tab.id && (
                <div key={tab.id} className="grid lg:grid-cols-2 grid-cols-1">
                  <div className="border-dashed border-r-2 border-b-2">
                    <div className="rounded-r-lg shadow-sm lg:py-5 lg:px-20">
                      <p className="font-semibold lg:text-lg">{tab.Name1}</p>
                      <p> {tab.p1} </p>
                    </div>
                  </div>
                  <div className="border-dashed border-b-2">
                    <div className="rounded-r-lg shadow-sm lg:py-5 lg:px-5">
                      <p className="font-semibold lg:text-lg">{tab.Name2}</p>
                      <p> {tab.p2} </p>
                    </div>
                  </div>
                  <div className="border-dashed border-r-2">
                    <div className="rounded-r-lg shadow-sm lg:py-5 lg:px-5">
                      <p className="font-semibold lg:text-lg">{tab.Name3}</p>
                      <p> {tab.p3} </p>
                    </div>
                  </div>
                  <div className="">
                    <div className="rounded-r-lg shadow-sm lg:py-5 lg:px-5">
                      <p className="font-semibold lg:text-lg">{tab.Name4}</p>
                      <p> {tab.p4} </p>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default Tabs;
