import React, { useState } from "react";
import styles from "./rebeca.module.css"
import R__Animation from "../../animaciones/R-animation/R-animation";
import ParticlesBg from "../particlesBg/particlesBg";
import image from './../../imagenes/gift/programadora.gif'
import tenor from './../../imagenes/gift/tenor.gif'
import rosita from './../../imagenes/gift/rosita.gif'
import Oip from './../../imagenes/gift/OIP.jpg'
import cubo from './../../imagenes/gift/cubo.gif'
import tenors from './../../imagenes/gift/tenors (1).gif'
import gato from './../../imagenes/gift/gato.gif'
import pinguino from './../../imagenes/gift/pinguino.webp'
import cat from './../../imagenes/gift/cat.gif'
import triangle from './../../imagenes/gift/triangulo.gif'








export default  function Rebeca() {

  return (
      <div className={styles.maincontainer}>  

        <img
          src={triangle}
          alt="GIF"
          className={styles.video__container}
         />
      
      {/* <ParticlesBg/> */}
      <div className={styles.text__container}>
        <h2 className={styles.text}>Revolutionizing</h2>
        <h2 className={styles.text}>Every</h2>
        <h2 className={styles.text}>Byte,</h2>
        <h2 className={styles.text}>Engineering</h2>
        <h2 className={styles.text}>Creative</h2>
        <h2 className={styles.text}>Algorithms</h2>

      {/* <R__Animation/> */}
      </div>
    </div>
    
  );
}

 
