import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Inner, Title } from '../components/StyledComponent';
import '../scss/projects.scss';

const Projects = () => {
  return (
    <section className="project">
      <Inner>
        <Title>project</Title>
        <div className="project-desc">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            quisquam vero fugiat tenetur recusandae? Voluptatibus pariatur illo
            doloremque id iure inventore, veniam labore, suscipit unde
            voluptate, quia porro eaque provident.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            quisquam vero fugiat tenetur recusandae? Voluptatibus pariatur illo
            doloremque id iure inventore, veniam labore, suscipit unde
            voluptate, quia porro eaque provident.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            quisquam vero fugiat tenetur recusandae? Voluptatibus pariatur illo
            doloremque id iure inventore, veniam labore, suscipit unde
            voluptate, quia porro eaque provident.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            quisquam vero fugiat tenetur recusandae? Voluptatibus pariatur illo
            doloremque id iure inventore, veniam labore, suscipit unde
            voluptate, quia porro eaque provident.
          </p>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/projects/js">javascript</Link>
            </li>
            <li>
              <Link to="/projects/react">react</Link>
            </li>
          </ul>
        </nav>
        <div className="contents">
          <Outlet />
        </div>
      </Inner>
    </section>
  );
};

export default Projects;
