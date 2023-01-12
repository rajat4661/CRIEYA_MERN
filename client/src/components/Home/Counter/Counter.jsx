import React from 'react'
import "./Counter.css"
import box4 from "../../../assets/images/box-4.png"
import box3 from "../../../assets/images/box-3.png"
import box2 from "../../../assets/images/box-2.png"
import box1 from "../../../assets/images/box-1.png"


const Counter = () => {
  return (
    <>
     <div id="counter">
      <div className="counter-row-1">

         <div className="counter-box box-1">
            <img src={box1}alt="" />
            <h1>74<sup>+</sup></h1>
            <h3>Technology
Commercialization</h3>

         </div>
         <div className="counter-box box-2">
            <img src={box2}alt="" />
            <h1>25<sup>+</sup></h1>
            <h3>Projects  Incubated</h3>
         </div>

      </div>

          

      <div className="counter-row-2">

           <div className="counter-box box-3">
           <img src={box3}alt="" />  
           <h3>Projects Funded</h3>
           <h1>1Cr<sup>+</sup></h1>
          
           </div>
           <div className="counter-box box-4">
            <img src={box4}alt="" />
            <h3>Mentors</h3>
           <h1>15<sup>+</sup></h1>
           </div>

      </div>
           

     </div>
    </>
  )
}

export default Counter