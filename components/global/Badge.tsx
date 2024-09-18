"use client";
import React from "react";
import CountUp from "react-countup";

// Define the types for the component props
interface BadgeProps {
  containerStyles?: string; // Optional prop for container styling
  icon: React.ReactNode; // Prop for the icon, can be any valid React node (e.g., JSX, icon component)
  endCountNum: number; // Numeric value for the count-up animation
  endCountText?: string; // Optional text to display after the count number
  badgeText: string; // Text to display on the badge
}

const Badge: React.FC<BadgeProps> = ({
  containerStyles = "", // Default value for containerStyles
  icon,
  endCountNum,
  endCountText = "", // Default value for endCountText
  badgeText,
}) => {
  return (
    <div className={`badge ${containerStyles}`}>
      <div className="text-3xl text-primary">{icon}</div>
      <div className="flex items-center gap-x-2">
        <div className="text-4xl leading-none font-bold text-primary">
          <CountUp end={endCountNum} delay={1} duration={4} />
          {endCountText}
        </div>
        <div className="max-w-[70px] leading-none text-[15px] font-medium">
          {badgeText}
        </div>
      </div>
    </div>
  );
};

export default Badge;
