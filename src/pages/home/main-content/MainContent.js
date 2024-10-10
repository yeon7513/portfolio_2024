import React from 'react';
import { ReactTyped } from 'react-typed';
import Stack from '../../about-me/stack/Stack';
import styles from './MainContent.module.scss';

function MainContent() {
  return (
    <div className={styles.homeContent}>
      <div className={styles.typed}>
        <ReactTyped
          strings={['Hello World!']}
          typeSpeed={100}
          backSpeed={80}
          startDelay={1000}
          backDelay={3000}
          loop={true}
        />
      </div>
      <p>
        호기심을 원동력 삼아 성장하는 개발자,
        <span> 문희연</span>입니다!
      </p>
      <Stack className={styles.mainStack} />
    </div>
  );
}

export default MainContent;
