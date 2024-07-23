"use client";

import React, { useEffect, useState } from "react";

const GradientBackground = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="absolute top-0 left-0 w-full z-0 animate-pulse">
      <svg
        width={windowWidth}
        height="851"
        viewBox="0 0 1122 851"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_58_60473)">
          <path
            d="M542.276 202.35C551.884 190.369 570.116 190.369 579.724 202.35L876.126 571.986C888.723 587.696 877.539 611 857.402 611H264.598C244.461 611 233.277 587.696 245.874 571.986L542.276 202.35Z"
            fill="url(#paint0_linear_58_60473)"
            fillOpacity="0.5"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_58_60473"
            x="0.552887"
            y="-46.6367"
            width="1120.89"
            height="897.637"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="120"
              result="effect1_foregroundBlur_58_60473"
            />
          </filter>
          <linearGradient
            id="paint0_linear_58_60473"
            x1="316.619"
            y1="432.424"
            x2="758.826"
            y2="425.856"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F468B2" />
            <stop offset="0.32" stopColor="#6A81F6" />
            <stop offset="0.62" stopColor="#93DF8F" />
            <stop offset="1" stopColor="#F8C048" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default GradientBackground;
