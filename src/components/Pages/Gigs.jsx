import React from 'react'
import PagesHeading from '../PagesHeading'

function Gigs() {
     const gigHeading = {
  title : "Our Gigs",
  description : " Comprehensive digital solutions tailored to your unique needs. Our expert team delivers exceptional results across web, mobile, and design."
}
  return (
    <div>
        <PagesHeading title={gigHeading.title} description={gigHeading.description}/>
    </div>
  )
}

export default Gigs