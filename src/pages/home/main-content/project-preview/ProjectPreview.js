import React, { useState } from 'react';
import ImageBox from './../../../../components/image-box/ImageBox';
import styles from './ProjectPreview.module.scss';

function ProjectPreview({ onClick, project }) {
  const [isOver, setIsOver] = useState(false);

  return (
    <div className={styles.projectPreview}>
      <div
        className={styles.previewImg}
        onClick={onClick}
        onMouseEnter={() => setIsOver(true)}
        onMouseLeave={() => setIsOver(false)}
      >
        <video muted autoPlay loop>
          <source src="" type="video/mp4" />
        </video>
        <ImageBox src={project.imgUrl} className={isOver ? styles.hide : ''} />
      </div>
      <div>
        <h3>{project.title}</h3>
        <button onClick={onClick}>more</button>
      </div>
    </div>
  );
}

export default ProjectPreview;
