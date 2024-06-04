import React, { useState } from "react";
import styles from "./contact.module.css"
import Contact_Info from "../../component/contac-info/contact_info";



export default function Contact_Component() {

  return (
      <div className={styles.maincontainer}>   
        <Contact_Info />
    </div>
  );
}

 
