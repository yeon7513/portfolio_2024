import React from 'react';

import Container from '../../components/layout/container/Container';
import styles from './Home.module.scss';
import Introduce from './introduce/Introduce';
import MainContent from './main-content/MainContent';

function Home() {
  return (
    <div className={styles.home}>
      <Container>
        <Introduce />
        <MainContent />
      </Container>
    </div>
  );
}

export default Home;
