import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import {logo} from "../../assets/index"
import { navLinksdata } from '../../constants';
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black flex flex-col gap-8 md:flex-row items-center justify-between">
      <div className="w-full h-full flex flex-col gap-8 items-center">
        <img className="w-32 rounded-full" src={logo} alt="logo" />
        <div className="flex flex-wrap gap-4">
        <a href="https://www.linkedin.com/in/naseef-nusky/" target="_blank" rel="noopener noreferrer">
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </a>
        <a href="https://github.com/Naseef-Nusky" target="_blank" rel="noopener noreferrer">
          <span className="bannerIcon">
            <FaGithub />
          </span>
        </a>
        <a href="https://www.facebook.com/share/157KbRPkX3/" target="_blank" rel="noopener noreferrer">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
        </a>
        <a href="https://x.com/naseef_nuzkey?t=JLpobITQgukwXc_SsydPdA&s=09" target="_blank" rel="noopener noreferrer">
          <span className="bannerIcon">
            <FaTwitter />
          </span>
        </a>
        <a href="https://www.instagram.com/naseefnus_key?igsh=MW4zZTNrZGhwM2locA==" target="_blank" rel="noopener noreferrer">
          <span className="bannerIcon">
            <FaInstagram />
          </span>
        </a>
      </div>
      </div>
      <div className="w-full h-full flex flex-col items-center">
        <h3 className="text-xl uppercase text-designColor tracking-wider pb-3">
          Quick Link
        </h3>
        <ul className="flex flex-col gap-3 font-titleFont font-medium items-start">
  {navLinksdata.map(({ _id, title, link }) => (
    <li key={_id}>
      <Link
        activeClass="active"
        to={link}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="text-gray-400 hover:text-designColor transition duration-300 cursor-pointer"
      >
        {title}
      </Link>
    </li>
  ))}
</ul>

      </div>
      {/* <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          RESOURCES
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Authentication
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              System Status
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Terms of Service
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Pricing
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Over Right
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          DEVELOPERS
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Documentation
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Authentication
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              API Reference
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Support
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Open Source
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div> */}
    </div>
  );
}

export default Footer