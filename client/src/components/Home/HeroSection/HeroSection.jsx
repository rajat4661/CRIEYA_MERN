import React from "react";
import "./HeroSection.css";
import crieyawithmit from '../../../assets/images/crieya_with_mit.svg'



const HeroSection = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-left">
              <div className="hero-left-top">
                      <img src={crieyawithmit} alt="" />
              </div>
              <div className="hero-left-bottom">
              
                      
              </div>


        </div>

        <div className="hero-right">
          <div hero-right-container>
              <div className="crieya">CRiEYA</div>
              <div className="idea-box">
                <span>
                <p>Cracked a Problem ?</p>
                <p >Let it benefit the world</p>
                </span>

                <div className="submitidea">
                        Submit an Idea
                </div>
              </div>
              <div className="web-portal">Web Portal</div>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default HeroSection;
