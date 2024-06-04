import React from 'react';
import styles from './contac_info.module.css'; 
import img from './../../imagenes/photo_2024-05-10_12-02-41-removebg-preview (1).png';
import { FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa';
import { CgMail } from 'react-icons/cg';

const Contact_Info = () => {
  return (
    <div className={styles.contact_page}>
       <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        
      <div className={styles.image_container}>
        <img src={img} className={styles.image} alt="Profile" />
        <h1 className={styles.title}>Contact Information</h1>
        <h1 className={styles.border_title}>Contact Information</h1>
      </div>
      <div className={styles.contact_details}>
        <h2 className={styles.subtitle}>My Info</h2>
        <p>Email: mustelierrebeca99@gmail.com</p>
        <p>Phone: (346) 526 - 0235</p>
      </div>
      <div className={styles.social_media}>
        <h2 className={styles.subtitle}>Follow Me</h2>
        <div className={styles.wrapper}>
          <div className={styles.wrapper_links}>
            <div className={styles.btn_links}>
              <a className={`${styles.social_link} ${styles.social_link_dribbble}`} href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className={styles.social_icon} />
              </a>
              <span className={styles.visit}>Go visit my face</span>
            </div>
            <div className={styles.btn_links}>
              <a className={`${styles.social_link} ${styles.social_link_github}`} href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <FaGithub className={styles.social_icon} />
              </a>
              <span className={styles.visit}>Go visit my face</span>
            </div>
            <div className={styles.btn_links}>
              <a className={`${styles.social_link} ${styles.social_link_instagram}`} href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">  
                <FaInstagram className={styles.social_icon} />
              </a>
              <span className={styles.visit}>Go visit my face</span>
            </div>
            <div className={styles.btn_links}>
              <a className={`${styles.social_link} ${styles.social_link_linkedin}`} href="mailto:mustelierrebeca99@gmail.com">
                <CgMail className={styles.social_icon} />
              </a>
              <span className={styles.visit}>Go visit my face</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact_Info;
