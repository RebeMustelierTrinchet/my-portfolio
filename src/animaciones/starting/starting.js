import React, { useState } from "react";
import styles from "./starting.module.css"
import logo from './../../imagenes/logo/logo-cut.png'
import bear from './../../imagenes/logo/paloma-removebg-preview.png'
import color from './../../imagenes/logo/paloma-color.png'

import logo_border from './../../imagenes/logo/Untitled-1.png'
import logo_original from './../../imagenes/logo/logo-original-cut.png'






export default  function AnimationStarting() {

  return (
    <div className={styles.maincontainer}>

      {/* option A  */}
      {/* <div className={styles.logocontainer}>  
        <div className={styles.imagen__conteiner} >
          <img src={bear} className={styles.imagen__bear} />
          <div className={styles.imagen__color__conteiner} >
            <img src={color} className={styles.imagen__color} />
          </div>
          <div className={styles.imagen__logo__conteiner} >
            <img src={logo} className={styles.imagen__logo} />
          </div>
        </div>
      </div> */}
       <div className={styles.logocontainer}>
       <img src={logo_border} className={styles.logo_border} />
          <div className={styles.imagen__color__logo} >
            <img src={logo_original} className={styles.logo_original} />
          </div>

       </div>

    </div>
  );
}

 
