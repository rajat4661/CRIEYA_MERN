import React from 'react'
import footercrieya from '../../../assets/images/footer-crieya.svg'

import "./Footer.css"

const Footer = () => {
  return (
    <>
    
    <div id='Footer'>
         <div className="footer-left">
            <div className='footer-crieya'>
                    <img src={footercrieya} alt="" />
            </div>
            <div className='footer-copyright'>
                <h2>© 2022 All rights reserved </h2>
                
            </div>
                    
         </div>

         <div className="footer-right">
            <div className="footer-quick-links">
                <div className="links">
                
                <h4 className='links-heading'>Security & Brand</h4>
                            <ul>
                                <li><a href="#">Report Copyright Issue</a></li>
                                <li><a href="#">Report Security Issue</a></li>
                                <li><a href="#">Trademark Notice </a></li>
                             
                            </ul>
                </div>
                
                
                <div className="links">
                <h4 className='links-heading'>Website</h4>
                            <ul>
                                <li><a href="#">Accessibility</a></li>
                                <li><a href="#">Digital Accessibility</a></li>
                                <li><a href="#">Privacy Statement </a></li>
                             
                            </ul>
                </div>
               
                
                <div className="links">
                <h4 className='links-heading'>Get In Touch</h4>
                            <ul>
                                <li><a href="#">Contact Crieya</a></li>
                                <li><a href="#">Maps & Directions</a></li>
                                <li><a href="#">Jobs</a></li>
                                
                            </ul>
                </div>
                
            </div>

            <div className="rounded-social-buttons footer-socials">
                    <a className="social-button facebook" href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                    <a className="social-button twitter" href="https://www.twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a>
                    <a className="social-button linkedin" href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin"></i></a>
                    <a className="social-button youtube" href="https://www.youtube.com/" target="_blank"><i class="fab fa-youtube"></i></a>
                    <a className="social-button instagram" href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
            </div>
         </div>







    </div>
    </>
    
  )
}

export default Footer