import cn from 'classnames';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { IoDocumentText } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Link
        className={cn(styles.icon, styles.github)}
        to="https://github.com/yeon7513"
        target="_blank"
      >
        <span className={styles.tooltip}>깃허브 보기</span>
        <FaGithub />
      </Link>
      <Link
        className={cn(styles.icon, styles.resume)}
        to="https://yeon7513.notion.site/115a2ad7a3e6803b99b2f6bf80013b3b?pvs=4"
        target="_blank"
      >
        <span className={styles.tooltip}>이력서 보기</span>
        <IoDocumentText />
      </Link>
    </footer>
  );
}

export default Footer;
