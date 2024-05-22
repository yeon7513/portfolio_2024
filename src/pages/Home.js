import React from 'react';
import '../scss/home.scss';
import Introduce from '../components/Introduce';
import Skill from '../components/Skill';
import { Circle, HomeContent } from '../components/StyledComponent';
import Preview from '../components/Preview';

const Home = () => {
  return (
    <section className='home'>
      <HomeContent className='home-content'>
        <div className='home-title'>
          <h2>
            <span>front-end</span>
            <span>developer</span>
            <span>portfolio</span>
          </h2>
          <p>Hello, This is HY's Portfolio.</p>
        </div>
        <div className='aside'>
          <Circle className='big'>
            img?
          </Circle>
          <Circle className='small'>
            color
          </Circle>
        </div>
      </HomeContent>
      <Introduce />
      <Skill />
      <Preview langs="js" />
      <Preview langs="react" />
    </section>
  );
}

export default Home;
