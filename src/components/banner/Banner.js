import React from 'react'
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
const Banner = () => {
  return (
    <section
      id="home" className="w-full h-full lg:h-screen pt-10 pb-20 flex flex-col-reverse gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black">
      <LeftBanner />
     <RightBanner />
    </section>
  );
}

export default Banner