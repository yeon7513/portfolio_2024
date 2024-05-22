import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { item } from '../data/item';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

const Language = () => {
  const {langs} = useParams();
  const projects = item[langs] || {};

  return (
    <>
      <h2>{langs} Projects</h2>
      <Outlet />
      <div className='project-slide'>
        <Swiper
          slidesPerView={3}
          grid={{
            rows: 2
          }}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination]}
          className="mySwiper"
        >
          {Object.entries(projects).map(([key, project]) => (
            <SwiperSlide key={key}>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div>
                <ul>
                  <li>
                    <Link className='btn link-btn' to={project.demo} target='_blank'>demo</Link>
                  </li>
                  <li>
                    <Link className='btn link-btn' to={project.git} target='_blank'>github</Link>
                  </li>
                </ul>
                <div>
                  <Link className='btn preview-btn' to={`${key}`}>preview</Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Language;
