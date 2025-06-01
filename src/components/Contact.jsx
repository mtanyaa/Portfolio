import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CgMail } from "react-icons/cg";


const Contact = () => {
  return (
    <>
    <div className="container contact" id="Contact">
      <h1>CONTACT ME</h1>
      <div className="contact-icon"
      data-aos="zoom-in"
      data-aos-duration="1000">
        <a href="https://www.instagram.com/tanyamaheshwarii/" target="_blank" className="items"><FaInstagram className='icons' /></a>
        <a href="https://www.linkedin.com/feed/" target="_blank" className="items"><CiLinkedin className='icons'/></a>
        <a href="mailto:tanyamaheshwari28oct@gmail.com" target="_blank" className="items"><CgMail className='icons'/></a>
        
      </div>

    </div>
    </>
  )
}

export default Contact