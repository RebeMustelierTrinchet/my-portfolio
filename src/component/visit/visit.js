import React, { useState } from "react";
import styles from "./visit.module.css"
import img from './../../imagenes/projects/Untitled.png'
import { Button } from 'react-bootstrap';



export default function VisitComponent() {

  return (
      <div className={styles.maincontainer}>   
        <img className={styles.imagen} alt="my projects" src={img}/>
        <div className={styles.text__container}>
            <h1 className={styles.title}>Rebeca's work</h1>
            <p className={styles.text}> Are you looking for modern and functional digital experiences? Then you've come 
            to the right place! I invite you to delve into my projects, where I stand out for my ability to create customized 
            solutions tailored to a wide range of sectors. Each project reflects my dedication to delivering exceptional 
            quality and a user experience that exceeds expectations.</p>
            <p className={styles.text}>
            Using cutting-edge tools like React, I develop intuitive and easy-to-use applications that not only meet the highest 
            technological standards but also provide a smooth and enjoyable interaction for users. Would you like to explore how 
            I combine technological innovation with a user-centered approach? Join me on this journey of creativity, excellence, 
            and functionality!
            </p>
            <Button className={styles.btn} href="/portfolio">Portfolio</Button>

           </div>
    </div>
  );
}

 
