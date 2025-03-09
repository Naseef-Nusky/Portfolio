import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
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
            title=" BSc (Hons) Information Technology"
            subTitle="University of Moratuwa (2020 - PRESENT)"
            // result="3.90/4"
            des="Pursuing a degree in Information Technology, focusing on software development, programming, and web technologies. 
            Gaining practical skills through projects and coursework in development and system design."
          />
          <ResumeCard
            title="Ordinary & Advanced Level Education"
            subTitle="B/ Welimada Muslim National School (2005-2019)"
            // result="4.75/5"
            des="Completed both Ordinary Level (O/L) and Advanced Level (A/L) education at Welimada Muslim National School, gaining foundational academic knowledge and specialized subjects for higher education."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education