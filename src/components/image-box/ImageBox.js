import cn from 'classnames';
import React from 'react';
import placeholder from '../../assets/img/placeholder_img.jpg';
import styles from './ImageBox.module.scss';

function ImageBox({ src, className }) {
  return (
    <img
      className={cn(styles.imgBox, className)}
      src={src || placeholder}
      alt=""
    />
  );
}

export default ImageBox;
