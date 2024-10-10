import React from 'react';
import { Link } from 'react-router-dom';
import ImageBox from '../../../components/image-box/ImageBox';
import { useProjectContext } from '../../../context/projectContext';
import styles from './ProjectDetail.module.scss';

function ProjectDetail({ projectId }) {
  const projects = useProjectContext();
  const project = projects.find((proj) => proj.id === projectId);

  return (
    <div className={styles.detail}>
      <ImageBox className={styles.detailImg} src={project.imgUrl} />
      <div className={styles.description}>{project.desc}</div>
      <div>
        <Link to={project.demo} target="_blank">
          demo
        </Link>
        <Link to={project.source} target="_blank">
          source
        </Link>
      </div>
    </div>
  );
}

export default ProjectDetail;
