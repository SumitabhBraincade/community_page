"use client";

import React, { useState } from "react";
import modalBackground from "../assets/modal_background.png";
import GradientButton from "./GradientButton";

interface PlayGameModalProps {
  setSelectedGame: (id: string) => void;
  selectedGame: string;
}

const PlayGameModal: React.FC<PlayGameModalProps> = ({
  selectedGame,
  setSelectedGame,
}) => {
  const [details, setDetails] = useState(false);

  const handleModalCloseClick = () => {
    setSelectedGame("");
    setDetails(false);
    document.body.style.overflow = "scroll";
  };

  return (
    <div
      className={`absolute z-50 top-0 left-0 flex justify-center backdrop-blur-sm items-center transition-all duration-200 ${selectedGame !== "" ? "w-screen h-screen" : "h-0 w-screen"}`}
      style={{
        backgroundImage: `url(${modalBackground})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className={`w-full md:w-[882px] h-full md:h-fit ${selectedGame === "" ? "hidden" : "flex flex-col"}`}
      >
        <div className="flex items-center justify-start md:justify-end p-2 md:p-0 md:pb-4">
          <div
            className="w-8 h-8 bg-[#090909] flex justify-center items-center border-[1px] border-[#161616] rounded-lg cursor-pointer"
            onClick={handleModalCloseClick}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                fill="#363636"
              />
            </svg>
          </div>
        </div>
        <div className="h-[450px] w-full flex-1 md:flex-none bg-[#090909] border-[1px] border-[#161616] rounded-lg p-2">
          <div className="w-full h-full bg-[#161616]"></div>
        </div>
        <div
          className={`flex justify-center items-center md:hidden h-[40px] w-full`}
          style={{
            background: "linear-gradient(180deg, #0E0E0E 0%, #090909 103.82%)",
          }}
          onClick={() => setDetails(!details)}
        >
          <div
            className={`transition-all duration-200 ${details ? "rotate-0" : "rotate-180"}`}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 10L12 15L20 10"
                stroke="#5E5E5E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div
          className={`flex md:hidden overflow-hidden transition-all duration-200 ${!details ? "h-0 w-full" : "h-[150px] w-full"}`}
          style={{
            background: "linear-gradient(180deg, #0E0E0E 0%, #090909 103.82%)",
          }}
        >
          <div
            className={`w-full ${details ? "flex" : "hidden"} flex-col justify-between px-2 py-2`}
          >
            <div>
              <p className="text-white font-medium text-sm">Name of the Game</p>
              <div className="flex items-center mt-2">
                <div className="w-4 h-4 rounded-[50%] bg-white"></div>
                <p className="text-[#ffffff38] text-xs ml-2">Creator</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex items-center mr-7">
                <div className="">
                  <svg
                    width="18"
                    height="12"
                    viewBox="0 0 18 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.77 6C17.77 5.641 17.576 5.406 17.188 4.934C15.768 3.21 12.636 0 8.99998 0C5.36398 0 2.23198 3.21 0.81198 4.934C0.42398 5.406 0.22998 5.641 0.22998 6C0.22998 6.359 0.42398 6.594 0.81198 7.066C2.23198 8.79 5.36398 12 8.99998 12C12.636 12 15.768 8.79 17.188 7.066C17.576 6.594 17.77 6.359 17.77 6ZM8.99998 9C9.79563 9 10.5587 8.68393 11.1213 8.12132C11.6839 7.55871 12 6.79565 12 6C12 5.20435 11.6839 4.44129 11.1213 3.87868C10.5587 3.31607 9.79563 3 8.99998 3C8.20433 3 7.44127 3.31607 6.87866 3.87868C6.31605 4.44129 5.99998 5.20435 5.99998 6C5.99998 6.79565 6.31605 7.55871 6.87866 8.12132C7.44127 8.68393 8.20433 9 8.99998 9Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <p className="text-xs text-white ml-2">104</p>
              </div>
              <div className="flex items-center mr-7">
                <div className="">
                  <svg
                    width="19"
                    height="17"
                    viewBox="0 0 19 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.53618 1.77643C2.47382 0.839077 3.74536 0.3125 5.07118 0.3125C6.397 0.3125 7.66854 0.839077 8.60618 1.77643C8.78951 1.9591 9.02551 2.18643 9.31418 2.45843C9.60218 2.18643 9.83784 1.9591 10.0212 1.77643C10.9549 0.847104 12.2176 0.323816 13.535 0.320288C14.8524 0.31676 16.1179 0.833277 17.0566 1.75759C17.9952 2.6819 18.5312 3.93932 18.548 5.25658C18.5648 6.57385 18.061 7.84451 17.1462 8.79243L10.0202 15.9184C9.83265 16.1059 9.57834 16.2112 9.31318 16.2112C9.04801 16.2112 8.7937 16.1059 8.60618 15.9184L1.48018 8.79343C0.566218 7.85083 0.0596873 6.58657 0.069978 5.27366C0.0802687 3.96076 0.607554 2.70459 1.53618 1.77643Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <p className="text-xs text-white ml-2">104</p>
              </div>
            </div>
            <div className="flex justify-around">
              <div className="text-[#FDFDFD] border-[1px] h-9 w-[150px] flex justify-center rounded items-center text-xs font-semibold border-[#FDFDFD] px-5 mr-3 cursor-pointer">
                Share
              </div>
              <GradientButton name="Remix" />
            </div>
          </div>
        </div>
        <div className="hidden pt-5 md:flex items-center justify-between px-4">
          <div>
            <p className="text-white font-medium text-sm">Name of the Game</p>
            <div className="flex items-center mt-2">
              <div className="w-4 h-4 rounded-[50%] bg-white"></div>
              <p className="text-[#ffffff38] text-xs ml-2">Creator</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center mr-7">
              <div className="">
                <svg
                  width="18"
                  height="12"
                  viewBox="0 0 18 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.77 6C17.77 5.641 17.576 5.406 17.188 4.934C15.768 3.21 12.636 0 8.99998 0C5.36398 0 2.23198 3.21 0.81198 4.934C0.42398 5.406 0.22998 5.641 0.22998 6C0.22998 6.359 0.42398 6.594 0.81198 7.066C2.23198 8.79 5.36398 12 8.99998 12C12.636 12 15.768 8.79 17.188 7.066C17.576 6.594 17.77 6.359 17.77 6ZM8.99998 9C9.79563 9 10.5587 8.68393 11.1213 8.12132C11.6839 7.55871 12 6.79565 12 6C12 5.20435 11.6839 4.44129 11.1213 3.87868C10.5587 3.31607 9.79563 3 8.99998 3C8.20433 3 7.44127 3.31607 6.87866 3.87868C6.31605 4.44129 5.99998 5.20435 5.99998 6C5.99998 6.79565 6.31605 7.55871 6.87866 8.12132C7.44127 8.68393 8.20433 9 8.99998 9Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p className="text-xs text-white ml-2">104</p>
            </div>
            <div className="flex items-center mr-7">
              <div className="">
                <svg
                  width="19"
                  height="17"
                  viewBox="0 0 19 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.53618 1.77643C2.47382 0.839077 3.74536 0.3125 5.07118 0.3125C6.397 0.3125 7.66854 0.839077 8.60618 1.77643C8.78951 1.9591 9.02551 2.18643 9.31418 2.45843C9.60218 2.18643 9.83784 1.9591 10.0212 1.77643C10.9549 0.847104 12.2176 0.323816 13.535 0.320288C14.8524 0.31676 16.1179 0.833277 17.0566 1.75759C17.9952 2.6819 18.5312 3.93932 18.548 5.25658C18.5648 6.57385 18.061 7.84451 17.1462 8.79243L10.0202 15.9184C9.83265 16.1059 9.57834 16.2112 9.31318 16.2112C9.04801 16.2112 8.7937 16.1059 8.60618 15.9184L1.48018 8.79343C0.566218 7.85083 0.0596873 6.58657 0.069978 5.27366C0.0802687 3.96076 0.607554 2.70459 1.53618 1.77643Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p className="text-xs text-white ml-2">104</p>
            </div>
            <div className="text-[#FDFDFD] border-[1px] h-9 flex justify-center rounded items-center text-xs font-semibold border-[#FDFDFD] px-5 mr-3 cursor-pointer">
              Share
            </div>
            <GradientButton name="Remix" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayGameModal;
