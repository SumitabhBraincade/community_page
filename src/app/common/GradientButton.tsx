import React from "react";

interface GradientButtonProps {
  name: string;
  mainContainerStyle: string;
  childContainerStyle: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  name,
  mainContainerStyle,
  childContainerStyle,
}) => {
  return (
    <div
      className={`gradient_button ${mainContainerStyle} rounded-lg relative cursor-pointer transition-all duration-200`}
    >
      <div
        className={`absolute flex items-center justify-center font-sans top-0 left-0 font-medium ${childContainerStyle} w-full rounded-lg bg-white`}
      >
        {name}
      </div>
    </div>
  );
};

export default GradientButton;
