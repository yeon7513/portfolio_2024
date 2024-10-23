import cn from 'classnames';
import React from 'react';
import styles from './VideoBox.module.scss';

function VideoBox({ src, className }) {
  return (
    <>
      {src ? (
        <video muted autoPlay loop className={cn(styles.videoBox, className)}>
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <p className={styles.noVideo}>동영상을 재생할 수 없습니다.</p>
      )}
    </>
  );
}

export default VideoBox;
