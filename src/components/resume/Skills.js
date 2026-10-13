import React from "react";

const skills = [
  { name: "React", level: "90%" },
  { name: "Next.js", level: "88%" },
  { name: "NestJS", level: "82%" },
  { name: "Astro.js", level: "85%" },
  { name: "OpenAI / ChatGPT API", level: "85%" },
  { name: "AI Chatbots", level: "82%" },
  { name: "AI Integrations", level: "80%" },
  { name: "Angular", level: "85%" },
  { name: "Node.js", level: "80%" },
  { name: "Express", level: "80%" },
  { name: "HTML5", level: "95%" },
  { name: "CSS", level: "90%" },
  { name: "JavaScript", level: "85%" },
  { name: "PHP", level: "70%" },
  { name: "WordPress", level: "80%" },
  { name: "Spring Boot", level: "75%" },
];

const Skills = () => {
  return (
    <div className="w-full min-w-0">
      <div className="py-8 sm:py-12 font-titleFont flex flex-col gap-3 sm:gap-4">
        <p className="text-xs sm:text-sm text-designColor tracking-[3px] sm:tracking-[4px] uppercase">
          Features
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Development Skills
        </h2>
      </div>
      <div className="flex flex-col gap-5 sm:gap-6">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm uppercase font-medium">{skill.name}</p>
              <span className="text-xs text-gray-500">{skill.level}</span>
            </div>
            <div className="w-full h-2 bgOpacity rounded-md overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-designColor/40 via-designColor to-sky-400 rounded-md"
                style={{ width: skill.level }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
