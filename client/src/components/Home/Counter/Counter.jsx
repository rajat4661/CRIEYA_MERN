import React , {useState} from 'react'
import "./Counter.css"
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
import box4 from "../../../assets/images/box-4.png"
import box3 from "../../../assets/images/box-3.png"
import box2 from "../../../assets/images/box-2.png"
import box1 from "../../../assets/images/box-1.png"


const Counter = () => {

   const [box_1_end, set_box_1_end] = useState("0")
   const [box_2_end, set_box_2_end] = useState("0")
   const [box_3_end, set_box_3_end] = useState("0")
   const [box_4_end, set_box_4_end] = useState("0")



   function onChange (isVisible) {
      if(isVisible)
      {
       set_box_1_end("74")
       set_box_2_end("25")
       set_box_3_end("1")
       set_box_4_end("15")


      };
      
    }
    
  return (
    <>
     <div id="counter">
      <div className="counter-row-1">

         <div className="counter-box box-1">
            <img src={box1}alt="" />
            <VisibilitySensor onChange={onChange}>
            <h1 data-number='74'>
               <CountUp
                start={1}
                end={box_1_end}
                duration={1.8}
               
               />
                   <sup>+</sup>
                            
               
            </h1></VisibilitySensor>
            <h3>Technology Commercialization</h3>

         </div>
         <div className="counter-box box-2">
            <img src={box2}alt="" />
            <h1>
            <CountUp
                start={1}
                end={box_2_end}
                duration={1.8}
               
               /><sup>+</sup></h1>
            <h3>Projects  Incubated</h3>
         </div>

      </div>

          

      <div className="counter-row-2">

           <div className="counter-box box-3">
           <img src={box3}alt="" />  
           <h3 >Projects Funded</h3>
           <h1> <CountUp
                start={0}
                end={box_3_end}
                
                duration={3.7}
               
               />
             Cr<sup>+</sup></h1>
          
           </div>
           <div className="counter-box box-4">
            <img src={box4}alt="" />
            <h3>Mentors</h3>
           <h1>
           <CountUp
                start={1}
                end={box_4_end}
                duration={1.8}
               
               /><sup>+</sup></h1>
           </div>

      </div>
           

     </div>
    </>
  )
}

export default Counter