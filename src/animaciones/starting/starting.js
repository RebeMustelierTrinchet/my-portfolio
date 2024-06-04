import React, { useState } from "react";
import styles from "./starting.module.css"
import logo from './../../imagenes/logo/logo-cut.png'
import bear from './../../imagenes/logo/paloma-removebg-preview.png'
import color from './../../imagenes/logo/paloma-color.png'

import logo_border from './../../imagenes/logo/Untitled-1 - Copy (2).png'
import logo_border_movil from './../../imagenes/logo/Untitled-1 - Copy.png'
import logo_original from './../../imagenes/logo/logo-original-cut.png'
import logo_original_movil from './../../imagenes/logo/logo-original - Copy (2).png'






export default  function AnimationStarting() {

  return (
    // <div className={styles.maincontainer}>

    //    <div className={styles.logocontainer}>
    //    <img src={logo_border} className={styles.logo_border} />
    //       <div className={styles.imagen__color__logo} >
    //         <img src={logo_original} className={styles.logo_original} />
    //       </div>

    //    </div>

    // </div>

    <div className={styles.maincontainer}>

      <div className={styles.logocontainer}>
        <img src={logo_border} className={styles.logo_border} />
        <div className={styles.imagen__color__logo} ></div>
        <img src={logo_original} className={styles.logo_original} />
      </div>

    </div>
  );
}

 
