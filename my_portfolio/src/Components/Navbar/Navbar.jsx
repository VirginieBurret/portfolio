import React from "react";
import "./navbar.scss";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import {Search, Person, Chat, Notifications} from '@material-ui/icons';
import { Button, Popup } from 'semantic-ui-react'

const TopBar =() => {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                   <img className="lang" src={`${process.env.PUBLIC_URL}/english.png`} alt=""/>
                   <img className="lang" src={`${process.env.PUBLIC_URL}/french.png`} alt=""/>
                
            </div>
            
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarlink">Accueil</span>
                    <span className="topbarlink">A propos</span>
                    <span className="topbarlink">Compétences</span>
                    <span className="topbarlink">Expériences</span>
                    <span className="topbarlink">Projets</span>
                    <span className="topbarlink">Contact</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                      <LinkedInIcon />
                      
                    </div>

                    <div className="topbarIconItem">
                      <GitHubIcon />
                      
                    </div>

                    <div className="topbarIconItem">
                      <TwitterIcon />
                    
                    </div>
                    
                </div>
                
            </div>
           


        </div>
    )
}

export default TopBar;
