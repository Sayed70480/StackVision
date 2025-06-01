import React from 'react';

function Heading({ heading }) {
  return (
    <div className="my-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center px-4">
      {/* Left Line */}
      <div className="h-1 w-20 sm:w-28 md:w-36 bg-teal-500 rounded-full" />

      {/* Heading Text */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0A2540] uppercase tracking-widest font-sans">
        {heading}
      </h2>

      {/* Right Line */}
      <div className="h-1 w-20 sm:w-28 md:w-36 bg-teal-500 rounded-full" />
    </div>
  );
}

export default Heading;
