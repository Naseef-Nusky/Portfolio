import React from "react";
import Title from "../layouts/Title";
import {
  HiOutlineClipboardList,
  HiOutlineLightBulb,
  HiOutlineCode,
  HiOutlineGlobeAlt,
  HiOutlineSearchCircle,
  HiOutlineChartBar,
} from "react-icons/hi";

const googleColors = ["#4285F4", "#EA4335", "#FBBC05", "#4285F4", "#34A853", "#EA4335"];

const GoogleWord = ({ className = "" }) => (
  <span className={`inline font-semibold ${className}`} aria-label="Google">
    {"Google".split("").map((letter, i) => (
      <span key={`${letter}-${i}`} style={{ color: googleColors[i] }}>
        {letter}
      </span>
    ))}
  </span>
);

const processSteps = [
  {
    id: 1,
    icon: <HiOutlineClipboardList />,
    title: "Requirements Gathering",
    des: "I start by understanding your business goals, target audience, and website needs. Together we define pages, features, and what success looks like for your project.",
  },
  {
    id: 2,
    icon: <HiOutlineLightBulb />,
    title: "Planning & Design",
    des: "I create a clear project plan, sitemap, and UI direction so the website structure, content flow, and user experience are ready before development begins.",
  },
  {
    id: 3,
    icon: <HiOutlineCode />,
    title: "Development",
    des: "I build a fast, mobile responsive, and modern website with clean code. Your site looks great and works smoothly on phones, tablets, and desktops. From the homepage to forms and admin needs, everything is developed to match your requirements.",
  },
  {
    id: 4,
    icon: <HiOutlineGlobeAlt />,
    title: "Domain & Hosting",
    des: "I help you choose and set up a domain name, connect hosting, configure SSL, and launch your website live so visitors can access it securely worldwide.",
  },
  {
    id: 5,
    icon: <HiOutlineSearchCircle />,
    title: (
      <>
        <GoogleWord /> Search & SEO
      </>
    ),
    des: (
      <>
        I optimize your website for <GoogleWord /> Search with SEO best
        practices—titles, meta tags, sitemap, speed, and content structure—so
        people can find your business online.
      </>
    ),
  },
  {
    id: 6,
    icon: <HiOutlineChartBar />,
    title: (
      <>
        <GoogleWord /> Analytics & Traffic Growth
      </>
    ),
    des: (
      <>
        I set up <GoogleWord /> Analytics to track visitors, page views, and user
        behavior. With real data, we can improve the site and grow traffic from{" "}
        <GoogleWord /> Search over time.
      </>
    ),
  },
];

const Services = () => {
  return (
    <section id="services" className="w-full section-pad section-line">
      <div className="flex justify-center items-center text-center">
        <Title title="From idea to live website" des="Web Development Process" />
      </div>

      <p className="max-w-3xl mx-auto text-center text-lightText text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-12 md:mb-14 -mt-2 sm:-mt-4 px-1">
        I take your website project from the first conversation to a live,
        mobile responsive, searchable site—covering planning, development,
        domain, hosting, <GoogleWord /> Search visibility, and analytics so your
        traffic can grow.
      </p>

      <div className="grid grid-cols-1 mdl:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 xl:gap-6">
        {processSteps.map((step) => (
          <div
            key={step.id}
            className="surface-card p-4 sm:p-6 group hover:border-designColor/30 transition-colors duration-200"
          >
            <div className="flex items-center justify-between mb-4 sm:mb-5">
              <span className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-designColor/10 border border-designColor/25 text-designColor text-lg sm:text-xl">
                {step.icon}
              </span>
              <span className="font-titleFont text-xs sm:text-sm font-semibold text-gray-500 group-hover:text-designColor duration-200">
                Step {String(step.id).padStart(2, "0")}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-titleFont font-semibold text-white mb-2 sm:mb-3">
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed text-lightText">{step.des}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
