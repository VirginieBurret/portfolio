import React from "react";
import "./navbar.scss";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import {Search, Person, Chat, Notifications} from '@material-ui/icons';
import { Button, Popup } from 'semantic-ui-react';
import { HashLink as Link } from 'react-router-hash-link';

const TopBar =() => {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                   <img className="lang" src={`${process.env.PUBLIC_URL}/english.png`} alt=""/>
                   <img className="lang" src={`${process.env.PUBLIC_URL}/french.png`} alt=""/>
                
            </div>
            
            <div className="topbarRight">
                <div className="topbarLinks">
                
                   <Link style={{textDecoration:"none"}}to="/pathLink#home"> <span className="topbarlink">Home</span></Link>
                   <Link style={{textDecoration:"none"}}to="/pathLink#about"> <span className="topbarlink">About</span></Link>
                   <Link style={{textDecoration:"none"}}to="/pathLink#skills"> <span className="topbarlink">Skills</span></Link>
                    <Link style={{textDecoration:"none"}}to="/pathLink#projects"> <span className="topbarlink">Projects</span></Link>
                    <Link style={{textDecoration:"none"}}to="/pathLink#contact"> <span className="topbarlink">Contact</span></Link>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                    <a target="_blank" className="externalLink" href="https://github.com/VirginieBurret" ><GitHubIcon /></a>
                     
                    </div>

                    <div className="topbarIconItem">
                    <a target="_blank" className="externalLink" href="https://www.linkedin.com/in/virginie-burret-58b7341b1/" ><LinkedInIcon/></a>
                      
                      
                    </div>

                    
                    
                </div>
                
            </div>
           


        </div>
    )
}

export default TopBar;
