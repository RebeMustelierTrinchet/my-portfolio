import React from 'react';
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn, FaPhoneVolume } from 'react-icons/fa';
import { CgMail } from 'react-icons/cg';
import { Button } from 'react-bootstrap';
import styles from './footer.module.css';
import logo from './../../imagenes/logo/logo-original.png';

// Mapa de redes sociales con iconos y enlaces
const socialLinks = [
  {
    href: "https://www.linkedin.com/in/rebecamusteliertrinchet",
    label: "LinkedIn",
    icon: <FaLinkedinIn />
  },
  {
    href: "https://www.instagram.com/codingbecky/",
    label: "Instagram",
    icon: <FaInstagram />
  },
  {
    href: "https://github.com/username",
    label: "Github",
    icon: <FaGithub />
  },
  {
    href: "mailto:mustelierrebeca99@gmail.com",
    label: "Email",
    icon: <CgMail />
  }
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        {/* Sección de redes sociales */}
        <div className={styles.social__media}>
          <h4>Follow Us</h4>
          <div className={styles.icon__container}>
            {socialLinks.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>
          <div className={styles.logo__container}>
            <img src={logo} alt="Rebeca's logo" className={styles.logo} />
          </div>
        </div>

        {/* Sección de redes sociales en móvil */}
        <div className={styles.social__media_movil}>
          <div className={styles.logo__container}>
            <img src={logo} alt="Rebeca's logo" className={styles.logo} />
          </div>
          <h4>Follow Us</h4>
          <div className={styles.icon__container}>
            {socialLinks.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <span className={styles.icon}>{icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Sección de navegación */}
        <div className={styles.navigation}>
          <h4>Quick Links</h4>
          <nav>
            <ul className={styles.nav__links}>
              <li><Button className={styles.nav__button} href="/">Home</Button></li>
              <li><Button className={styles.nav__button} href="/portfolio">Portfolio</Button></li>
            </ul>
          </nav>
        </div>

        {/* Sección de contacto */}
        <div className={styles.contact__info}>
          <h4>Contact Us</h4>
          <p>
            <FaPhoneVolume size="18px" className={styles.icon} /> (346) 526-0235
          </p>
          <p>
            <CgMail className={styles.icon} /> mustelierrebeca@gmail.com
          </p>
          <Button className={styles.contact__button} href="/contact_us">Text Us</Button>
        </div>
      </div>

      {/* Pie de página */}
      <div className={styles.footer__bottom}>
        <p>&copy; 2024 Rebeca All Rights Reserved.</p>
      </div>
    </footer>
  );
}
