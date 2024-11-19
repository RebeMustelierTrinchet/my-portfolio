import React from "react";
import styles from "./home.module.css"
import Rebeca from "../../component/rebeca/rebeca";

function Home() {
  return (
    <div className={styles.maincontainer}>   
      <Rebeca/>   
    </div>
  );
}

export default Home;