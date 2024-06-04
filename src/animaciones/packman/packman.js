import React, { useState } from "react";
import styles from "./packman.module.css"
import Packman1 from './../../imagenes/animaciones/packman/Screenshot_2024-04-17_232129-removebg-preview.png'
import Packman2 from './../../imagenes/animaciones/packman/Screenshot_2024-04-17_232058-removebg-preview.png'
import windows from './../../imagenes/animaciones/packman/png-clipart-logo-windows-xp-black-white-microsoft-windows-ultimate-logo-angle-white-removebg-preview.png'
import food from './../../imagenes/animaciones/packman/Untitled.png'




export default  function AnimationPackman() {

  const containers = [];

  for (let i = 0; i < 7; i++) {
    containers.push(
      <div key={i} className={styles.sub_food_container}>
        <img src={food} className={styles.food} alt="Food" />
        <img src={food} className={styles.food} alt="Food" />
        <img src={windows} className={styles.berry} alt="Windows" />
      </div>
    );
  }

  return (
      <div className={styles.maincontainer}>  
        <div className={styles.Packman_conteiner}>  
            <img src={Packman2} className={styles.Packman2}/>
            <div className={styles.packman2_conteiner}>         
            <img src={Packman1} className={styles.Packman1}/>
            </div>  
        </div>
        <div className={styles.food_container}> {containers}</div>
    </div>
  );
}

 
