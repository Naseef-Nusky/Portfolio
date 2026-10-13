import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full lgl:min-h-[calc(100vh-5.75rem)] pt-4 sm:pt-8 pb-12 sm:pb-16 flex flex-col-reverse gap-8 sm:gap-10 lgl:gap-8 xl:gap-0 lgl:flex-row items-center section-line font-titleFont"
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
};

export default Banner;
