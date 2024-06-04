import React, { useState } from "react";
import styles from "./home.module.css"
import {useRef, useEffect} from 'react';
// import Rebeca from "../../components/rebeca/rebeca";
import Resume from "../../component/resume/resume";
import AnimationPackman from "../../animaciones/packman/packman";
import Interactive__Background from "../../component/interactive-background/interactiveBackground";
import Frontend__Development from "../../component/frontend-devalopment/fronted-devalopment";
import Rebeca from "../../component/rebeca/rebeca";
import Header from "../../component/header/header";



function Home() {

  return (
      <div className={styles.maincontainer}>   

      <Rebeca/>
        
      
    
       
      </div>
  );
}

 
export default Home;