import React from 'react'
import PagesHeading from '../PagesHeading'

function Contactus() {
    const contactHeading = {
  title : "Contact Us",
  description : " Comprehensive digital solutions tailored to your unique needs. Our expert team delivers exceptional results across web, mobile, and design."
}
  return (
    <div>
        <PagesHeading title={contactHeading.title} description={contactHeading.description}/>
    </div>
  )
}

export default Contactus