import React from "react";
import { FaLinkedinIn, FaDownload, FaGithub, FaWhatsapp } from "react-icons/fa";

const Media = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 xl:gap-12 justify-center lgl:justify-between items-center lgl:items-start pt-2 w-full max-w-md lgl:max-w-none">
      <div className="flex flex-col items-center lgl:items-start">
        <h2 className="text-xs uppercase tracking-[0.2em] font-titleFont text-gray-500 mb-3 sm:mb-4">
          My Resume
        </h2>
        <a
          href="/assets/resume.pdf"
          download
          className="inline-flex items-center gap-2 px-5 h-11 rounded-xl bg-designColor text-bodyColor font-semibold text-sm hover:brightness-110 transition duration-300"
        >
          <FaDownload />
          Download CV
        </a>
      </div>
      <div className="flex flex-col items-center lgl:items-start">
        <h2 className="text-xs uppercase tracking-[0.2em] font-titleFont text-gray-500 mb-3 sm:mb-4">
          Find me in
        </h2>
        <div className="flex flex-nowrap justify-center items-center gap-2.5 sm:gap-3">
          <a
            href="https://www.linkedin.com/in/naseef-nusky/"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/Naseef-Nusky"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://wa.me/94712848215"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Media;
