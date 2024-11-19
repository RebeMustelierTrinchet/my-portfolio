import React, { useState } from "react";
import styles from "./starting.module.css"
import logo_border from './../../imagenes/logo/Untitled-1.png'
import logo_original from './../../imagenes/logo/logo-original-cut.png'

export default  function AnimationStarting() {
  return (
    <div className={styles.maincontainer}>
      <div className={styles.logocontainer}>
        <img src={logo_border} className={styles.logo_border} />
        <div className={styles.imagen__color__logo} >
          <img src={logo_original} className={styles.logo_original} />
        </div>
      </div>
    </div>
  );
}

 
