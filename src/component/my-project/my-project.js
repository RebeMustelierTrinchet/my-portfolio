import React, { useState } from "react";
import styles from "./my-project.module.css"
import { Projects } from "../../const/projects";
import Project_Card from "../project-card/project-card";



export default function My__Projects() {

  return (
      <div className={styles.maincontainer}> 
        <div className={styles.backgrond}></div>
       {Projects.map((project, index) => {
            return (
                <Project_Card key={index} project={project}  />
            )
        })}
    </div>
  );
}
