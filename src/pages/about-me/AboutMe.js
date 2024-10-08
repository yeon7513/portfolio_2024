import React from 'react';
import Container from './../../components/layout/container/Container';
import styles from './AboutMe.module.scss';
import Infomation from './infomation/Infomation';
import Profile from './profile/Profile';
import Stack from './stack/Stack';

function AboutMe() {
  return (
    <div className={styles.about}>
      <Container className={styles.container}>
        <div className={styles.info}>
          <Infomation />
          <Profile />
        </div>
        <Stack />
      </Container>
    </div>
  );
}

export default AboutMe;
