import React from 'react'
import "./CrieyaIntro.css"
import bulbwithbrain from "../../../assets/images/Mit_crieya-bulb.png"

const CrieyaIntro = () => {
  return (
    <>
    <div className="intro">
        
        <img src={bulbwithbrain} alt="" />
        <div className="about-crieya">
            <h1>MIT C.R.I.E.Y.A</h1>
            <h3>Innovations at MIT ADT has been trying to address the
problems, where industry and humanity most needs to solve
by applying scientific advancements and technology
frontiers, including sustainable energy, urban resiliency,
fresh water, food for all etc. By helping CRIEYA innovators
connect with mentors, collaborators, networks and funding.
We help them translate new science, technology and design
into transformative innovation.
CRIEYA is at the centre of the most vibrant hubs of innovation
and entrepreneurship at MIT ADT University. To make our
community most stimulating and supportive academic
environment for innovation, we offer classes, mentorship,
guidance, and resources tailored for student, faculty, and
alumni innovators and entrepreneurs.</h3>
        </div>
    </div>
    </>
  )
}

export default CrieyaIntro