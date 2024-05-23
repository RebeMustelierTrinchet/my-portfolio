import React, { useState } from "react";
import styles from "./portfolio.module.css"
import {useRef, useEffect} from 'react';
import My__Projects from "../../component/my-project/my-project";
import Technologies from "../../component/Technologies/Technologies";



export default function Portfolio() {

  return (
      <div className={styles.maincontainer}>   
        <My__Projects/>

        <div className={styles.Technologies__container}>
          <Technologies/>
        </div>
    </div>
  );
}
