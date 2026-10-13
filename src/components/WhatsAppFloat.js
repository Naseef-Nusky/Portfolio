import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/94712848215"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[70]"
    >
      <span className="inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#25D366] text-white text-xl sm:text-2xl shadow-lg shadow-black/30 hover:brightness-110 active:scale-95 transition duration-200">
        <FaWhatsapp />
      </span>
    </a>
  );
};

export default WhatsAppFloat;
