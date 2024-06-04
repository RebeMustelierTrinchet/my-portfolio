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

    <div className={styles.background}></div>

    <h1 className={styles.title}>
        <span>R</span><span>e</span><span>b</span><span>e</span><span>c</span><span>a</span><span>:</span>
        <span className={styles.separate}> </span>
        <span>I</span><span>n</span><span>n</span><span>o</span><span>v</span><span>a</span><span>t</span><span>i</span><span>v</span><span>e</span>
        <span  className={styles.separate}> </span>
        <span>F</span><span>r</span><span>o</span><span>n</span><span>t</span><span>e</span><span>n</span><span>d</span>
        <span  className={styles.separate}> </span>
        <span>D</span><span>e</span><span>v</span><span>e</span><span>l</span><span>o</span><span>p</span><span>e</span><span>r</span>
    </h1>
    <h2 className={styles.subtitle}>
        <span>T</span><span>r</span><span>a</span><span>n</span><span>s</span><span>f</span><span>o</span><span>r</span><span>m</span><span>i</span><span>n</span><span>g</span>
        <span  className={styles.separate}> </span>
        <span>i</span><span>d</span><span>e</span><span>a</span><span>s</span>
        <span  className={styles.separate}> </span>
        <span>i</span><span>n</span><span>t</span><span>o</span>
        <span  className={styles.separate}> </span>
        <span>e</span><span>x</span><span>c</span><span>e</span><span>p</span><span>t</span><span>i</span><span>o</span><span>n</span><span>a</span><span>l</span>
        <span  className={styles.separate}> </span>
        <span>d</span><span>i</span><span>g</span><span>i</span><span>t</span><span>a</span><span>l</span>
        <span  className={styles.separate}> </span>
        <span>e</span><span>x</span><span>p</span><span>e</span><span>r</span><span>i</span><span>e</span><span>n</span><span>c</span><span>e</span><span>s</span>
    </h2>
    </div>
    
  );
}

 
