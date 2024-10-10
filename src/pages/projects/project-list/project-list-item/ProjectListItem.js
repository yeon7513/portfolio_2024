import React from 'react';
import styles from './ProjectListItem.module.scss';

function ProjectListItem({ stack }) {
  return (
    <div>
      {stack.map((data, idx) => (
        <div key={idx} className={styles.techStack}>
          {data.item.length !== 0 && (
            <>
              <h3>{data.label}</h3>
              {data.item.map((item, idx) => (
                <div key={idx} className={styles.stackContent}>
                  <span>{item}</span>
                </div>
              ))}
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default ProjectListItem;
