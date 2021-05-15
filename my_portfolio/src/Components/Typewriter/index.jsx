import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;

  strong {
    font-size: 4rem;
  }
  div {
    color: black;

    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;

    .main {
      font-size: 3rem;
      
    }

    .sub {
      font-size: 29px;
      letter-spacing: 2px;
    }
  }
`;

const TitleMessage = () => (
  <MyTitleMessage>
    <div className="titleMessage">
      <div className="heading">
      <img style={{width:"20rem"}} src="http://www.edservices.fr/wp-content/uploads/2016/04/page-en-construction.png" alt=""/>
        <div className="main text-center mb-3">
          Hello, I am
          <br />
          
          <span >
            <strong>Virginie Burret</strong>
          </span>
        </div>
        <br />
        <div className="main text-center mb-3">
         
         Fullstack developper
        </div>
        <br />
        <br />
        <div className="sub">
          <Typewriter
            options={{
              strings: [ "React/Redux", "React Native", "VueJS", "NodeJS/MongoDB", "MySql/PostGreSQL"],
              autoStart: true,
              loop: true,
              delay: 50
            }}
          />
        </div>
      </div>
    </div>
  </MyTitleMessage>
);

export default TitleMessage;
