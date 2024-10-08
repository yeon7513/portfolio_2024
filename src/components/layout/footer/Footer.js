import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to="https://github.com/yeon7513" target="_blank">
        github
      </Link>
      <Link
        to="https://yeon7513.notion.site/115a2ad7a3e6803b99b2f6bf80013b3b?pvs=4"
        target="_blank"
      >
        resume
      </Link>
    </footer>
  );
}

export default Footer;
