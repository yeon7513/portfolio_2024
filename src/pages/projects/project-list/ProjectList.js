import cn from 'classnames';
import { motion } from 'framer-motion';
import React from 'react';
import styles from './ProjectList.module.scss';
import ProjectListItem from './project-list-item/ProjectListItem';

function ProjectList({ list, onClick, isSelected }) {
  return (
    <motion.div
      className={
        isSelected
          ? cn(styles.projectList, styles.selected)
          : styles.projectList
      }
      onClick={onClick}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
    >
      <div className={styles.title}>{list.title}</div>
      <div>기간 : {list.period}</div>
      <div>개요 : {list.summary}</div>
      {isSelected && <ProjectListItem stack={list.techStack} />}
    </motion.div>
  );
}

export default ProjectList;
