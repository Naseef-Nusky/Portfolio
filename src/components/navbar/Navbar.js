import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 12);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showMenu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showMenu]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-3 xs:px-4 sm:px-6 pt-2 sm:pt-4">
        <div
          className={`max-w-screen-xl mx-auto transition-colors duration-200 rounded-2xl border bg-bodyColor ${
            scrolled
              ? "border-white/10 shadow-shadowOne md:bg-bodyColor/95 md:backdrop-blur-md"
              : "border-white/[0.06]"
          }`}
        >
          <div className="h-14 sm:h-[4.25rem] px-3 sm:px-5 flex items-center justify-between font-titleFont">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-90}
              duration={400}
              className="cursor-pointer"
            >
              <span className="text-lg font-bold text-white tracking-tight hover:text-designColor duration-200">
                Naseef<span className="text-designColor">.</span>
              </span>
            </Link>

            <nav className="hidden mdl:flex items-center gap-1">
              {navLinksdata.map(({ _id, title, link }) => (
                <Link
                  key={_id}
                  activeClass="!text-bodyColor !bg-designColor"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={400}
                  className="px-3.5 py-2 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-white/[0.05] cursor-pointer duration-200"
                >
                  {title}
                </Link>
              ))}
            </nav>

            <div className="hidden mdl:flex items-center gap-2">
              <a
                href="https://wa.me/94712848215"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-10 px-4 rounded-xl bg-designColor text-bodyColor text-sm font-semibold hover:brightness-110 duration-200"
              >
                <FaWhatsapp className="text-base" />
                Lets Talk
              </a>
            </div>

            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setShowMenu(true)}
              className="mdl:hidden text-xl bg-white/[0.04] border border-white/10 w-10 h-10 inline-flex items-center justify-center rounded-xl text-designColor cursor-pointer"
            >
              <FiMenu />
            </button>
          </div>
        </div>
      </header>

      <div className="h-[4.75rem] sm:h-[5.75rem]" aria-hidden />

      {showMenu && (
        <div className="fixed inset-0 z-[60] mdl:hidden">
          <button
            type="button"
            aria-label="Close menu overlay"
            className="absolute inset-0 bg-black/70"
            onClick={() => setShowMenu(false)}
          />
          <div className="absolute top-0 right-0 h-full w-[min(100%,20rem)] bg-surface border-l border-white/10 p-5 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <img
                  className="w-10 h-10 rounded-xl object-cover border border-white/10"
                  src={logo}
                  alt="logo"
                  width={40}
                  height={40}
                  decoding="async"
                />
                <span className="text-white font-titleFont font-bold">
                  Naseef<span className="text-designColor">.</span>
                </span>
              </div>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setShowMenu(false)}
                className="w-10 h-10 rounded-xl border border-white/10 text-gray-400 inline-flex items-center justify-center"
              >
                <MdClose className="text-xl" />
              </button>
            </div>

            <ul className="flex flex-col gap-1">
              {navLinksdata.map((item) => (
                <li key={item._id}>
                  <Link
                    onClick={() => setShowMenu(false)}
                    activeClass="!text-designColor !bg-designColor/10"
                    to={item.link}
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={400}
                    className="block px-4 py-3 rounded-xl text-base font-medium text-gray-300 cursor-pointer"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-6 border-t border-white/[0.06]">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">
                Find me in
              </p>
              <div className="flex flex-nowrap items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/naseef-nusky/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bannerIcon"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://github.com/Naseef-Nusky"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bannerIcon"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://wa.me/94712848215"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bannerIcon"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
