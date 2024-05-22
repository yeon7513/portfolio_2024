import React from 'react';
import Introduce from '../components/Introduce';
import Skill from '../components/Skill';
import "../scss/about.scss";
import { Inner, Title } from '../components/StyledComponent';

const AboutMe = () => {
  return (
    <section className='about'>
      <Inner>
        <Title>
          <span>about me</span>
        </Title>
        <Introduce />
        <Skill />
      </Inner>
    </section>
  );
}

export default AboutMe;
