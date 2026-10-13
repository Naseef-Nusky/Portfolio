import React from "react";
import { BsGithub } from "react-icons/bs";

const ProjectsCard = ({ title, des, src }) => {
  return (
    <div className="w-full p-3 sm:p-4 xl:p-6 h-auto surface-card group hover:border-designColor/30 transition-colors duration-200">
      <div className="w-full overflow-hidden rounded-xl">
        <img
          className="w-full h-44 sm:h-52 md:h-56 object-cover md:group-hover:scale-105 md:duration-500 cursor-pointer"
          src={src}
          alt={title}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="w-full mt-4 sm:mt-5 flex flex-col gap-3 sm:gap-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-sm sm:text-base text-white font-titleFont font-semibold leading-snug group-hover:text-designColor duration-200">
            {title}
          </h3>
          <a
            href="https://github.com/Naseef-Nusky"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-lg w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 inline-flex justify-center items-center text-gray-400 hover:text-designColor hover:border-designColor/40 duration-200 cursor-pointer"
            aria-label={`${title} on GitHub`}
          >
            <BsGithub />
          </a>
        </div>
        <p className="text-sm tracking-wide text-lightText leading-relaxed">
          {des}
        </p>
      </div>
    </div>
  );
};

export default ProjectsCard;
