import React from 'react'
import './projects.scss';
function Projects() {
  return (
    <div className="projects">
      <h1 className="projectsTitle">PROJECTS</h1>

      <div className="wrapper">

        <div className="card">
          <h2 className="itemTitle">E-commerce website</h2>
          <p className="status">On going...</p>
          <img className="icon" src={`${process.env.PUBLIC_URL}/projects/savons.png`} alt=""/>
          <p className="techno">Tech : React/Firebase/Stripe</p>

          <div className="legend">
            <span>WATCH DEMO</span>
            <span>GITHUB REPO</span>
          </div>
        </div>

        <div className="card">
           <h2 className="itemTitle">Mobile App</h2>
           <p className="status">On going...</p>
           <img className="icon" src={`${process.env.PUBLIC_URL}/projects/savons.png`} alt=""/>
           <p className="techno">Tech : React native/NodeJS</p>

           <div className="legend">
            <span>WATCH DEMO</span>
            <span>GITHUB REPO</span>
          </div>
        </div>

        <div className="card">
        <h2 className="itemTitle">Mobile App</h2>
        <p className="status">Deployed</p>
           <img className="icon" src={`${process.env.PUBLIC_URL}/projects/savons.png`} alt=""/>
           <p className="techno">Tech : React native/NodeJS</p>
           <div className="legend">
            <span>WATCH DEMO</span>
            <span>GITHUB REPO</span>
          </div>
          
        </div>


      </div>
    </div>
  )
}

export default Projects


