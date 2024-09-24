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
    },
    {
      id: 1,
      label: "Returns",
      content: "Content for Tab 2",
      Name1: "What is the return policy?",
      p1: "We accept returns within 30 days of purchase. Items must be unused and in original packaging.",
      Name2: "How do I initiate a return?",
      p2: "To start a return, contact our support team with your order number and reason for return.",
      Name3: "When will I receive my refund?",
      p3: "Refunds are processed within 5-7 business days after we receive your return",
      Name4: "Can I exchange an item?",
      p4: "Yes, exchanges are available for the same product in a different size or color.",
    },
    {
      id: 2,
      label: "Ordering",
      content: "Content for Tab 3",
      Name1: "How do I create an account?",
      p1: "Click on the 'Sign Up' button at the top of the page and fill in your details to create an account.",
      Name2: "How do I reset my password?",
      p2: "Go to the login page, click 'Forgot Password', and follow the instructions to reset your password.",
      Name3: "How do I view my order history?",
      p3: "Log in to your account and go to 'My Orders' to view your past purchases.",
      Name4: "Can I cancel or change my order?",
      p4: "You can cancel or modify your order within 24 hours of placing it by contacting our support team.",
    },
    {
      id: 3,
      label: "Shipping",
      content: "Content for Tab 4",
      Name1: "What are the shipping options?",
      p1: "We offer standard, express, and next-day delivery options to meet your needs.",
      Name2: "How do I track my order?",
      p2: "You can track your order via the tracking link provided in your shipping confirmation email.",
      Name3: "Do you ship internationally?",
      p3: "Yes, we ship to select international destinations. Check our shipping page for more details.",
      Name4: "What happens if my package is lost?",
      p4: "If your package is lost, please contact our support team, and we'll assist you with a replacement or refund.",
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
                    <div className="rounded-r-lg shadow-sm lg:py-5 lg:px-5 space-y-5">
                      <p className="font-semibold lg:text-lg">{tab.Name1}</p>
                      <p className="text-sm text-[#C4A484]"> {tab.p1} </p>
                    </div>
                  </div>
                  <div className="border-dashed border-b-2">
                    <div className="rounded-r-lg shadow-sm lg:py-5 lg:px-5 space-y-5">
                      <p className="font-semibold lg:text-lg">{tab.Name2}</p>
                      <p className="text-sm text-[#C4A484]"> {tab.p2} </p>
                    </div>
                  </div>
                  <div className="border-dashed border-r-2">
                    <div className="rounded-r-lg shadow-sm lg:py-5 lg:px-5 space-y-5">
                      <p className="font-semibold lg:text-lg">{tab.Name3}</p>
                      <p className="text-sm text-[#C4A484]"> {tab.p3} </p>
                    </div>
                  </div>
                  <div className="">
                    <div className="rounded-r-lg shadow-sm lg:py-5 lg:px-5 space-y-5">
                      <p className="font-semibold lg:text-lg">{tab.Name4}</p>
                      <p className="text-sm text-[#C4A484]"> {tab.p4} </p>
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
