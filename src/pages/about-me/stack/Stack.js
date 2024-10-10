import cn from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { stackData } from '../../../lib/aboutData';
import styles from './Stack.module.scss';

function Stack({ className }) {
  const [sortedData, setSortedData] = useState(stackData);

  const handleSort = (sortKeyword) => {
    const sortOrder = ['#자신있어요', '#잘할수있어요', '#조금할수있어요'];

    const updatedSortOrder = [
      sortKeyword,
      ...sortOrder.filter((keyword) => keyword !== sortKeyword),
    ];

    const sorted = [...stackData].sort((a, b) => {
      const aPriority = updatedSortOrder.findIndex((order) =>
        a.keyword.includes(order)
      );
      const bPriority = updatedSortOrder.findIndex((order) =>
        b.keyword.includes(order)
      );

      return aPriority - bPriority;
    });

    setSortedData(sorted);
  };

  return (
    <div className={styles.stack}>
      <div className={styles.sortBtnWrap}>
        <button onClick={() => handleSort('#자신있어요')}>
          <span className={styles.shadow}></span>
          <span className={styles.edge}></span>
          <span className={styles.front}>I'm Confident!!</span>
        </button>
        <button onClick={() => handleSort('#잘할수있어요')}>
          <span className={styles.shadow}></span>
          <span className={styles.edge}></span>
          <span className={styles.front}>Do it well!</span>
        </button>
        <button onClick={() => handleSort('#조금할수있어요')}>
          <span className={styles.shadow}></span>
          <span className={styles.edge}></span>
          <span className={styles.front}>Little bit..</span>
        </button>
      </div>
      <motion.div layout className={cn(styles.container, className)}>
        <AnimatePresence>
          {sortedData.map((data) => (
            <motion.div
              key={data.skill}
              className={styles.content}
              layout
              transition={{ duration: 0.5, type: 'spring', bounce: 0.25 }}
            >
              <h2>{data.skill}</h2>
              <p>{data.desc}</p>
              <div className={styles.keywords}>
                {data.keyword.map((word, idx) => (
                  <span key={idx}>{word}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default Stack;
