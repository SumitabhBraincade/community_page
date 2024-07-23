"use client";

import React, { useState } from "react";
import playIcon from "../icons/play_icon.svg";

const Navbar = () => {
  const [tab, setTab] = useState("Home");

  const handleCommunityClick = () => {
    setTab("Community");
  };

  const handleHomeClick = () => {
    setTab("Home");
  };

  return (
    <div className="w-full h-[60px] relative bg-transparent flex justify-between items-end z-50">
      <div className="text-white text-[28px] font-semibold">aicade</div>
      <div className="hidden md:flex gap-8">
        <div
          className={`flex gap-1 items-center cursor-pointer transition-all duration-200 ${tab === "Home" ? "text-white" : "text-[#ffffff86]"}`}
          onClick={handleHomeClick}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 19.9989V9.49894L12 4.21094L19 9.49894V19.9989H13.808V13.6149H10.192V19.9989H5Z"
              fill={tab === "Home" ? "#fff" : "#ffffff86"}
            />
          </svg>
          Home
        </div>
        <div
          className={`flex gap-1 items-center cursor-pointer transition-all duration-200 ${tab === "Community" ? "text-white" : "text-[#ffffff86]"}`}
          onClick={handleCommunityClick}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_58_60482)">
              <path
                d="M5.13333 0.000933396C4.69802 -0.00947618 4.26503 0.0672728 3.85982 0.226666C3.45461 0.386059 3.08537 0.624877 2.77381 0.929072C2.46225 1.23327 2.21468 1.5967 2.04564 1.99798C1.87661 2.39926 1.78953 2.8303 1.78953 3.26573C1.78953 3.70117 1.87661 4.1322 2.04564 4.53349C2.21468 4.93477 2.46225 5.2982 2.77381 5.60239C3.08537 5.90659 3.45461 6.14541 3.85982 6.3048C4.26503 6.46419 4.69802 6.54094 5.13333 6.53053C5.56864 6.54094 6.00164 6.46419 6.40685 6.3048C6.81206 6.14541 7.1813 5.90659 7.49286 5.60239C7.80441 5.2982 8.05199 4.93477 8.22103 4.53349C8.39006 4.1322 8.47714 3.70117 8.47714 3.26573C8.47714 2.8303 8.39006 2.39926 8.22103 1.99798C8.05199 1.5967 7.80441 1.23327 7.49286 0.929072C7.1813 0.624877 6.81206 0.386059 6.40685 0.226666C6.00164 0.0672728 5.56864 -0.00947618 5.13333 0.000933396ZM3.26667 8.39533C2.40029 8.39533 1.5694 8.7395 0.956784 9.35212C0.344166 9.96474 0 10.7956 0 11.662L0 13.9925H10.2667V11.662C10.2667 10.7956 9.9225 9.96474 9.30988 9.35212C8.69726 8.7395 7.86637 8.39533 7 8.39533H3.26667ZM11.6667 9.33427H11.2V14.0009H14V11.6676C14 11.0488 13.7542 10.4553 13.3166 10.0177C12.879 9.5801 12.2855 9.33427 11.6667 9.33427Z"
                fill={tab === "Community" ? "#fff" : "#ffffff86"}
              />
              <path
                d="M10.7334 3.73438C10.1145 3.73438 9.52103 3.98021 9.08344 4.41779C8.64586 4.85538 8.40002 5.44887 8.40002 6.06771C8.40002 6.68655 8.64586 7.28004 9.08344 7.71762C9.52103 8.15521 10.1145 8.40104 10.7334 8.40104C11.3522 8.40104 11.9457 8.15521 12.3833 7.71762C12.8209 7.28004 13.0667 6.68655 13.0667 6.06771C13.0667 5.44887 12.8209 4.85538 12.3833 4.41779C11.9457 3.98021 11.3522 3.73438 10.7334 3.73438Z"
                fill={tab === "Community" ? "#fff" : "#ffffff86"}
              />
            </g>
            <defs>
              <clipPath id="clip0_58_60482">
                <rect
                  width="14"
                  height="14"
                  fill={tab === "Community" ? "#fff" : "#ffffff86"}
                />
              </clipPath>
            </defs>
          </svg>
          Community
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 flex justify-center items-center bg-[#ffffff86] rounded  cursor-pointer">
          <svg
            width="11"
            height="14"
            viewBox="0 0 11 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 7.00031C11.0004 7.17008 10.9569 7.33706 10.8736 7.48502C10.7904 7.63299 10.6703 7.75689 10.525 7.84469L1.52 13.3534C1.36818 13.4464 1.19429 13.4972 1.0163 13.5005C0.838305 13.5037 0.662659 13.4595 0.5075 13.3722C0.353819 13.2863 0.225798 13.1609 0.136602 13.0091C0.0474072 12.8573 0.000256786 12.6845 0 12.5084V1.49219C0.000256786 1.31612 0.0474072 1.14329 0.136602 0.991481C0.225798 0.839674 0.353819 0.714363 0.5075 0.628437C0.662659 0.541155 0.838305 0.496875 1.0163 0.500171C1.19429 0.503468 1.36818 0.55422 1.52 0.647187L10.525 6.15594C10.6703 6.24373 10.7904 6.36764 10.8736 6.5156C10.9569 6.66356 11.0004 6.83054 11 7.00031Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="h-[40px] px-4 flex items-center text-white text-xs justify-center border-[1px] border-[#fff] rounded cursor-pointer">
          Join Waitlist
        </div>
      </div>
    </div>
  );
};

export default Navbar;
