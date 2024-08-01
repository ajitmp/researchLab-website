import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css"; // Import CSS module

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <span>DISTRIBUTED INTELLIGENCE LAB</span>
      </div>
      <div className={styles.headerMiddle}>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link className={styles.navLink} to="/">
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link className={styles.navLink} to="/members">
                Members
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link className={styles.navLink} to="/research">
                Research
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link className={styles.navLink} to="/activities">
                Activities
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.headerRight}>
        <div className={styles.contactBox}>
          <span className={styles.contactText}>Keep in Touch</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
