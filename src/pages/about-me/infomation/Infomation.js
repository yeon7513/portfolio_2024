import React from 'react';
import { infomationData } from '../../../data/aboutData';
import styles from './Infomation.module.scss';

function Infomation() {
  return (
    <div className={styles.infomation}>
      {infomationData.map((data, idx) => (
        <div key={idx} className={styles.content}>
          <h2 className={styles.title}>{data.title}</h2>
          {data.content.map((content, idx) => (
            <div key={idx} className={styles.detail}>
              <span className={styles.date}>{content.date}</span>
              <p className={styles.label}>
                {content.label}
                {content.desc && (
                  <span className={styles.desc}>{content.desc}</span>
                )}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Infomation;
