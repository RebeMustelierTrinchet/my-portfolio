import styles from './navBar.module.css';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa6';
import { CgMail } from 'react-icons/cg';

// Data for navigation links
const navLinks = [
    { to: "/", label: "Home", animationClass: styles.text__conteiner__animation__H },
    { to: "/portfolio", label: "Portfolio", animationClass: styles.text__conteiner__animation__P },
    { to: "/about_me", label: "About me", animationClass: styles.text__conteiner__animation__A },
    { to: "/contact_us", label: "Contact Us", animationClass: styles.text__conteiner__animation__A },
];

// Data for social media links
const socialLinks = [
    { href: "https://www.linkedin.com/in/rebecamusteliertrinchet", icon: <FaLinkedinIn className={styles.icon} /> },
    { href: "https://www.instagram.com/codingbecky/", icon: <FaInstagram className={styles.icon} /> },
    { href: "https://github.com/RebeMustelierTrinchet", icon: <FaGithub className={styles.icon} /> },
    { href: "mailto:mustelierrebeca99@gmail.com", icon: <CgMail className={styles.icon} /> },
];

export default function NavBar() {
    return (
        <div className={styles.main__conteiner}>
            {/* Navigation links */}
            {navLinks.map(({ to, label, animationClass }, index) => (
                <Link to={to} key={index}>
                    <button className={`${styles.text__conteiner} ${animationClass}`}>
                        <p className={styles.text}>{label}</p>
                        <hr className={styles.line} />
                        <div className={styles.text2__conteiner}>
                            <p className={styles.text2}>{label}</p>
                        </div>
                    </button>
                </Link>
            ))}

            {/* Social media buttons */}
            <div className={styles.btn__social__media__container}>
                {socialLinks.map(({ href, icon }, index) => (
                    <a
                        href={href}
                        key={index}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.btn__social__media}
                    >
                        {icon}
                    </a>
                ))}
            </div>
        </div>
    );
}
