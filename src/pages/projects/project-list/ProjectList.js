import cn from 'classnames';
import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { TbBubbleText, TbCalendarTime } from 'react-icons/tb';
import styles from './ProjectList.module.scss';
import ProjectListItem from './project-list-item/ProjectListItem';

function ProjectList({ list, onClick, isSelected }) {
  const itemRef = useRef(null);

  useEffect(() => {
    if (isSelected && itemRef.current) {
      itemRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [isSelected]);

  return (
    <motion.div
      ref={itemRef}
      className={
        isSelected
          ? cn(styles.projectList, styles.selected)
          : styles.projectList
      }
      onClick={onClick}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
    >
      <h2 className={styles.title}>{list.title}</h2>
      <div className={cn(styles.desc, styles.period)}>
        <span className={styles.icon}>
          <TbCalendarTime />
        </span>
        <span>{list.period}</span>
      </div>
      <div className={cn(styles.desc, styles.summary)}>
        <span className={styles.icon}>
          <TbBubbleText />
        </span>
        <p>{list.summary}</p>
      </div>
      {isSelected && (
        <ProjectListItem
          stack={list.techStack}
          keywords={list.keyword}
          demo={list.demo}
          source={list.source}
        />
      )}
    </motion.div>
  );
}

export default ProjectList;
