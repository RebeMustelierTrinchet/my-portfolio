import React, { useState, useRef, useEffect } from "react";
import styles from "./fronted-devalopment.module.css"
import image from "./../../imagenes/photo_2024-05-10_12-02-41-removebg-preview (1).png"


export default  function Frontend__Development() {

    const triangleCount = 100;

    // Array con números del 1 al 100
    const triangles = Array.from({ length: triangleCount }, (_, index) => index + 1);
  
    const getRandomOpacity = () => {
      return Math.random() * (1 - 0.5) + 0.5; // Genera un número aleatorio entre 0.5 y 1
    };

  return (
      
        <>

        <div className={styles.triangle__container}>
            <div className={styles.triangle__container__top}>
                {triangles.map((index) => (
                    <div key={index} className={styles.triangle__border__top} style={{ opacity: getRandomOpacity() }}></div>
                ))}
            </div>
            <div className={styles.triangle__container__bottom}>
                {triangles.map((index) => (
                    <div key={index} className={styles.triangle__border__bottom} style={{ opacity: getRandomOpacity() }}></div>
                ))}
            </div>

        </div>
        <div className={styles.maincontainer}> 
        <div className={styles.avatar__container}>
            <div class={styles.triangle}></div>
            <img src={image} className={styles.image} alt='avatar image'/>

        </div>
          <div className={styles.text__container}>
            <h1  className={styles.title}>What do I do as a frontend developer?</h1>
            <p  className={styles.text}>As a frontend developer, I specialize in creating the visual and functional part of web 
                applications. I use HTML, CSS, and JavaScript to build the user interface, ensuring it is attractive, easy to use, 
                and accessible to all users. My main focus is to turn designs into functional code and add basic interactivity, such 
                as simple animations and form validation. I am committed to learning and improving my skills to deliver better web
                experiences.</p>
             </div>
    </div>
    </>
  );
}

 
