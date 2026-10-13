import React from "react";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full flex flex-col">
      <div>
        <div className="mt-6 lgl:mt-14 w-full h-full border-l border-l-white/10 flex flex-col gap-6 sm:gap-8 lgl:gap-10">
          <ResumeCard
            title=" BSc (Hons) Information Technology"
            subTitle="University of Moratuwa (2020 - 2024)"
            des="Completed a degree in Information Technology, focusing on software development, programming, and web technologies. 
            Gained practical skills through projects and coursework in development and system design."
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
