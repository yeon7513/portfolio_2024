import React from 'react';
import Introduce from '../components/Introduce';
import Skill from '../components/Skill';
import { Inner, Title } from '../components/StyledComponent';
import '../scss/about.scss';

const AboutMe = () => {
  return (
    <section className="about">
      <Inner>
        <Title>
          <span>about me</span>
        </Title>
        <Introduce />
        <Skill />
      </Inner>
    </section>
  );
};

export default AboutMe;
