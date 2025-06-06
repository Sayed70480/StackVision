import React from 'react'

import Aboutmesections from '../AboutmeComp/Aboutmesections'

function Aboutme() {
 
  return (
    <div>
     <div className="text-center min-h-[20rem] sm:min-h-[24rem] md:min-h-[28rem] lg:min-h-[32rem] px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center bg-teal-50 py-12 sm:py-16 lg:py-20">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight max-w-5xl">
        Meet <span className="text-teal-500">Syed Sikandar Shah</span>
      </h1>
      <div className="w-32 sm:w-40 md:w-48 lg:w-60 h-0.5 sm:h-1 bg-teal-500 mx-auto mb-6 sm:mb-8 rounded-full"></div>
      <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-4xl mx-auto px-2">
        Software Engineer | Full Stack Developer | Graphic Designer
      </h2>
    </div>
      <Aboutmesections/>
      
    </div>
  )
}

export default Aboutme