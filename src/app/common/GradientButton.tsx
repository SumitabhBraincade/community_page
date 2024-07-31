import React from "react";

interface GradientButtonProps {
  name: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({ name }) => {
  return (
    <div className="gradient_button w-[175px] h-[54px] rounded-lg relative cursor-pointer transition-all duration-200">
      <div className="absolute flex items-center justify-center font-sans top-0 left-0 font-medium h-[50px] w-full rounded-lg bg-white">
        {name}
      </div>
    </div>
  );
};

export default GradientButton;
