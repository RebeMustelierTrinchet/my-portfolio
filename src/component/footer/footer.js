import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { Button } from 'react-bootstrap';
import { FaPhoneVolume } from "react-icons/fa6";
import styles from './footer.module.css';
import { FaGithub } from "react-icons/fa6";

import logo from './../../imagenes/logo/logo-original.png'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                <div className={styles.social__media}>
                    <h4>Follow Us</h4>
                    <div className={styles.icon__container}>
                        <button href="https://www.facebook.com" aria-label="Facebook">
                            <FaFacebookF className={styles.icon} />
                        </button >
                        <button  href="https://www.instagram.com" aria-label="Instagram">
                            <FaInstagram className={styles.icon} />
                        </button >
                        <button  href="/" aria-label="Github">
                            <FaGithub className={styles.icon} />
                        </button >
                        <button  href="mailto:mustelierrebeca99@gmail.com" aria-label="Email">
                            <CgMail className={styles.icon} />
                        </button >
                    </div>
                    <div className={styles.logo__conteiner}>
                        <img src={logo} alt={logo} className={styles.logo}/>
                    </div>
                </div>

                <div className={styles.navigation}>
                    <h4>Quick Links</h4>
                    <nav>
                        <ul className={styles.nav__links}>
                            <li><Button className={styles.nav__button} href="/">Home</Button></li>
                            <li><Button className={styles.nav__button} href="/portfolio">Portfolio</Button></li>
                        </ul>
                    </nav>
                </div>

                <div className={styles.contact__info}>
                    <h4>Contact Us</h4>
                    <p><FaPhoneVolume size={"18px"} className={styles.icon} /> (346) 526-0235</p>
                    <p><CgMail className={styles.icon} /> mustelierrebeca@gmail.com</p>
                    <Button className={styles.contact__button} href="/contact-us">Text Us</Button>
                </div>
            </div>
            <div className={styles.footer__bottom}>
                <p>&copy; 2024 Rebeca All Rights Reserved.</p>
            </div>
        </footer>
    );
}
