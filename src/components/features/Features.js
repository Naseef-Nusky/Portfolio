import React from "react";
import Title from "../layouts/Title";
// import Card from "./Card";
// import { featuresData } from "../../data/data";
// import { bannerImg } from "../../assets";
import { logo } from "../../assets";
const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black flex flex-col items-center justify-center"
    >
      <Title title="" des="About Me" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-20">
        {/* {featuresData.map((item) => (
          <Card item={item} key={item.id} />
        ))} */}
        <div className="flex flex-col items-center justify-center">
        <img
          src={logo}
          alt="profile2"
          className="rounded-full h-[300px] lg:h-[400px] w-auto object-cover"
        />
        </div>
    <div className="flex flex-col items-center justify-center">
      <p class="text-center leading-8 text-base font-bodyFont ">
      I am a highly motivated undergraduate in Information Technology with a strong passion for exploring and mastering new technologies. 
      As a self-driven developer, I am committed to building innovative solutions, optimizing user experiences, and continuously improving my skills in web development.
      With hands-on experience in modern web technologies and a results-driven mindset, I approach every task with a responsible, solutions-oriented approach. 
      I am eager to apply my technical expertise and problem-solving abilities in a full-time developer role, contributing to impactful projects while further advancing my career in software development.
      </p>
      <h2 className="pt-10">Tech Explorer | Innovator | Passionate Developer</h2>
    </div>   
      </div>
    </section>
  );
};

export default Features;
