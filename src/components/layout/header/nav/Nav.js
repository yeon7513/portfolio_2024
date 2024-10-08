import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Nav.module.scss';

function Nav() {
  const { pathname } = useLocation();

  return (
    <nav className={styles.nav}>
      <ul>
        <li className={pathname === '/' ? styles.active : ''}>
          <Link to="/">&lt;Home&#47;&gt;</Link>
        </li>
        <li className={pathname === '/about' ? styles.active : ''}>
          <Link to="/about">&lt;About&#47;&gt;</Link>
        </li>
        <li className={pathname === '/projects' ? styles.active : ''}>
          <Link to="/projects">&lt;Projects&#47;&gt;</Link>
        </li>
        <li className={pathname === '/contact' ? styles.active : ''}>
          <Link to="/contact">&lt;Contact&#47;&gt;</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
