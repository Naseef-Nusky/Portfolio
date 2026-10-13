import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Full Stack Developer.",
      "Professional Coder.",
      "AI Integration Developer.",
    ],
    loop: true,
    typeSpeed: 40,
    deleteSpeed: 25,
    delaySpeed: 2200,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-6 sm:gap-8 lgl:gap-10 text-center lgl:text-left items-center lgl:items-start">
      <div className="flex flex-col gap-3 sm:gap-5 w-full">
        <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] text-designColor font-medium">
          Portfolio
        </p>
        <h1 className="text-[1.65rem] xs:text-[1.85rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] tracking-tight whitespace-nowrap">
          Naseef <span className="text-designColor">Nusky</span>
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300 min-h-[2rem] sm:min-h-[2.5rem]">
          <span className="text-white/90">{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#5eead4"
          />
        </h2>
        <p className="text-sm sm:text-base md:text-lg font-bodyFont leading-7 tracking-wide text-lightText max-w-lg mx-auto lgl:mx-0">
          I have experience in building and designing software. I specialize in
          full-stack development.
        </p>
      </div>
      <div className="w-full flex justify-center lgl:justify-start">
        <Media />
      </div>
    </div>
  );
};

export default LeftBanner;
