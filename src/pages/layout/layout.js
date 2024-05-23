import React from 'react'; 
import styles from "./layout.module.css";
import NavBar from '../../component/navBar/navBar';
import { useState } from 'react';
import {  activeBody, setActiveBody } from './../../component/const';
import { TiThMenu } from "react-icons/ti";
import Footer from '../../component/footer/footer';
import logo from './../../imagenes/logo/logo-original.png'
import AnimationStarting from '../../animaciones/starting/starting';


export default function Layout({children}){

   
    const [isActive, setIsActive] = useState(activeBody);
    const [isReversed, setIsReversed] = useState(false);
    const [animationEnabled, setAnimationEnabled] = useState(false);

    const toggleBody = () => {
        setIsActive(!isActive);
        setActiveBody(!isActive); 
        setIsReversed(!isReversed);
        setAnimationEnabled(true);
    }
    const toggleBodyFalse = (event) => {
        event.stopPropagation();
        setIsActive(false);
       
    }
    return(
        <div className={styles.main__conteiner}>
            <div className={styles.animation__starting__conteiner}>
                <AnimationStarting/>
            </div>
            <div onClick={toggleBodyFalse}  className={`${styles.nav_bar_disable} ${isActive ? styles.nav_bar_active : ''}`}>
                <NavBar/>
            </div>
            <div className={styles.body__conteiner}>
                <div className={styles.header__conteiner}>
                    <div className={styles.logo__conteiner}>
                        <img src={logo} alt={logo} className={styles.logo}/>
                    </div>
                    <button onClick={toggleBody} className={styles.btn}><TiThMenu className={styles.btn__icon}/><p className={styles.btn__text}>Rebeca</p></button>
                </div>
                <div className={styles.maincontainer}>
                <div className={`${styles.body} ${isActive ? (animationEnabled ? styles.rotate__body : '') : (animationEnabled ? styles.rotate__body__reverse : '')}`}>
                        {children}
                    </div>
                </div>
                <Footer/>
            </div>
        
        </div>
    )
}