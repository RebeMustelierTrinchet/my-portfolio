import React, { useState } from "react";
import styles from "./rebeca.module.css"
import R__Animation from "../../animaciones/R-animation/R-animation";
import ParticlesBg from "../particlesBg/particlesBg";





export default  function Rebeca() {

  return (
      <div className={styles.maincontainer}>  
      {/* <video loop autoPlay className={styles.video__container} controls>
        <source
                src="https://mdbootstrap.com/img/video/Sail-Away.mp4"
                type="video/mp4"
                />
      </video> */}
      <ParticlesBg/>
      <h2 className={styles.text}>Revolutionizing</h2>
      <h2 className={styles.text}>Every</h2>
      <h2 className={styles.text}>Byte,</h2>
      <h2 className={styles.text}>Engineering</h2>
      <h2 className={styles.text}>Creative</h2>
      <h2 className={styles.text}>Algorithms</h2>

      <R__Animation/>
    </div>
    
  );
}

 
