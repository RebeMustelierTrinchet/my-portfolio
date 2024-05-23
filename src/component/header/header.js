import React, { useState } from "react";
import styles from "./header.module.css"
import background from './../../imagenes/_46d88c9b-31f8-4f9d-b5b5-5c5952ae44c4.jpg'








export default  function Header() {

  return (
        <div className={styles.main__container}>
            <div className={styles.background}></div> 
            <div className={styles.word__conteiner}>
           
                <span className={styles.word}>
                    <span className={styles.impares__letters}>R</span><span className={styles.par__letters}>e</span><span className={styles.impares__letters}>v</span><span className={styles.par__letters}>o</span><span className={styles.impares__letters}>l</span><span className={styles.par__letters}>u</span><span className={styles.impares__letters}>t</span><span className={styles.par__letters}>i</span><span className={styles.impares__letters}>o</span><span className={styles.par__letters}>n</span><span className={styles.impares__letters}>i</span><span className={styles.par__letters}>z</span><span className={styles.impares__letters}>i</span><span className={styles.par__letters}>n</span><span className={styles.impares__letters}>g</span>
                    <hr className={styles.line}/>
                </span>
                <span className={styles.word}>
                    <span className={styles.impares__letters}>E</span><span className={styles.par__letters}>v</span><span className={styles.impares__letters}>e</span><span className={styles.par__letters}>r</span><span className={styles.impares__letters}>y</span>
                    <hr className={styles.line}/>
                </span>
                <span className={styles.word}>
                    <span className={styles.impares__letters}>B</span><span className={styles.par__letters}>y</span><span className={styles.impares__letters}>t</span><span className={styles.par__letters}>e</span>
                    <hr className={styles.line}/>
                </span>
                <span className={styles.word}>
                    <span className={styles.impares__letters}>E</span><span className={styles.par__letters}>n</span><span className={styles.impares__letters}>g</span><span className={styles.par__letters}>i</span><span className={styles.impares__letters}>n</span><span className={styles.par__letters}>e</span><span className={styles.impares__letters}>e</span><span className={styles.par__letters}>r</span><span className={styles.impares__letters}>i</span><span className={styles.par__letters}>n</span><span className={styles.impares__letters}>g</span>
                    <hr className={styles.line}/>
                </span>
                <span className={styles.word}>
                    <span className={styles.impares__letters}>C</span><span className={styles.par__letters}>r</span><span className={styles.impares__letters}>e</span><span className={styles.par__letters}>a</span><span className={styles.impares__letters}>t</span><span className={styles.par__letters}>i</span><span className={styles.impares__letters}>v</span><span className={styles.par__letters}>e</span>
                    <hr className={styles.line}/>
                </span>
                <span className={styles.word}>
                    <span className={styles.impares__letters}>A</span><span className={styles.par__letters}>l</span><span className={styles.impares__letters}>g</span><span className={styles.par__letters}>o</span><span className={styles.impares__letters}>r</span><span className={styles.par__letters}>i</span><span className={styles.impares__letters}>t</span><span className={styles.par__letters}>h</span><span className={styles.impares__letters}>m</span><span className={styles.par__letters}>s</span>
                    <hr className={styles.line}/>    
                </span>
                

            </div>
      
        </div>
    
  );
}

 
