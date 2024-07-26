import React from 'react';
import styles from '../scss/Layout.module.scss';

function Wrapper({ children }) {
  return <section className={styles.wrapper}>{children}</section>;
}

export default Wrapper;
