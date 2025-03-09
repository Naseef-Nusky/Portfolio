import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col"
    >
      {/* part one */}
      {/* <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
      </div> */}
      <div>
        <div className="mt-6 lgl:mt-14 w-full h-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
          title="Software Engineer - Part Time"
          subTitle="Purple Software Pvt Ltd (2023 - PRESENT)"
          des="Currently working as a Software Engineer at Purple Software Pvt Ltd, where I am responsible for developing and maintaining software solutions. 
                Collaborating with teams to design scalable systems, writing clean code, and contributing to the software lifecycle in an Agile environment."
        />

        <ResumeCard
          title="Software Engineer Intern"
          subTitle="Purple Software Pvt Ltd (2023-Feb - 2023-Aug)"
          des="Worked as a Software Engineer Intern at Purple Software Pvt Ltd, assisting in developing and testing software applications. 
                Gained hands-on experience with coding, debugging, and collaborating in an Agile team, while learning best practices in software development."
        />

        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
