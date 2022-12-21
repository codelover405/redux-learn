import React, { useState } from 'react'
import Data from "./data/Sdata";
import AboutItem from "./AboutItem";


const About = () => {
  const [Sdata, setDatas] = useState(Data)
  return (
    <>
    <div className="container">
    <h2 className="pb-2 pt-3 border-bottom">Social Media</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        {
          Data.map((item)=>
            <div className="col-md-4">
            <AboutItem
              socialMedia={"Social Media"}
              title={item.title}
              Paragraph={item.Paragraph}
              btn={item.btn}
              icon={item.icon}
              color={item.iconColor}
              />
          </div>
          )
        }
        </div>
        </div>
    </>
  )
}

export default About
