import React from 'react';
import { Circle, Inner, Title } from '../components/StyledComponent';
import '../scss/contact.scss';

const Contact = () => {
  return (
    <section>
      <Inner>
        <Title>contact</Title>
        <div>
          <ul>
            <li>이름</li>
            <li>전화번호</li>
            <li>이메일</li>
            <li>카카오톡</li>
            <li>깃허브</li>
          </ul>
          <div>
            <Circle className="big"></Circle>
            <Circle className="small"></Circle>
          </div>
        </div>
      </Inner>
    </section>
  );
};

export default Contact;
