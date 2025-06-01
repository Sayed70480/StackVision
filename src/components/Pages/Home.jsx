import React from "react";
import Hero from "../Hero Section/Hero";
import Card from "../ServiceSection/Card";
import Heading from "../Heading";

import TeamSec from "../TeamSection/TeamSec";

import TestimonialSection from "../TestimonialSection/TestimonialSection";
import BlogSection from "../BlogSection/BlogSection";
import ProjectStatsSection from "../ProjectSection/ProjectStatsSection";
import GoalsSection from "../GoalsSection/GoalsSection";

function Home() {
  const headingName = [
    "Services","Team"
  ]
  return (
    <div>
      <Hero />
       <Heading heading={headingName[1]} />
      <TeamSec/>
      <Heading heading={headingName[0]}/>
      <Card />
     <ProjectStatsSection/>
      <GoalsSection/>
      <TestimonialSection/>
      {/* <BlogSection/> */}
    </div>
  );
}

export default Home;
