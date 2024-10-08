import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { stackData } from '../../../data/aboutData';
import styles from './Stack.module.scss';

function Stack() {
  const [sortedData, setSortedData] = useState(stackData);

  const handleSort = (keyword) => {
    // 특정 키워드를 포함한 항목을 우선 정렬
    const sorted = [...stackData].sort((a, b) => {
      const aHasKeyword = a.keyword.includes(keyword) ? -1 : 1;
      const bHasKeyword = b.keyword.includes(keyword) ? -1 : 1;
      return aHasKeyword - bHasKeyword;
    });
    setSortedData(sorted);
  };

  return (
    <div className={styles.stack}>
      <div className={styles.sortBtnWrap}>
        <button onClick={() => handleSort('#자신있어요')}>Confident</button>
        <button onClick={() => handleSort('#잘할수있어요')}>Proficient</button>
        <button onClick={() => handleSort('#조금할수있어요')}>Basic</button>
      </div>
      <motion.div layout className={styles.container}>
        {sortedData.map((data, idx) => (
          <motion.div
            key={idx}
            className={styles.content}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <h2>{data.skill}</h2>
            <div className={styles.keywords}>
              {data.keyword.map((word, idx) => (
                <span key={idx}>{word}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Stack;
