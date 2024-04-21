import React, { useState } from "react";
import styles from "./R-animation.module.css"




export default  function R__Animation() {

  return (
      <div className={styles.maincontainer}>  
        <h2 className={styles.R__letter}>R</h2>
        <div className={styles.glitter_conteiner}>
            <div className={styles.glitter}></div>
            <div className={styles.glitter}></div>
            <div className={styles.glitter}></div>
            <div className={styles.glitter}></div>
        </div>
    </div>
  );
}

 
