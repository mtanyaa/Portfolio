import React, { useEffect, useRef } from 'react'
import pdf from "../pdf/resume.pdf";
import hero from "../Data/hero.json";
import Typed from "typed.js";


const Home = () => {
  const typedRef=useRef(null)
  useEffect(() => {
    const options={
    strings:["Welcome to my profile !","My name is Tanya Maheshwari","I'm a Full Stack Developer"],
    typeSpeed:50,
    backSpeed:50,
    loop:true
    }
    const typed=new Typed(typedRef.current,options)
  
    return () => {
      typed.destroy()
    }
  }, [])
  
  return (
    <>
    <div className="container home" id="Home">
      <div className="left" >
        <h1 ref={typedRef}>

        </h1>
        <a href={pdf} download="Tanya_Resume.pdf" className="btn btn-outline-warning my-3">Download Resume</a>
      </div>
      <div className="right">
        <div className="img" >
          <img src={`/assets/${hero.imgSrc}`} alt="img" />
        </div>


      </div>
    </div>
    </>
  )
}

export default Home

