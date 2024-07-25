import React from "react";
import GradientButton from "../common/GradientButton";

const JoinWaitlist = () => {
  return (
    <div
      className="md:my-[100px] w-full p-[1px] h-fit rounded-lg"
      style={{
        background: "linear-gradient(175.59deg, #1F1F1F 10.1%, #090909 78%)",
      }}
    >
      <div
        className="gap-2 px-2 py-10 flex flex-col items-center justify-around w-full rounded-lg"
        style={{
          background:
            "linear-gradient(183.29deg, rgba(13, 13, 13, 0.9) 2.96%, rgba(1, 1, 1, 1) 87.54%)",
        }}
      >
        <div className="uppercase text-[#ffffff86] font-sans text-[20px]">
          it’s your turn now
        </div>
        <div className="text-[44px] text-white font-sans pb-8">
          Join the <span className="text-[#B3B5FD] font-serif">waitlist</span>
        </div>
        <div className="h-fit w-full md:w-1/2 flex flex-col md:flex-row items-center gap-4">
          <div className="bg-[#0F0F0F] h-[44px] w-full flex justify-start items-center pl-4 border-[1px] border-[#474747] mb-4 md:mb-0 md:flex-1 rounded-lg">
            <input
              type="email"
              className="bg-transparent outline-none text-white"
              placeholder="Enter your email address"
            ></input>
          </div>
          <GradientButton name="Join Waitlist" />
        </div>
      </div>
    </div>
  );
};

export default JoinWaitlist;
