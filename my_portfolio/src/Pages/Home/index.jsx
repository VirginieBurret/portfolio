import React from 'react'
import './home.scss';
function Home () {
    return (
        
             <div className='home'>
               
                <img className="background" src={`${process.env.PUBLIC_URL}/background.jpg`} alt=""/>
               
            </div>
       
    )
}

export default Home;
