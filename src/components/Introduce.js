import React from 'react';
import { Circle, Article, Inner } from './StyledComponent';
import { ReactTyped } from 'react-typed';
import { Link } from 'react-router-dom';

const Introduce = () => {
  return (
    <Article className='intro-me'>
      <Inner>
        <div className="intro-title">
          <ReactTyped
            className='intro-typed'
            strings={["Hello World!"]}
            typeSpeed={80}
            backSpeed={80}
            loop={true}
          />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem velit cupiditate facere eveniet voluptatibus et praesentium distinctio laudantium dolores eaque cumque, facilis autem deserunt numquam ullam quidem molestias tenetur non nisi adipisci animi perspiciatis, quaerat itaque? Cupiditate, eveniet dolores tempora facere inventore provident debitis ipsa aliquam, hic assumenda incidunt molestias quibusdam veniam beatae magnam. Aspernatur itaque, molestiae voluptates non soluta unde inventore ducimus, laboriosam, ullam accusamus optio deleniti facilis dolor eveniet reiciendis. Repudiandae corporis atque vel fugiat impedit reiciendis voluptate! Illo pariatur voluptatum corrupti at non quaerat blanditiis labore incidunt expedita molestias, modi vero fugiat minus. Earum commodi magni explicabo!
          </p>
        </div>
        <div className="intro-content">
          <div className='pic'>
            <Circle className='big'></Circle>
            <Circle className='small'></Circle>
          </div>
          <div className='con'>
            <div>
              <p>name</p>
              <span>문희연</span>
            </div>
            <div>
              <p>birth</p>
              <span>1991.11.14</span>
            </div>
            <div>
              <p>addr</p>
              <span>대전시 대덕구 송촌동</span>
            </div>
            <div>
              <p>cv</p>
              <Link to="">이력서 보기</Link>
            </div>
            <div>
              <p>git</p>
              <Link to="">Github 보기</Link>
            </div>
          </div>
        </div>
        <div className='bg-text'>
          <span>Let me</span>
          <span>introduce myself</span>
        </div>
      </Inner>
    </Article>
  );
}

export default Introduce;
