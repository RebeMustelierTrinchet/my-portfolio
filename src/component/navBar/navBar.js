import styles from './navBar.module.css'
import {Link} from "react-router-dom"


export default function NavBar(){

    return (
        <div className={styles.main__conteiner}>

           <Link to ="/">
          <button href="/" className={`${styles.text__conteiner} ${styles.text__conteiner__animation__H} `}>
            <p className={styles.text}>Home</p>
            <hr className={styles.line} />
            <div className={styles.text2__conteiner}>
                <p className={styles.text2}>Home</p>
            </div>
          </button>
          </Link>
          <Link to ="/portfolio">
          <button href="/portfolio" className={`${styles.text__conteiner} ${styles.text__conteiner__animation__P}`}>
            <p className={styles.text}>Portfolio</p>
            <hr className={styles.line} />
            <div className={styles.text2__conteiner}>
                <p className={styles.text2}>Portfolio</p>
            </div>
          </button>
          </Link>

        </div>
    );
}