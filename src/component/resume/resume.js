import React, { useState, useRef, useEffect } from "react";
import styles from "./resume.module.css"
import Interactive__Background from './../interactive-background/interactiveBackground'


export default  function Resume() {

  return (
      <div className={styles.maincontainer}> 
          <div className={styles.background}>
            <Interactive__Background />
          </div> 
          <div className={styles.text__container}>
          <h1 className={styles.title}>Who am I ?</h1>
          <p  className={styles.text}>Hello! I'm Rebeca, an enthusiastic programming student with a passion
             for art and reading. I'm exploring the vast world of software development 
             as I dive into the exciting field of programming. My curiosity and love 
             for mathematics drive me to learn and grow every day in this thrilling 
             discipline. This is my portfolio, where I share my learning journey and 
             ongoing projects. Join me on this exciting adventure!</p>
             </div>
    </div>
  );
}

 
