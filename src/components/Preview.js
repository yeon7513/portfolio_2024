import React from 'react';
import { Link } from 'react-router-dom';
import { item } from '../data/item';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Inner } from './StyledComponent';

const Preview = ({ langs }) => {
  const projects = item[langs] || {};

  return (
    <article className="preview">
      <Inner>
        <h2>{langs} projects</h2>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper preview-slide"
        >
          {Object.entries(projects).map(([name, project]) => (
            <SwiperSlide key={name} className="preview-slide-item">
              <div className="preview-content">
                <h3>{project.title}</h3>
                <div>
                  <h4>프로젝트 소개</h4>
                  <p>{project.desc}</p>
                  <h4>개발 기간</h4>
                  <p>{project.period}</p>
                </div>
                <Link
                  className="btn link-btn"
                  to={`/projects/${langs}/${name}`}
                >
                  {project.title} 보러가기
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Inner>
    </article>
  );
};

export default Preview;
