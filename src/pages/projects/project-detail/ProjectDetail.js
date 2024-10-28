import React, { useRef } from 'react';
import VideoBox from '../../../components/video-box/VideoBox';
import { useProjectContext } from '../../../context/projectContext';
import styles from './ProjectDetail.module.scss';

function ProjectDetail({ projectId }) {
  const projects = useProjectContext();
  const project = projects.find((proj) => proj.id === projectId);
  const videoRef = useRef();

  return (
    <div className={styles.detail}>
      <VideoBox
        className={styles.detailVideo}
        src={project.videoUrl}
        ref={videoRef}
      />
      {project.desc.map((desc, idx) => (
        <div className={styles.description} key={idx}>
          <h4>{desc.label}</h4>
          <ol className={styles.explane}>
            {desc.explanation.map((exp, idx) => (
              <li key={idx}>
                <span>{idx + 1}.</span>
                <p>{exp}</p>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
}

export default ProjectDetail;
