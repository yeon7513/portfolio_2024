import React from 'react';
import { Link } from 'react-router-dom';
import LinkList from '../components/LinkList';
import styles from '../scss/Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <Link to="/">logo</Link>
      </h1>
      <nav>
        <ul>
          <LinkList goto="/">&lt;home &#47;&gt;</LinkList>
          <LinkList goto="/aboutMe">&lt;about &#47;&gt;</LinkList>
          <LinkList goto="/projects">&lt;project &#47;&gt;</LinkList>
          <LinkList goto="/contact">&lt;contact &#47;&gt;</LinkList>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
