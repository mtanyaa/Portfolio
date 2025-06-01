import React from "react";
import experience from "../Data/experience.json";

const Experience = () => {
  return (
    <div className="container ex " id="Experience">
      <h1>EXPERIENCE</h1>

      {
        experience.map((data) => {
          return (
            <>
              <div key={data.id} className="ex-items text-center my-5"
              data-aos="zoom-in"
              data-aos-duration="1000">
                <div className="left">
                  <img src={`/assets/${data.imgSrc}`} alt="" />
                </div>
                <div className="right">
                  <h2>{data.role}</h2>
                  <h4>
                    <span style={{color:"yellowgreen"}}>  {data.organization}
                  {", "}
                  {data.startYear}{"-"}
                  {data.endYear}
                  </span>
                </h4>





              </div>
            </div >
        </>
  )
})}
    </div >
  );
};

export default Experience;
