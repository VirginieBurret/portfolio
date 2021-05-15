import React, {useState} from 'react'
import './home.scss';
import TypeWriterEffect from 'react-typewriter-effect';

function Home () {

    

    
    return (
        
             <div id="home" className='home'>
               
                
                <div className="home_content">
                   
                    <div className="text">
                    <p className="above">Hello, I am</p>
                    <p className="big">Virginie Burret</p>
                    <p className="job">Fullstack Developper</p> 

                    
                    <TypeWriterEffect
        textStyle={{
          
          color: 'white',
          fontWeight: 500,
          fontSize: '1.5em',
          textAlign: 'center',
          fontFamily: 'computer'
        }}
        startDelay={1500}
        cursorColor="#3F3D56"
        multiText={[
          'React/Redux, React native, VueJS, NodeJs/MongoDB',
          
          
        ]}
        multiTextDelay={1000}
        typeSpeed={100}
      />
                
                    </div>
                    
                    
                </div>
            </div>
       
    )
}

export default Home;
