import React from 'react'
import './contact.scss'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Contact() {
    return (
       <div id="contact" className="contact">
           <h1 className="contactTitle">CONTACT</h1>
           
           <div className="infos">
               <div className="content">
               <img className="contactIMG" src={`${process.env.PUBLIC_URL}/contact.png`} alt=""/>
               <p><span className="before">Email</span> : burret.vrgn@gmail.com</p>
               <p><span className="before">Phone</span>  : +33 07 85 66 94 61</p>
               <p><span className="before">Location</span>  : Toulouse, mobile into France and International</p>

               <div className="icons">
               <a target="_blank" className="externalLink" href="https://www.linkedin.com/in/virginie-burret-58b7341b1/" ><LinkedInIcon style={{ fontSize: 40 }}/></a>
               <a target="_blank" className="externalLink" href="https://github.com/VirginieBurret" ><GitHubIcon style={{ fontSize: 40 }}/></a>
               </div>
               </div>
              
           </div>
       </div>
    )
}

export default Contact
