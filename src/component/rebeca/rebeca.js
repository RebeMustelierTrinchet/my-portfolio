import React from "react";
import styles from "./rebeca.module.css";

const titleMap = {
  bloque1: ["R", "e", "b", "e", "c", "a", ":"],
  bloque2: ["I", "n", "n", "o", "v", "a", "t", "i", "v", "e"],
  bloque3: ["F", "u", "l", "l", "s", "t", "a", "c", "k"],
  bloque4: ["D", "e", "v", "e", "l", "o", "p", "e", "r"],
};

const subtitleMap = {
  subtitle1: ["T", "r", "a", "n", "s", "f", "o", "r", "m", "i", "n", "g"],
  subtitle2: ["i", "d", "e", "a", "s"],
  subtitle3: ["i", "n", "t", "o"],
  subtitle4: ["e", "x", "c", "e", "p", "t", "i", "o", "n", "a", "l"],
  subtitle5: ["d", "i", "g", "i", "t", "a", "l"],
  subtitle6: ["e", "x", "p", "e", "r", "i", "e", "n", "c", "e", "s"],
};

export default function Rebeca() {
  return (
    <div className={styles.maincontainer}>
      <div className={styles.background}></div>
      <div className={styles.title}>
        {Object.keys(titleMap).map((bloque, index) => (
          <div key={index} className={styles.block}>
            {titleMap[bloque].map((letter, i) => (
              <span key={i}>{letter}</span>
            ))}
            {index !== Object.keys(titleMap).length - 1 && (
              <span className={styles.separate}> </span>
            )}
          </div>
        ))}
      </div>
      <div className={styles.subtitle}>
        {Object.keys(subtitleMap).map((subtitle, index) => (
          <div key={index} className={styles.block}>
            {subtitleMap[subtitle].map((letter, i) => (
              <span key={i}>{letter}</span>
            ))}
            {index !== Object.keys(subtitleMap).length - 1 && (
              <span className={styles.separate}> </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
