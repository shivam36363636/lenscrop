import React from "react";
import WidthWrapper from "./WidthWrapper";
import Button from "./Button";

export default function Hero() {
  return (
    <div
      className="h-[100vh] mt-20 bg-[linear-gradient(to_right_bottom,rgba(255,255,255,0.7),rgba(255,255,255,0.7)),url('/assets/bg.webp')] bg-center bg-cover
            bg-no-repeat"
    >
      <WidthWrapper>
        <div className="h-full flex items-center justify-center">
          <div className="flex flex-col gap-3 items-center px-5">
            <h1 className="text-[64px] text-center font-bold text-black/80 max-[1000px]:text-[48px] max-[750px]:text-[32px] ">
              We are at the forefront of AI
            </h1>
            <p className="text-xl font-medium text-black/60 max-[1000px]:text-lg max-[755px]:w-[80%] max-[755px]:mx-auto max-[755px]:text-center max-[400px]:text-xs">
              From Conserving Wildlife to Automatically Generating Caricatures
              We Do It All
            </p>
            <Button.PrimaryButton className="py-3 px-6 mt-5">
              Learn More
            </Button.PrimaryButton>
          </div>
        </div>
      </WidthWrapper>
    </div>
  );
}
