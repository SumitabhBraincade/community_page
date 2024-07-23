"use client";

import React, { useState } from "react";

interface GradientButtonProps {
  name: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({ name }) => {
  const [mouseEnter, setMouseEnter] = useState(false);

  const handleMouseEnter = () => {
    setMouseEnter(true);
  };

  const handleMouseLeave = () => {
    setMouseEnter(false);
  };

  return (
    <div
      className="gradient_button w-[150px] h-[44px] rounded relative cursor-pointer transition-all duration-200"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute text-center top-0 left-0 font-medium h-[40px] w-full rounded bg-white px-6 py-2">
        {name}
      </div>
    </div>
  );
};

export default GradientButton;
