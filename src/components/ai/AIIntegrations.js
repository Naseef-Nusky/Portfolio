import React from "react";
import Title from "../layouts/Title";
import {
  HiOutlineChatAlt2,
  HiOutlineDocumentText,
  HiOutlineSearchCircle,
  HiOutlineMail,
  HiOutlineSupport,
  HiOutlineChip,
} from "react-icons/hi";

const aiItems = [
  {
    icon: <HiOutlineChatAlt2 />,
    title: "AI Chatbots",
    des: "Custom AI chatbots for websites to answer FAQs, capture leads, and support customers 24/7.",
  },
  {
    icon: <HiOutlineChip />,
    title: "OpenAI / ChatGPT API",
    des: "Integrate OpenAI and ChatGPT into your apps for smart content, assistants, and automation.",
  },
  {
    icon: <HiOutlineDocumentText />,
    title: "AI Content Tools",
    des: "Build tools that generate blogs, product descriptions, emails, and summaries with AI.",
  },
  {
    icon: <HiOutlineSearchCircle />,
    title: "AI Search & RAG",
    des: "Connect AI to your documents or knowledge base so users get accurate answers from your data.",
  },
  {
    icon: <HiOutlineMail />,
    title: "Smart Forms & Automation",
    des: "AI-powered form replies, lead scoring, and workflow automation connected to your website.",
  },
  {
    icon: <HiOutlineSupport />,
    title: "AI Customer Support",
    des: "Add AI assistants to help tickets, WhatsApp/web chat, and support dashboards.",
  },
];

const AIIntegrations = () => {
  return (
    <section id="ai" className="w-full section-pad section-line">
      <div className="flex justify-center items-center text-center">
        <Title title="Smart features for modern apps" des="AI Integrations" />
      </div>

      <p className="max-w-3xl mx-auto text-center text-lightText text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-12 md:mb-14 -mt-2 sm:-mt-4 px-1">
        I integrate AI into websites and web apps — chatbots, OpenAI APIs,
        content tools, smart search, and automation to make your product faster
        and smarter.
      </p>

      <div className="grid grid-cols-1 mdl:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 xl:gap-6">
        {aiItems.map((item) => (
          <div
            key={item.title}
            className="surface-card p-4 sm:p-6 group hover:border-designColor/30 transition-colors duration-200"
          >
            <span className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-designColor/10 border border-designColor/25 text-designColor text-lg sm:text-xl mb-4">
              {item.icon}
            </span>
            <h3 className="text-lg sm:text-xl font-titleFont font-semibold text-white mb-2 sm:mb-3">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-lightText">{item.des}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AIIntegrations;
