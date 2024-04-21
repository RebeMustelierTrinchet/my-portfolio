import React, { useState } from "react";
import styles from "./home.module.css"
import {useRef, useEffect} from 'react';
// import Rebeca from "../../components/rebeca/rebeca";
import Resume from "../../component/resume/resume";
import AnimationPackman from "../../animaciones/packman/packman";



function Home() {

  return (
      <div className={styles.maincontainer}>   
        <Resume/>
        <AnimationPackman/>
    </div>
  );
}

 
export default Home;