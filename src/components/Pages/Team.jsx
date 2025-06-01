import React from 'react'
import PagesHeading from '../PagesHeading'
import TeamPage from '../TeamSection/TeamPage'

function Team() {
   const AboutmeHeaidng = {
  title : "Meet Our Expert Team",
  description : " Talented professionals delivering seamless, high-performance web and mobile solutions. From custom applications to eye-catching brand visuals."
}
  return (
    <div>
      {/* <div className="text-center mb-12">
          <Users2 className="mx-auto text-primary w-10 h-10 mb-3" />
          
        </div> */}
        <PagesHeading title={AboutmeHeaidng.title} description={AboutmeHeaidng.description}/>
        <TeamPage/>
        
    </div>
  )
}

export default Team