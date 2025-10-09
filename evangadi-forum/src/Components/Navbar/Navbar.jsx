import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "../Navbar/Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">Evangadi</Link>
      </div>

      {/* Hamburger menu for mobile */}
      <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        <div className={isOpen ? styles.barActive : styles.bar}></div>
        <div className={isOpen ? styles.barActive : styles.bar}></div>
        <div className={isOpen ? styles.barActive : styles.bar}></div>
      </div>

      {/* Navigation Links */}
      <nav className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
        <Link to="/how-it-works" onClick={() => setIsOpen(false)}>
          How It Works
        </Link>
        <Link to="/terms" onClick={() => setIsOpen(false)}>
          Terms of Service
        </Link>
        <Link to="/privacy" onClick={() => setIsOpen(false)}>
          Privacy policy
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;