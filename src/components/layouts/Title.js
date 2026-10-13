import React from "react";

const Title = ({ title, des }) => {
  return (
    <div className="flex flex-col gap-2 sm:gap-3 font-titleFont mb-8 sm:mb-12 md:mb-14 px-1">
      {title ? (
        <h3 className="text-[10px] sm:text-xs uppercase font-medium text-designColor tracking-[0.2em] sm:tracking-[0.25em]">
          {title}
        </h3>
      ) : null}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold tracking-tight leading-tight">
        {des}
      </h1>
    </div>
  );
};

export default Title;
