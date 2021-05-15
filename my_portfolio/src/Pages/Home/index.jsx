import React from 'react'
import './home.scss';
function Home () {
    return (
        
             <div id="home" className='home'>
               
                <img className="background" src={`${process.env.PUBLIC_URL}/background.jpg`} alt=""/>
               
            </div>
       
    )
}

export default Home;
