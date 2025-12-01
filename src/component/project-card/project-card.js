import React, { useState } from "react";
import styles from "./project-card.module.css"
import { Link } from "react-router-dom";


export default function ProjectCard({ project }) {
    return (
      <div className={styles.main__container}>
        <div className={styles.image__container}>
          <div className={styles.image}>
            
              <img
                className={styles.image}
                src={project.project_image}
                alt={project.project_name}
              />
            
           
          </div>
          <div  className={styles.right__container}>
            
            <div className={styles.text__container}>
                  <h1 className={styles.title}>{'< '}{project.project_name}{' >'}</h1>
                <p className={styles.text}>{project.project__description}</p>
            </div>

            <div className={styles.url__container}>
              <Link to={project.project_url} className={styles.link} target="_blank" rel="noopener noreferrer">
                <div className={styles.btn__container}>
                  <button className={styles.btn__url}>{'< Project >'}</button>
                  <div className={styles.btn__span}></div>
                  <div className={styles.btn__span__botom}></div>
                </div>
              </Link>

              <Link to={project.code_url} className={styles.link} target="_blank" rel="noopener noreferrer">
                <div className={styles.btn__container}>
                  <button className={styles.btn__url}>{'< Code >'}</button>
                  <div className={styles.btn__span}></div>
                  <div className={styles.btn__span__botom}></div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
