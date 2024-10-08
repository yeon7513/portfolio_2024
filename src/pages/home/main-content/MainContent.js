import React from 'react';
import { ReactTyped } from 'react-typed';
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
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic nihil
          quidem, voluptatem aliquam ex itaque laborum? Debitis voluptate porro
          aspernatur ducimus sapiente ab, nostrum eveniet. Beatae ea dolore
          ipsum voluptatem.
        </p>
      </div>
      <div></div>
    </div>
  );
}

export default MainContent;
