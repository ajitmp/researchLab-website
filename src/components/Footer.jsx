import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        <h4>Follow Us</h4>
        <div className={styles.socialMediaLinks}>
          <a
            href="https://www.linkedin.com/in/dil-distributed-intelligence-lab-052599305/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://twitter.com/distributed_lab"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://github.com/DILDavid"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
      <div className={styles.footerMiddle}>
        <h4>Contact Us</h4>
        <address>
          Address:
          <br />
          21408, Information Science Building,
          <br />
          Soongsil University, Seoul, South Korea.
          <br />
          Email: distributedlab[dot]david[at]gmail[dot]com
        </address>
      </div>
      <div className={styles.footerRight}>
        <h4>Quick Links</h4>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/members">Members</a>
          </li>
          <li>
            <a href="/research">Research</a>
          </li>
          <li>
            <a href="/activities">Activities</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
