import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactTyped } from 'react-typed';
import { useProjectContext } from '../../../context/projectContext';
import Stack from '../../about-me/stack/Stack';
import styles from './MainContent.module.scss';
import ProjectPreview from './project-preview/ProjectPreview';

function MainContent() {
  const projects = useProjectContext();
  // const [selectedProjectId, setSelectedProjectId] = useState(null);

  const navigate = useNavigate();

  const handleProjectClick = (id) => {
    console.log(id);
    // setSelectedProjectId(id);
    navigate('/projects', { state: { selectedProjectId: id } });
  };

  return (
    <div className={styles.homeContent}>
      <div className={styles.typed}>
        <ReactTyped
          strings={['Hello World!']}
          typeSpeed={100}
          backSpeed={80}
          startDelay={1000}
          backDelay={3000}
          loop={true}
        />
      </div>
      <p>
        호기심을 원동력 삼아 성장하는 개발자,
        <span> 문희연</span>입니다!
      </p>
      <Stack className={styles.mainStack} />
      <div className={styles.mainProjectList}>
        {projects.map((data) => (
          <ProjectPreview
            key={data.id}
            project={data}
            onClick={() => handleProjectClick(data.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default MainContent;
