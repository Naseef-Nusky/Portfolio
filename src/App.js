import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Services from "./components/services/Services";
import Websites from "./components/websites/Websites";
import WhatsAppFloat from "./components/WhatsAppFloat";
// import Testimonial from "./components/tesimonial/Testimonial";

function App() {
  return (
    <div className="relative w-full min-h-screen bg-bodyColor text-lightText overflow-x-hidden">
      {/* Light mesh only on desktop — fixed overlays hurt mobile FPS */}
      <div className="pointer-events-none absolute inset-0 hidden md:block bg-mesh opacity-80" />
      <div className="relative z-10 px-3 xs:px-4 sm:px-6">
        <div className="max-w-screen-xl mx-auto w-full">
          <Navbar />
          <Banner />
          <Features />
          <Services />
          <Websites />
          <Projects />
          <Resume />
          {/* <Testimonial /> */}
          <Contact />
          <Footer />
        </div>
      </div>
      <WhatsAppFloat />
    </div>
  );
}

export default App;
