"use client";

import React from "react";

interface GameCardProps {
  game: {
    id: string;
    title: string;
    thumbnail: string;
    creator: string;
    avatar: string;
    views: number;
    likes: number;
  };
  setSelectedGame: (id: string) => void;
  isSmall: boolean;
}

const GameCard: React.FC<GameCardProps> = ({
  game,
  setSelectedGame,
  isSmall,
}) => {
  const { id, title, thumbnail, creator, views, likes } = game;

  const handleGameClick = () => {
    setSelectedGame(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.style.overflow = "hidden";
  };

  return (
    <div
      className={`w-full h-[250px] ${isSmall ? "md:h-[230px]" : "md:h-[320px]"} relative rounded-lg bg-cover bg-no-repeat bg-center cursor-pointer group overflow-hidden`}
      key={id}
      onClick={handleGameClick}
    >
      <div
        className="w-full h-full flex items-end rounded-lg transition-all duration-300 hover:scale-110"
        style={{
          backgroundImage: `url(${thumbnail})`,
        }}
      >
        <div
          className={`w-full h-0 transition-all duration-300 group-hover:h-full`}
          style={{
            background:
              "linear-gradient(186.98deg, rgba(217, 217, 217, 0) 4.82%, rgba(23, 23, 23, 0.45) 48.5%, rgba(23, 23, 23, 0.75) 93.22%)",
          }}
        ></div>
        <div className="w-0 h-full group-hover:w-full flex justify-center items-center group-hover:h-full absolute top-0 left-0 transition-all duration-300">
          <div
            className={`hidden group-hover:flex w-[50px] h-[50px] ${isSmall ? "md:w-[50px] md:h-[50px]" : "md:w-[70px] md:h-[70px]"} rounded-full justify-center items-center bg-[#212121]`}
          >
            <div className="ml-1">
              <svg
                width={isSmall ? "20" : "30"}
                height={isSmall ? "20" : "30"}
                viewBox="0 0 30 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.0055 17.8271C30.0066 18.2838 29.8895 18.733 29.6656 19.1311C29.4416 19.5291 29.1185 19.8625 28.7276 20.0986L4.50222 34.9184C4.09378 35.1685 3.62599 35.305 3.14715 35.3139C2.66831 35.3228 2.19578 35.2036 1.77837 34.9688C1.36494 34.7377 1.02053 34.4006 0.780576 33.9922C0.540621 33.5838 0.413777 33.1188 0.413086 32.6452V3.00904C0.413777 2.53537 0.540621 2.07043 0.780576 1.66204C1.02053 1.25364 1.36494 0.916528 1.77837 0.685367C2.19578 0.450559 2.66831 0.331438 3.14715 0.340305C3.62599 0.349172 4.09378 0.485707 4.50222 0.735809L28.7276 15.5555C29.1185 15.7917 29.4416 16.1251 29.6656 16.5231C29.8895 16.9212 30.0066 17.3704 30.0055 17.8271Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`absolute bottom-0 w-full h-[70px] ${isSmall ? "md:h-[70px]" : "md:h-[90px]"} z-30`}
        style={{
          background:
            "linear-gradient(186.98deg, rgba(217, 217, 217, 0) 4.82%, rgba(23, 23, 23, 0.45) 48.5%, rgba(23, 23, 23, 0.75) 93.22%)",
        }}
      >
        <div className="h-full flex justify-between items-end px-[15px] pb-[15px]">
          <div className="flex items-center gap-3">
            <div
              className={`hidden md:flex ${isSmall ? "w-8 h-8" : "w-10 h-10"} rounded-full bg-white`}
            ></div>
            <div className="flex flex-col items-start">
              <p
                className={`text-base ${isSmall ? "md:text-[16px]" : "md:text-[20px]"} font-medium text-white`}
              >
                {title}
              </p>
              <p
                className={`text-xs ${isSmall ? "md:text-xs" : "md:text-base"} font-medium text-[#ffffff7d]`}
              >
                {creator}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-2 items-center">
              <div className="">
                <svg
                  width="16"
                  height="10"
                  viewBox="0 0 18 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.77 6C17.77 5.641 17.576 5.406 17.188 4.934C15.768 3.21 12.636 0 8.99998 0C5.36398 0 2.23198 3.21 0.81198 4.934C0.42398 5.406 0.22998 5.641 0.22998 6C0.22998 6.359 0.42398 6.594 0.81198 7.066C2.23198 8.79 5.36398 12 8.99998 12C12.636 12 15.768 8.79 17.188 7.066C17.576 6.594 17.77 6.359 17.77 6ZM8.99998 9C9.79563 9 10.5587 8.68393 11.1213 8.12132C11.6839 7.55871 12 6.79565 12 6C12 5.20435 11.6839 4.44129 11.1213 3.87868C10.5587 3.31607 9.79563 3 8.99998 3C8.20433 3 7.44127 3.31607 6.87866 3.87868C6.31605 4.44129 5.99998 5.20435 5.99998 6C5.99998 6.79565 6.31605 7.55871 6.87866 8.12132C7.44127 8.68393 8.20433 9 8.99998 9Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p className="text-xs md:text-xs font-medium text-white">
                {views}
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="">
                <svg
                  width="16"
                  height="13"
                  viewBox="0 0 19 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.53618 1.77643C2.47382 0.839077 3.74536 0.3125 5.07118 0.3125C6.397 0.3125 7.66854 0.839077 8.60618 1.77643C8.78951 1.9591 9.02551 2.18643 9.31418 2.45843C9.60218 2.18643 9.83784 1.9591 10.0212 1.77643C10.9549 0.847104 12.2176 0.323816 13.535 0.320288C14.8524 0.31676 16.1179 0.833277 17.0566 1.75759C17.9952 2.6819 18.5312 3.93932 18.548 5.25658C18.5648 6.57385 18.061 7.84451 17.1462 8.79243L10.0202 15.9184C9.83265 16.1059 9.57834 16.2112 9.31318 16.2112C9.04801 16.2112 8.7937 16.1059 8.60618 15.9184L1.48018 8.79343C0.566218 7.85083 0.0596873 6.58657 0.069978 5.27366C0.0802687 3.96076 0.607554 2.70459 1.53618 1.77643Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p className="text-xs md:text-xs font-medium text-white">
                {likes}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
