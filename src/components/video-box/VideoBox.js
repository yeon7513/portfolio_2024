import cn from 'classnames';
import React, { forwardRef, useEffect } from 'react';
import styles from './VideoBox.module.scss';

const VideoBox = forwardRef(({ src, className }, ref) => {
  useEffect(() => {
    if (ref?.current) {
      ref.current.load();
    }
  }, [src, ref]);

  return (
    <>
      {src ? (
        <video
          muted
          autoPlay
          loop
          className={cn(styles.videoBox, className)}
          ref={ref}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <p className={cn(styles.noVideo, className)}>
          동영상을 재생할 수 없습니다.
        </p>
      )}
    </>
  );
});

export default VideoBox;
