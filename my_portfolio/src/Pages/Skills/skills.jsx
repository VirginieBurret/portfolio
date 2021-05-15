import React from 'react'
import './skills.scss'
function skills() {
    return (
        <div id="skills" className="skills">
          <h1 className="maintitle">SKILLS</h1>

            <div className="tech">
              <div className="front">
             <h2 className="subtitle">FRONT</h2>
                  <img className="icon" src={`${process.env.PUBLIC_URL}/programming_icons/trio.png`} alt=""/>
                  <img className="icon" src={`${process.env.PUBLIC_URL}/programming_icons/react.png`} alt=""/>
                  <img className="icon" src={`${process.env.PUBLIC_URL}/programming_icons/native.png`} alt=""/>
                  <img className="icon" src={`${process.env.PUBLIC_URL}/programming_icons/redux.png`} alt=""/>
                  <img className="icon" src={`${process.env.PUBLIC_URL}/programming_icons/bootstrap.png`} alt=""/>
                  <img className="icon" src={`${process.env.PUBLIC_URL}/programming_icons/sass.png`} alt=""/>
                  <img className="icon" src={`${process.env.PUBLIC_URL}/programming_icons/antdesign.png`} alt=""/>
                  <img className="icon" src={`${process.env.PUBLIC_URL}/programming_icons/material.png`} alt=""/>
                  <img className="icon" src={`${process.env.PUBLIC_URL}/programming_icons/vuejs.png`} alt=""/>
           </div>

           <div className="back">
           <h2 className="subtitle" >BACK</h2>
                <img className="icon" src={`${process.env.PUBLIC_URL}/programming_icons/node.png`} alt=""/>
                <img className="icon" src={`${process.env.PUBLIC_URL}/programming_icons/sequelize.png`} alt=""/>
                <img className="icon" src={`${process.env.PUBLIC_URL}/programming_icons/mysql.png`} alt=""/>
                <img className="icon" src={`${process.env.PUBLIC_URL}/programming_icons/postgre.png`} alt=""/>
                <img className="icon" src={`${process.env.PUBLIC_URL}/programming_icons/firebase.png`} alt=""/>
           </div>

           <div className="others">
           <h2 className="subtitle">AUTRES</h2>
                <img className="icon" src={`${process.env.PUBLIC_URL}/programming_icons/docker.png`} alt=""/>
                <img className="icon" src={`${process.env.PUBLIC_URL}/programming_icons/typescript.png`} alt=""/>
                <img className="icon" src={`${process.env.PUBLIC_URL}/programming_icons/github.png`} alt=""/>
                <img className="icon" src={`${process.env.PUBLIC_URL}/programming_icons/gitlab.png`} alt=""/>
                <img className="icon" src={`${process.env.PUBLIC_URL}/programming_icons/trello.png`} alt=""/>
                <img className="icon" src={`${process.env.PUBLIC_URL}/programming_icons/clickup.png`} alt=""/>
           </div>
        </div>

        <div className="textContent">
          <div className="paragraph">
          <p>My first javascript framework was React/Redux on which I am constantly improving, and I am currently training on VueJS. </p>
           <p>My next goal is angular.</p>
           <p>... Docker and Typescript in progress ...</p>
          </div>
           


          <div className="others-skills">
           <div className="soft">
             <h2 className="subtitle">SOFT SKILLS</h2>
             
                  
                  
                  <p>Adaptability</p>
                  <p>Empathy</p>
                  <p>Team Spirit</p>
                  <p>Curiosity</p>
                  <p>Creativity</p>
                
           </div>

           <div className="languages">
           <h2 className="subtitle" >LANGUAGES</h2>
          
                  
                 
                  <p>FRENCH (native)</p>
                  <p>ENGLISH (fluent)</p>
                  <p>SPANISH (school)</p>
                  <p>ITALIAN (school)</p>
                  
                
           </div>

           <div className="hobbies">
           <h2 className="subtitle">HOBBIES</h2>
          
                  <p>Sport : tennis, yoga</p>
                  <p>Activities : reading, music, DIY</p>
                  <p>Passions : cooking and pastries, astronomy and science, music</p>
                  <p>Others : video games, manga, cinema</p>
                 
                
           </div>
        </div>
       
        
              
        </div>
        
        </div>
    )
}

export default skills
