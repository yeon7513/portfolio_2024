import React from 'react';
import styles from './ProjectList.module.scss';

function ProjectList({ list }) {
  return (
    <div className={styles.projectList}>
      <div className={styles.title}>{list.title}</div>
      {list.techStack.map((stack, idx) => (
        <div key={idx} className={styles.techStack}>
          {stack.item.length !== 0 && (
            <>
              <h3>{stack.label}</h3>
              {stack.item.map((item, idx) => (
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

export default ProjectList;
