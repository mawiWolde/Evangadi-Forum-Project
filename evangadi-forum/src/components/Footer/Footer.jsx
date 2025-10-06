
import React from "react";
import logo from "../../assets/evangadi-logo-footer.png";
import { FaFacebookF, FaInstagram, FaYoutube,FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom"; // only for internal navigation
import styles from './Footer.module.css'

const Footer = () => {

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Evangadi Logo */}
        <div className={styles.logoSection}>
          <img src={logo} alt="Evangadi Logo" />
          <div>
           <a href="https://www.facebook.com/evangaditech" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.instagram.com/evangaditech/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.youtube.com/@EvangadiTech" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
           <a href="https://twitter.com/evangaditech" target="_blank" rel="noopener noreferrer"><FaTwitter/></a>
            <a href="https://www.linkedin.com/company/evangaditech" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
        </div>

        {/* Links */}
        <div className={styles.linksSection}>
           <h4>Useful Links</h4>
          <ul>
            <li><Link to="/how-it-works">How it works</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>


        <div className={styles.contactInfo}>
          <h4>Contact Info </h4>
          <div className={styles.socialIcons}>
            <ul>
            <li><Link to="/evangadi_Networks">Evangadi Networks</Link></li>
            <li><Link to="/suport">Support@evangadi.com</Link></li>
            <li><Link to="/phone">+1-202-306-2702</Link></li>
          </ul>
          </div>
        </div>
      </div>

      <p className={styles.copy}>
        &copy; {new Date().getFullYear()} Evangadi.com. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;



