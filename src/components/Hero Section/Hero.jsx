import React from 'react';
import { Button } from '../ui/button';

function Hero() {
  return (
    <div className="bg-teal-50 min-h-[20rem] sm:min-h-[24rem] md:min-h-[28rem] lg:min-h-[32rem] flex justify-center px-4 py-12">
      <div className="w-full max-w-7xl flex flex-col items-center justify-center text-center space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A2540] leading-tight">
          Transforming Ideas into <span className="text-teal-500">Digital Experiences</span>
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl text-teal-500 font-semibold">
          Full Stack Development & Creative Graphic Design Solutions
        </h2>

        <p className="text-[#778293] font-light text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
          We are a passionate team of developers and designers delivering seamless, high-performance web and mobile solutions. From custom web applications to eye-catching brand visuals, we blend technical expertise with artistic creativity to build digital experiences that engage, inspire, and elevate your brand across all platforms.
        </p>

        <Button className="text-base sm:text-lg md:text-xl h-15 font-light bg-teal-500 hover:bg-teal-600 mt-2">
          Explore My Work
        </Button>
      </div>
    </div>
  );
}

export default Hero;
