import React from 'react'
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Design Skill</h2>
        </div>
        <div className='className="mt-14 w-full flex flex-col gap-6'>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Photoshot</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">100%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Figma</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">90%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Adobe XD.</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">60%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Adobe Illustrator</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">70%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Design</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">95%</span>
              </motion.span>
            </span>
          </div>
        </div>
      </div> */}

    <div className="w-full">
      <div className="py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px] uppercase">
          Features
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">Development Skills</h2>
      </div>
      <div className="flex flex-col gap-6">
        {/* React Skill */}
        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">React</p>
          <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0">90%</span>
            </motion.span>
          </span>
        </div>
        
        {/* Angular Skill */}
        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">Angular</p>
          <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0">85%</span>
            </motion.span>
          </span>
        </div>
        
        {/* Node.js Skill */}
        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">Node.js</p>
          <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0">80%</span>
            </motion.span>
          </span>
        </div>
        {/* Spring Boot Skill */}
        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">Spring Boot</p>
          <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0">75%</span>
            </motion.span>
          </span>
        </div>
        {/* Express Skill */}
        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">Express</p>
          <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0">80%</span>
            </motion.span>
          </span>
        </div>
        
        {/* HTML Skill */}
        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">HTML5</p>
          <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0">95%</span>
            </motion.span>
          </span>
        </div>
        
        {/* CSS Skill */}
        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">CSS5</p>
          <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0">90%</span>
            </motion.span>
          </span>
        </div>
        
        {/* JavaScript Skill */}
        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">JavaScript</p>
          <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0">85%</span>
            </motion.span>
          </span>
        </div>
        
        {/* PHP Skill */}
        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">PHP</p>
          <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0">70%</span>
            </motion.span>
          </span>
        </div>
        
        {/* WordPress Skill */}
        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">WordPress</p>
          <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0">80%</span>
            </motion.span>
          </span>
        </div>
        
        {/* Astro.js Skill */}
        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">Astro.js</p>
          <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[65%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0">85%</span>
            </motion.span>
          </span>
        </div>
      </div>
    </div>

    </motion.div>
  );
}

export default Skills