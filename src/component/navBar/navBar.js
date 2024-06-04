import styles from './navBar.module.css'
import {Link} from "react-router-dom"

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FaGithub } from "react-icons/fa6";


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
          <Link to ="/about_me">
          <button href="/about_me" className={`${styles.text__conteiner} ${styles.text__conteiner__animation__A}`}>
            <p className={styles.text}>About me</p>
            <hr className={styles.line} />
            <div className={styles.text2__conteiner}>
                <p className={styles.text2}>About me</p>
            </div>
          </button>
          </Link>

          <Link to ="/contact_us">
          <button href="/contact_us" className={`${styles.text__conteiner} ${styles.text__conteiner__animation__A}`}>
            <p className={styles.text}>Contact Us</p>
            <hr className={styles.line} />
            <div className={styles.text2__conteiner}>
                <p className={styles.text2}>Contact Us</p>
            </div>
          </button>
          </Link>

          <div className={styles.btn__social__media__container}>
            <button className={styles.btn__social__media} href="https://www.facebook.com/profile.php?id=100082191186102"><FaFacebookF className={styles.icon}/></button>
            <button className={styles.btn__social__media} href="https://www.instagram.com/hellentrinchet/"><FaInstagram className={styles.icon}/></button>
            <button className={styles.btn__social__media} href="/"><FaGithub className={styles.icon} /></button>
            <button className={styles.btn__social__media} href="/emails"><CgMail className={styles.icon} /></button>
          </div>

        </div>
    );
}


