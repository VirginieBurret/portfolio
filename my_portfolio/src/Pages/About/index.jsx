import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './about.scss'
const About = () => {
    return (
        
        <div className='about'>
            
            <div className="title">
            <p>Hello there!</p>
            <br></br>
                    <p className="main-text">
                   I am Virginie, a passionate fullstack developper.
                    I am curious, creative, and crazy about learning new technologies. 
                    Always in a good mood,
                    team spirit and communication are for me the two driving forces to provide quality work.</p>
                    
                    <br></br>
                    <br></br>
            <div className="buttons">
            
           
                    <a className="otherLink" target="_blank" href="https://drive.google.com/file/d/1gyQOph53q9e9x4zy0cu19dkS6M3yrQeQ/view?usp=sharing">
                    <button className="corner-button">
                        <span className="resume">RESUME</span>
                        </button>
                    </a>
              
              

                    <a className="otherLink" target="_blank" href="https://www.linkedin.com/in/virginie-burret-58b7341b1/">
                    <button className="corner-button">
                        <span className="resume">LINKEDIN</span>
                        </button>
                    </a>

                    <a className="otherLink" target="_blank" href="https://github.com/VirginieBurret?tab=repositories">
                    <button className="corner-button">
                        <span className="resume">GITHUB</span>
                        </button>
                    </a>


            </div>

            </div>
            
            <div className="pict">
            <div className="shape-outer heptagon">
	<div class="shape-inner heptagon"></div>
</div>
            </div>
           
           
        </div>
    );
};

export default About;