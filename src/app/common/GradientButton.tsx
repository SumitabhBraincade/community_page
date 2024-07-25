import React from "react";

interface GradientButtonProps {
  name: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({ name }) => {
  return (
    <div className="gradient_button w-[150px] h-[44px] rounded relative cursor-pointer transition-all duration-200">
      <div className="absolute text-center font-sans top-0 left-0 font-medium h-[40px] w-full rounded bg-white px-6 py-2">
        {name}
      </div>
    </div>
  );
};

export default GradientButton;
