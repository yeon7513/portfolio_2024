import React from 'react';
import { FaSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './ProjectListItem.module.scss';

function ProjectListItem({ stack, keywords, demo, source }) {
  return (
    <div className={styles.listItem}>
      <div className={styles.keywords}>
        {keywords.map((word, idx) => (
          <span key={idx}>{word}</span>
        ))}
      </div>
      <div className={styles.content}>
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
      <div className={styles.btnWrap}>
        <Link to={demo} target="_blank">
          demo
        </Link>
        <Link to={source} target="_blank">
          source
        </Link>
      </div>
    </div>
  );
}

export default ProjectListItem;
