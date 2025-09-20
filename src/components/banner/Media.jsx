import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaDownload, FaInstagram, FaGithub} from "react-icons/fa";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between pt-10">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">My Resume</h2>
          <div className="">
            <a 
              href="/assets/resume.pdf" 
              download 
              className="bannerIcon">
              <FaDownload />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
        <a href="https://www.linkedin.com/in/naseef-nusky/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/Naseef-Nusky" target="_blank" rel="noopener noreferrer" className="bannerIcon">
          <FaGithub />
        </a>
        <a href="https://www.facebook.com/share/157KbRPkX3/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
          <FaFacebookF />
        </a>
        <a href="https://x.com/naseef_nuzkey?t=JLpobITQgukwXc_SsydPdA&s=09" target="_blank" rel="noopener noreferrer" className="bannerIcon">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/naseefnus_key?igsh=MW4zZTNrZGhwM2locA==" target="_blank" rel="noopener noreferrer" className="bannerIcon">
          <FaInstagram />
        </a>
      </div>
        </div>
      </div>
  )
}

export default Media