import React, { useState } from "react";
import styles from "./rebeca.module.css"
import Resume from "../../component/resume/resume";
import Frontend__Development from "../../component/frontend-devalopment/fronted-devalopment";
import Header from "../../component/header/header";
import VisitComponent from "../../component/visit/visit";

export default function RebecaComponent() {
  return (
      <div className={styles.maincontainer}>   
        <Header/>
        <Resume/>
        <VisitComponent/>
        <Frontend__Development/>
    </div>
  );
}

 
