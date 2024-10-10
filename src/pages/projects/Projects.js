import React, { useState } from 'react';
import Container from '../../components/layout/container/Container';
import { useProjectContext } from '../../context/projectContext';
import styles from './Projects.module.scss';
import ProjectDetail from './project-detail/ProjectDetail';
import ProjectList from './project-list/ProjectList';

function Projects() {
  const projects = useProjectContext();
  const [selectedProjectId, setSelectedProjectId] = useState('numberGuess');

  const handleProjectClick = (id) => {
    setSelectedProjectId(id);
  };

  return (
    <Container className={styles.projects}>
      <ProjectDetail projectId={selectedProjectId} />
      <div className={styles.list}>
        {projects.map((data) => (
          <ProjectList
            key={data.id}
            list={data}
            isSelected={selectedProjectId === data.id}
            onClick={() => handleProjectClick(data.id)}
          />
        ))}
      </div>
    </Container>
  );
}

export default Projects;
