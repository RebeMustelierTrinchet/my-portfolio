import React, { useState } from "react";
import styles from "./header.module.css"
const renderWord = (word) => (
    
    <span className={styles.word}>
        {Array.from(word).map((letter, index) => (
            <span
                key={index}
                className={index % 2 === 0 ? styles.impares__letters : styles.par__letters}
            >
                {letter}
            </span>
        ))}
        <hr className={styles.line} />
    </span>
    
);

export default  function Header() {
    const words = [
        "Revolutionizing",
        "Every",
        "Byte",
        "Engineering",
        "Creative",
        "Algorithms",
    ];

    return (
        <div className={styles.main__container}>
            <div className={styles.background}></div> 
            <div className={styles.word__conteiner}>
                <div>
                    {words.map((word, index) => (
                        <React.Fragment key={index}>{renderWord(word)}</React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
    
    
  
}
