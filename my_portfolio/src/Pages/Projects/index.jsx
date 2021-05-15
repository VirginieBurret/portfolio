import React from 'react'
import './projects.scss';
function Projects() {
  return (
    <div id="projects" className="projects">
      <h1 className="projectsTitle">PROJECTS</h1>

      <div className="wrapper">

        <div className="card">
          <h2 className="itemTitle">E-commerce website</h2>
          <p className="status">On going...</p>
          <img className="icon" src={`${process.env.PUBLIC_URL}/projects/savons.png`} alt=""/>
          <p className="techno">Tech : React/Firebase/Stripe</p>

          <div className="legend">
            <span style={{cursor:"not-allowed"}}>WATCH DEMO(coming soon)</span>
            <a target="_blank" className="externalLink" href="https://github.com/VirginieBurret/e-commerce" ><span>GITHUB REPO</span></a> 
          </div>
        </div>

        <div className="card">
           <h2 className="itemTitle">Mobile App</h2>
           <p className="status">On going...</p>
           <img className="icon" src={`${process.env.PUBLIC_URL}/projects/skyinlab.png`} alt=""/>
           <p className="techno">Tech : React native/NodeJS/MongoDB</p>

           <div className="legend">
            <span style={{cursor:"not-allowed"}}>WATCH DEMO(coming soon)</span>
            <span style={{cursor:"not-allowed"}}>GITHUB REPO</span>
          </div>
        </div>

        <div className="card">
        <h2 className="itemTitle">Diving club website</h2>
        <p className="status">On going...</p>
           <img className="icon" src={`${process.env.PUBLIC_URL}/projects/sehvo.png`} alt=""/>
           <p className="techno">Tech : React native/NodeJS/MongoDB</p>
           <div className="legend">
           <span style={{cursor:"not-allowed"}}>WATCH DEMO(coming soon)</span>
            <a target="_blank" className="externalLink" href="https://github.com/VirginieBurret/diving-Club-Website" ><span>GITHUB REPO</span></a> 
          </div>
          
        </div>


      </div>
    </div>
  )
}

export default Projects


