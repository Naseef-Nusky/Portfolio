import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Title from "../layouts/Title";
import { websitesData } from "../../data/websites";

const Websites = () => {
  return (
    <section id="websites" className="w-full section-pad section-line">
      <div className="flex justify-center items-center text-center">
        <Title title="Live work" des="Websites I Developed" />
      </div>

      <div className="grid grid-cols-1 mdl:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-3">
        {websitesData.map((site) => (
          <a
            key={site.url}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-3 px-3 sm:px-4 py-3 rounded-xl border border-white/10 bg-white/[0.02] hover:border-designColor/40 hover:text-designColor transition-colors duration-200 min-w-0"
          >
            <span className="text-xs sm:text-sm text-white truncate">
              {site.url.replace(/^https?:\/\//, "")}
            </span>
            <FaExternalLinkAlt className="shrink-0 text-xs text-gray-500" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Websites;
