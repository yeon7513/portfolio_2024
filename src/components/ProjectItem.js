import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { item } from '../data/item';

const ProjectItem = () => {
  const { langs, name } = useParams();
  const project = item[langs][name];
  
  return(
    <div className='item-wrap'>
      <h3>{project.title}</h3>
      <div>
        <h4>프로젝트 소개</h4>
        <p>{project.desc}</p>
      </div>
      <div>
        <h4>개발 기간</h4>
        <p>{project.period}</p>
      </div>
      <div>
        <h4>사용 스킬</h4>
        <p>{project.skill}</p>
      </div>
      <div>
        <Link className='btn link-btn' to={project.demo} target='_blank'>demo</Link>
        <Link className='btn link-btn' to={project.git} target='_blank'>github</Link>
      </div>
    </div>
  )
}


export default ProjectItem;
