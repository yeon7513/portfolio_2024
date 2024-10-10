import React from 'react';
import Container from '../../components/layout/container/Container';
import { projectData } from '../../lib/projectData';
import styles from './Projects.module.scss';
import ProjectList from './project-list/ProjectList';

function Projects() {
  return (
    <div className={styles.projects}>
      <Container>
        {projectData.map((data, idx) => (
          <ProjectList key={idx} list={data} />
        ))}
      </Container>
    </div>
  );
}

export default Projects;
