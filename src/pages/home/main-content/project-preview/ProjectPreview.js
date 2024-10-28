import React, { useRef, useState } from 'react';
import VideoBox from '../../../../components/video-box/VideoBox';
import ImageBox from './../../../../components/image-box/ImageBox';
import styles from './ProjectPreview.module.scss';

function ProjectPreview({ onClick, project }) {
  const [isOver, setIsOver] = useState(false);
  const videoRef = useRef();

  const handleMouseEnter = () => {
    setIsOver(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.load();
    }
  };

  const handleMouseLeave = () => {
    setIsOver(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className={styles.projectPreview}>
      <div
        className={styles.previewBox}
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <VideoBox
          className={styles.video}
          src={project.videoUrl}
          ref={videoRef}
        />
        <ImageBox src={project.imgUrl} className={isOver ? styles.hide : ''} />
      </div>
      <div className={styles.content}>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <button onClick={onClick}>more</button>
      </div>
    </div>
  );
}

export default ProjectPreview;
