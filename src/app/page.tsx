import React from "react";
import JoinWaitlist from "./components/joinWaitlist";
import GameView from "./components/GameView";
import GradientButton from "./common/GradientButton";

const page = () => {
  return (
    <div className="w-full h-fit">
      <div className="flex flex-col gap-12 items-center justify-around my-[50px] md:my-[100px]">
        <div className="flex flex-col items-center gap-3 w-full">
          <div className="w-full text-center text-[42px] text-white">
            Discover our <span className="font-serif">AI powered</span> games!
          </div>
          <div className="text-[#ffffff86] w-full md:w-1/2 text-center font-light text-[20px] font-sans">
            Collection of few games created by our community powered by our AI
            game creator.
          </div>
        </div>
        <GradientButton name="Join Waitlist" />
      </div>
      <div className="w-full h-fit my-[30px] md:my-[100px]">
        <GameView />
      </div>
      <JoinWaitlist />
    </div>
  );
};

export default page;
