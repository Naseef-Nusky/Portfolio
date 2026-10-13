import React from "react";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[38%] h-full surface-card p-4 sm:p-5 lgl:p-8 flex flex-col gap-6 sm:gap-8 justify-center">
      <img
        className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl mb-1 sm:mb-2"
        src={contactImg}
        alt="contactImg"
        loading="lazy"
        decoding="async"
      />
      <div className="flex flex-col gap-2.5 sm:gap-3">
        <h3 className="text-2xl sm:text-3xl font-bold text-white font-titleFont">
          Naseef Nusky
        </h3>
        <p className="text-base sm:text-lg font-normal text-designColor">
          Full-Stack Developer
        </p>
        <p className="text-sm sm:text-base text-gray-400 flex flex-wrap items-center gap-x-2 gap-y-1">
          Phone: <span className="text-white/90">+94 712848215</span>
        </p>
        <p className="text-sm sm:text-base text-gray-400 flex flex-wrap items-center gap-x-2 gap-y-1 break-all">
          Email:{" "}
          <a
            href="mailto:naseefnusky09@gmail.com"
            className="text-white/90 hover:text-designColor duration-300"
          >
            naseefnusky09@gmail.com
          </a>
        </p>
      </div>
      <div className="flex flex-col gap-3 sm:gap-4">
        <h2 className="text-xs uppercase tracking-[0.2em] font-titleFont text-gray-500 mb-1">
          Find me in
        </h2>
        <div className="flex flex-nowrap justify-center lgl:justify-start items-center gap-2.5 sm:gap-3">
          <a
            href="https://www.linkedin.com/in/naseef-nusky/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
          <a
            href="https://github.com/Naseef-Nusky"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </a>
          <a
            href="https://wa.me/94712848215"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <span className="bannerIcon">
              <FaWhatsapp />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
