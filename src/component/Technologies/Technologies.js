import React, { useState, useRef, useEffect } from "react";
import styles from "./Technologies.module.css"


export default  function Technologies() {
 

  return (
      <div className={styles.maincontainer}> 
          <ul className={styles.list__container}>Technical Skills
            <li className={styles.list__item}>Programming Languages: HTML, CSS, JavaScript, python and c++</li>
            <li className={styles.list__item}>Frameworks and Libraries: React and Angular</li>
          </ul>
          <ul className={styles.list__container}>Academic Degrees
            <ul className={styles.sub__list__container}>San Jacinto College
                <li  className={styles.list__item}>Computer Science Student: Currently pursuing studies in Computer Science, gaining solid knowledge 
                    in software development, algorithms, and data structures, with a focus on frontend development.</li>
            </ul>
            <ul  className={styles.sub__list__container}>Independent Study
                <li className={styles.list__item}>Python and Frontend Development with React: Studying independently to deepen knowledge and skills 
                    in Python programming and frontend development using React.</li>
            </ul>
            <ul  className={styles.sub__list__container}>Career Goals
                <li className={styles.list__item}>Long-term Goal: Aspiring to advance as a fullstack developer</li>
            </ul>
          </ul>
          <ul className={styles.list__container}>Professional Experience
            <ul className={styles.sub__list__container}>Internships
                <li className={styles.list__item}>
                Internship in Cuba: During high school, I had an internship in my home country, Cuba, 
                where I studied Angular and gained valuable hands-on experience mostly in frontend development.
                </li>
            </ul>
            <ul className={styles.sub__list__container}>Independent Projects
                <li className={styles.list__item}>React Projects: Over the past year, I have been dedicated to freelaneing  React 
                    projects for small businesses. This experience has allowed me to apply my skills in real-world 
                    scenarios, enhancing my proficiency in frontend development.</li>
            </ul>

          </ul>


    </div>
  );
}

 
