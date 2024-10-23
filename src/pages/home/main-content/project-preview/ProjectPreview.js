import React, { useState } from 'react';
import VideoBox from '../../../../components/video-box/VideoBox';
import ImageBox from './../../../../components/image-box/ImageBox';
import styles from './ProjectPreview.module.scss';

function ProjectPreview({ onClick, project }) {
  const [isOver, setIsOver] = useState(false);

  return (
    <div className={styles.projectPreview}>
      <div
        className={styles.previewBox}
        onClick={onClick}
        onMouseEnter={() => setIsOver(true)}
        onMouseLeave={() => setIsOver(false)}
      >
        <VideoBox className={styles.video} />
        <ImageBox src={project.imgUrl} className={isOver ? styles.hide : ''} />
      </div>
      <div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <button onClick={onClick}>more</button>
      </div>
    </div>
  );
}

export default ProjectPreview;
