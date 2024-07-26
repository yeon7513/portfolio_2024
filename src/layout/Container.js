import cn from 'classnames';
import React from 'react';
import styles from '../scss/Layout.module.scss';

function Container({ className, children }) {
  return <div className={cn(styles.container, className)}>{children}</div>;
}

export default Container;
