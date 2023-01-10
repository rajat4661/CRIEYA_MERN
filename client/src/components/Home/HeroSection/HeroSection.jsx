import React from "react";
import "./HeroSection.css";
import crieyawithmit from '../../../assets/images/crieya_with_mit.svg'
import HeroBulb from "../../../assets/images/bulb.svg"
import BlurLayer from "../../../assets/images/hero_section_blur_layer.png"

const HeroSection = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-left">
              <div className="hero-left-top">
                      <img src={crieyawithmit} alt="" />
              </div>
              <div className="hero-left-bottom">
                <img src={HeroBulb} alt="" />                      
              </div>


        </div>

        <div className="hero-right">
          <div hero-right-container>
              <div className="crieya">CRiEYA</div>
              <div className="idea-box">
                <span>
                <p>Cracked a Problem ?</p>
                <p className="light">Let it benefit the world,</p>
                </span>

                <div className="submitidea">
                        Submit an Idea
                </div>
              </div>
              <div className="crieya">Web Portal</div>
          </div>          
        </div>
      </div>
        <div className="blur-effect">
          <img src={BlurLayer} alt="" />
        </div>
    </>
  );
};

export default HeroSection;
