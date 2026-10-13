import React from "react";
import Title from "../layouts/Title";
import { logo } from "../../assets";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full section-pad section-line flex flex-col items-center justify-center"
    >
      <div className="flex justify-center items-center text-center w-full">
        <Title title="Get to know me" des="About Me" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 xl:gap-16 w-full items-center">
        <div className="flex flex-col items-center justify-center">
          <img
            src={logo}
            alt="profile"
            className="rounded-[1.5rem] sm:rounded-[2rem] h-[220px] sm:h-[280px] lg:h-[380px] w-auto max-w-full object-cover border border-white/10"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="flex flex-col items-center lg:items-start justify-center gap-4 sm:gap-6 text-center lg:text-left">
          <p className="leading-7 sm:leading-8 text-sm sm:text-base md:text-lg font-bodyFont text-lightText">
            I am a highly motivated Information Technology graduate with a
            strong passion for exploring and mastering new technologies. As a
            self-driven developer, I am committed to building innovative
            solutions, optimizing user experiences, and continuously improving
            my skills in web development. With hands-on experience in modern web
            technologies and a results-driven mindset, I approach every task
            with a responsible, solutions-oriented approach. I am eager to apply
            my technical expertise and problem-solving abilities in a full-time
            developer role, contributing to impactful projects while further
            advancing my career in software development.
          </p>
          <h2 className="text-designColor font-titleFont font-semibold tracking-wide text-sm sm:text-base">
            Tech Explorer · Innovator · Passionate Developer
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Features;
