import React from "react";
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center lgl:justify-end items-center relative py-2 sm:py-6">
      <div className="relative flex items-center justify-center w-[min(240px,72vw)] h-[min(240px,72vw)] sm:w-[300px] sm:h-[300px] md:w-[360px] md:h-[360px] lgl:w-[420px] lgl:h-[420px] xl:w-[460px] xl:h-[460px]">
        {/* Soft wash — no blur filter on small screens */}
        <div
          aria-hidden
          className="absolute inset-6 rounded-full bg-designColor/10 md:bg-gradient-to-br md:from-designColor/20 md:via-sky-400/5 md:to-transparent md:inset-0 md:blur-2xl"
        />

        <div
          aria-hidden
          className="absolute inset-0 rounded-full border border-white/10 md:border-dashed md:border-white/15"
        />

        <div
          aria-hidden
          className="absolute inset-3 sm:inset-4 md:inset-5 rounded-full border border-designColor/25"
        />

        <div className="relative z-10 w-[82%] h-[82%] rounded-full overflow-hidden border-2 sm:border-[3px] border-white/10 bg-surface">
          <img
            className="w-full h-full object-cover object-top"
            src={bannerImg}
            alt="Naseef Nusky"
            width={460}
            height={460}
            decoding="async"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bodyColor/40 via-transparent to-transparent" />
        </div>

        <svg
          aria-hidden
          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none hidden sm:block"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="47"
            fill="none"
            stroke="#5eead4"
            strokeWidth="0.6"
            strokeLinecap="round"
            strokeDasharray="40 220"
            className="opacity-70"
          />
        </svg>
      </div>
    </div>
  );
};

export default RightBanner;
