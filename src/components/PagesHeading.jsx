import React from 'react'

function PagesHeading({title, description}) {
  return (
    <div className="text-center min-h-[20rem] sm:min-h-[24rem] md:min-h-[28rem] lg:min-h-[32rem] flex flex-col items-center justify-center bg-teal-50 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 relative inline-block max-w-full">
        <span className="text-gray-800 leading-tight block">{title}</span>
        <div className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-teal-500 to-teal-400"></div>
      </h2>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export default PagesHeading