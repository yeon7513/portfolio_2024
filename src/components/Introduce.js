import React from 'react';
import { Link } from 'react-router-dom';
import { ReactTyped } from 'react-typed';
import { Article, Inner } from './StyledComponent';

const Introduce = () => {
  return (
    <Article className="intro-me">
      <Inner>
        <div className="info">
          <div className="picture">picture</div>
          <div className="info-contents">
            <div className="name">
              <p>Hello World!</p>
              <p>
                성장하는 개발자, <span>문희연</span> 입니다.
              </p>
            </div>
            <div className="personal">
              <ul>
                <li>1991.11.14</li>
                <li>010-7557-0533</li>
                <li>
                  <Link>이력서</Link>
                </li>
                <li>
                  <Link>깃허브</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="intro-title">
          <ReactTyped
            className="intro-typed"
            strings={["Curiosity is \nlife's most powerful engine."]}
            typeSpeed={50}
            backSpeed={30}
            backDelay={5000}
            loop={true}
          />
          <div className="intro-desc">
            <p>"호기심은 삶의 가장 강력한 원동력이다."</p>
            <p>
              비전공자로 처음 접한 프로그래밍은 저에게 새로운 세상을
              열어주었습니다.
              <br />
              단순히 코드 작성에 그치지 않고, 그 이면에 있는 원리와 구조에 대해
              궁금해졌습니다.
              <br />
              이 호기심은 저를 성장시키는 강력한 엔진이 되었습니다.
              <br />
              새로운 기술 스택과 프레임워크를 배우는 과정은 저에게 큰
              즐거움이었고, 큰 영감을 주었습니다.
              <br />
              앞으로도 저는 호기심을 엔진 삼아 끊임없이 배우고 성장할 것입니다.
            </p>
          </div>
        </div>
      </Inner>
    </Article>
  );
};

export default Introduce;
