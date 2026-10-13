import React from "react";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <div className="w-full flex flex-col">
      <div>
        <div className="mt-6 lgl:mt-14 w-full h-full border-l border-l-white/10 flex flex-col gap-6 sm:gap-8 lgl:gap-10">
          <ResumeCard
            title="Freelance Software Developer"
            subTitle="Self-employed (2025 - PRESENT)"
            des="Working as a freelance software developer, building web applications and delivering client projects end to end. 
                Focusing on modern full-stack development, clean code, and creating scalable solutions tailored to client needs."
          />

          <ResumeCard
            title="Software Engineer"
            subTitle="Purple Software Pvt Ltd (2023 - 2025)"
            des="Worked as a Software Engineer at Purple Software Pvt Ltd, developing and maintaining software solutions. 
                Collaborated with teams to design scalable systems, writing clean code, and contributing to the software lifecycle in an Agile environment."
          />

          <ResumeCard
            title="Software Engineer Intern"
            subTitle="Purple Software Pvt Ltd (2023-Feb - 2023-Aug)"
            des="Worked as a Software Engineer Intern at Purple Software Pvt Ltd, assisting in developing and testing software applications. 
                Gained hands-on experience with coding, debugging, and collaborating in an Agile team, while learning best practices in software development."
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
