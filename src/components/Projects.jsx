import React from 'react'
import project from "../Data/projects.json";
const Projects = () => {
  return (
    <>
      <div className="container projects my-3" id='Projects'>
        <h1>PROJECTS</h1>
        <div className="row d-flex justify-content-center align-content-center">
          {
            project.map((data) => (
              <>
                <div key={data.id} className='my-5 col-sm-6 col-md-6 col-lg-4 col mx-6'>
                  <div className="card bg-dark text-light" style={{ width: "18rem",height:"40rem",border:'1px solid yellow',boxShadow:'5px 5px 10px 10px rgba(101,175,10,0.5)' }}
                  data-aos="flip-right"
                  data-aos-duration="1000">
                    <div className="img d-flex justify-content-center align-content-center p-3">
                    <img src={`/assets/${data.imgSrc}`} className="card-img-top" alt="err"  style={{width:'250px',height:'250px',border:'2px solid yellow',borderRadius:'10px'}}/>
                    </div>
                    
                    <div className="card-body text-center">
                      <h5 className="card-title">{data.title}</h5>
                      <p className="card-text">{data.description}</p>
                     
                    </div>
                  </div>


                </div>
              </>
            ))
          }


        </div>

      </div>
    </>
  )
}

export default Projects