import React from "react";

const ResumeCard = ({ title, subTitle, des }) => {
  return (
    <div className="w-full group flex">
      <div className="w-6 sm:w-10 h-[2px] bg-white/10 mt-8 sm:mt-10 relative shrink-0">
        <span className="absolute w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full -top-[5px] sm:-top-[6px] -left-1 sm:-left-1.5 bg-bodyColor border-2 border-designColor/60 group-hover:border-designColor group-hover:bg-designColor/20 duration-300"></span>
      </div>
      <div className="w-full min-w-0 surface-card p-4 sm:p-5 lgl:px-8 flex flex-col justify-center gap-3 sm:gap-4 lgl:gap-5 group-hover:border-designColor/25 duration-300">
        <div className="flex flex-col lgl:flex-row justify-between gap-2 sm:gap-3 lgl:items-center">
          <div className="min-w-0">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white font-titleFont duration-300 break-words">
              {title}
            </h3>
            <p className="text-xs sm:text-sm mt-1.5 sm:mt-2 text-designColor/90 duration-300 break-words">
              {subTitle}
            </p>
          </div>
        </div>
        <p className="text-sm md:text-base font-medium text-lightText leading-relaxed duration-300">
          {des}
        </p>
      </div>
    </div>
  );
};

export default ResumeCard;
