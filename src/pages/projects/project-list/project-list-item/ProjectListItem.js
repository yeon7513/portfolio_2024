import React from 'react';
import { FaSquare } from 'react-icons/fa';
import styles from './ProjectListItem.module.scss';

function ProjectListItem({ stack }) {
  return (
    <div className={styles.listItem}>
      {stack.map(
        (data, idx) =>
          data.item.length !== 0 && (
            <div key={idx} className={styles.techStack}>
              <h3 className={styles.label}>{data.label}</h3>
              {data.item.map((item, idx) => (
                <div key={idx} className={styles.stackContent}>
                  <span className={styles.icon}>
                    <FaSquare />
                  </span>
                  <span className={styles.item}>{item}</span>
                </div>
              ))}
            </div>
          )
      )}
    </div>
  );
}

export default ProjectListItem;
