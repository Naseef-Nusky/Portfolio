import React from "react";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { navLinksdata } from "../../constants";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="w-full pt-10 sm:pt-14 md:pt-16 pb-4 sm:pb-6">
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/[0.06] bg-surface">
        <div className="relative px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 sm:gap-10 text-center lg:text-left items-center lg:items-end">
            <div className="max-w-md">
              <p className="text-white font-titleFont font-bold text-2xl sm:text-3xl tracking-tight mb-3">
                Naseef<span className="text-designColor">.</span>
              </p>
              <p className="text-lightText text-sm md:text-base leading-relaxed mb-6">
                Full-stack developer building clean, scalable web products.
                Open to freelance work and full-time roles.
              </p>
              <div className="flex flex-nowrap justify-center lg:justify-start items-center gap-2.5 sm:gap-3">
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

            <div className="flex flex-col mdl:flex-row gap-8 mdl:gap-14 items-center mdl:items-start w-full">
              <div className="w-full mdl:w-auto text-center mdl:text-left">
                <h3 className="text-xs uppercase tracking-[0.2em] text-designColor mb-4 font-titleFont">
                  Navigate
                </h3>
                <ul className="flex flex-col gap-2.5 items-center mdl:items-start">
                  {navLinksdata.map(({ _id, title, link }) => (
                    <li key={_id}>
                      <Link
                        to={link}
                        spy={true}
                        smooth={true}
                        offset={-90}
                        duration={400}
                        className="text-sm text-gray-400 hover:text-white transition duration-200 cursor-pointer"
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full mdl:w-auto text-center mdl:text-left">
                <h3 className="text-xs uppercase tracking-[0.2em] text-designColor mb-4 font-titleFont">
                  Contact
                </h3>
                <ul className="flex flex-col gap-2.5 text-sm text-gray-400 items-center mdl:items-start">
                  <li>
                    <a
                      href="mailto:naseefnusky09@gmail.com"
                      className="hover:text-white duration-200 break-all"
                    >
                      naseefnusky09@gmail.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/94712848215"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white duration-200"
                    >
                      +94 712848215
                    </a>
                  </li>
                  <li className="pt-2">
                    <Link
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-90}
                      duration={400}
                      className="inline-flex items-center h-10 px-4 rounded-xl bg-designColor text-bodyColor text-sm font-semibold cursor-pointer hover:brightness-110 duration-200"
                    >
                      Start a project
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/[0.06] flex items-center justify-center text-center overflow-x-auto">
            <p className="text-[11px] xs:text-xs sm:text-sm text-gray-500 tracking-wide whitespace-nowrap px-1">
              © {new Date().getFullYear()} Naseef Nusky. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
