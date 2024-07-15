import React, { useState, useRef, useEffect } from "react";
import styles from "./Technologies.module.css"


export default  function Technologies() {
 

  return (
      <div className={styles.maincontainer}> 
          <ul className={styles.list__container}>Technical Skills
            <li className={styles.list__item}>Programming Languages: JavaScript, python, c++, HTML and CSS</li>
            <li className={styles.list__item}>Frameworks and Libraries: React, Boostrap and Angular</li>
          </ul>
          <ul className={styles.list__container}>Academic Degrees
            <ul className={styles.sub__list__container}>San Jacinto College
                <li  className={styles.list__item}>Computer Science Student: Currently pursuing studies in Computer Science, gaining solid knowledge 
                    in software development, algorithms, and data structures, with a focus on frontend development and freelancer</li>
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
          <ul className={styles.sub__list__container}>Independent Projects
                <li className={styles.list__item}>Freelancer Part-time: Over the past year, I've focused on freelancing React projects for small businesses. 
                  This hands-on experience has been invaluable, allowing me to directly engage with clients, understand their needs, and deliver 
                  solutions that exceed expectations. <br/> 
                  One aspect I particularly enjoy is coordinating project timelines. I love playing with the calendar, ensuring deadlines are 
                  met without compromising quality. This experience has not only honed my technical skills but also sharpened my ability to 
                  communicate effectively and manage projects efficiently. It has truly been a growth journey for me as a programmer.</li>
            </ul>
            <ul className={styles.sub__list__container}>Internships
                <li className={styles.list__item}>
                Internship in Cuba: During high school, I had an internship in my home country, Cuba, 
                where I studied Angular and gained valuable hands-on experience mostly in frontend development.
                </li>
            </ul>
            


          </ul>


    </div>
  );
}

 
