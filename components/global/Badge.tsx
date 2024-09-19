"use client";
import React from "react";
import CountUp from "react-countup";

// Define the types for the component props
interface BadgeProps {
  containerStyles?: string; // Optional prop for container styling
  endCountNum: number; // Numeric value for the count-up animation
  endCountText?: string; // Optional text to display after the count number
  badgeText: string; // Text to display on the badge
}

const Badge: React.FC<BadgeProps> = ({
  containerStyles = "", // Default value for containerStyles

  endCountNum,
  endCountText = "", // Default value for endCountText
  badgeText,
}) => {
  return (
    <div className={`badge ${containerStyles}`}>
      <div className="p-10 space-y-3">
        <div className="text-4xl leading-none font-bold text-primary">
          <CountUp end={endCountNum} delay={1} duration={4} />
          {endCountText}
        </div>
        <div className="leading-none text-sm font-medium text-slate-400">
          {badgeText}
        </div>
      </div>
    </div>
  );
};

export default Badge;
