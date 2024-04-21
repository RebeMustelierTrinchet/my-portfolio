import React, { useState } from "react";
import styles from "./resume.module.css"
import {useRef, useEffect} from 'react';
import Typewriter from 'typewriter-effect/dist/core';


export default  function Resume() {

  useEffect(() => {
    new Typewriter('#typewriter', {
      strings: ['Hello! I\'m Rebeca, an enthusiastic programming student with a passion for art and reading. I\'m exploring the vast world of software development as I dive into the exciting field of programming. My curiosity and love for mathematics drive me to learn and grow every day in this thrilling discipline. This is my portfolio, where I share my learning journey and ongoing projects. Join me on this exciting adventure!'],
      autoStart: true,
      cursor:''
    });
  }, );

  return (
      <div className={styles.maincontainer}>  
           <p id="typewriter" className={styles.text}></p>
    </div>
  );
}

 
