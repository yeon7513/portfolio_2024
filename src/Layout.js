import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog, faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import { faComments, faEnvelope, faFile } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Main } from './components/StyledComponent';
import './scss/layout.scss';

function LinkList({ goto, children }) {
  return (
    <li>
      <Link to={goto}>{children}</Link>
    </li>
  )
};

const Layout = () => {
  return (
    <div id="wrapper">
      <header>
        <h1><LinkList goto='/'>hy 2024 portfolio.</LinkList></h1>
        <nav>
          <ul>
            <LinkList goto='/'>&lt;home &#47;&gt;</LinkList>
            <LinkList goto='/aboutMe'>&lt;about &#47;&gt;</LinkList>
            <LinkList goto='/projects'>&lt;project &#47;&gt;</LinkList>
            <LinkList goto='/contact'>&lt;contact &#47;&gt;</LinkList>
          </ul>
        </nav>
      </header>
      <Main>
        <Outlet />
      </Main>
      <footer>
        <div className='portfolio-links'>
          <h3>Portfolio List</h3>
          <ul>
            <li>
              <Link className='btn footer-btn' to="/projects/js/numberGuess">Number Guess</Link>
            </li>
            <li>
              <Link className='btn footer-btn' to="/projects/js/fakeKeyboard">Fake Keyboard</Link>
            </li>
            <li>
              <Link className='btn footer-btn' to="">portfolio03</Link>
            </li>
            <li>
              <Link className='btn footer-btn' to="">portfolio04</Link>
            </li>
            <li>
              <Link className='btn footer-btn' to="">portfolio05</Link>
            </li>
            <li>
              <Link className='btn footer-btn' to="">portfolio07</Link>
            </li>
            <li>
              <Link className='btn footer-btn' to="">portfolio08</Link>
            </li>
            <li>
              <Link className='btn footer-btn' to="">portfolio09</Link>
            </li>
            <li>
              <Link className='btn footer-btn' to="">portfolio10</Link>
            </li>
            <li>
              <Link className='btn footer-btn' to="">portfolio11</Link>
            </li>
            <li>
              <Link className='btn footer-btn' to="">portfolio12</Link>
            </li>
          </ul>
        </div>
        <div className='contact-links'>
          <h3>Contact Me</h3>
          <ul>
            <li>
              <Link to="https://github.com/yeon7513" target='_blank'>
                <FontAwesomeIcon icon={faMobileScreen} />
                <span>010-7557-0533</span>
              </Link>
            </li>
            <li>
              <Link to="https://github.com/yeon7513" target='_blank'>
                <FontAwesomeIcon icon={faEnvelope} /> 
                <span>yeon7513@nate.com</span>
              </Link>
            </li>
            <li>
              <Link to="https://github.com/yeon7513" target='_blank'>
                <FontAwesomeIcon icon={faComments} /> 
                <span>yeon7513@kakao.com</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="about-links">
          <h3>About Me</h3>
          <ul>
            <li>
              <Link to="https://github.com/yeon7513" target='_blank'>
                <FontAwesomeIcon icon={faFile} />
              </Link>
            </li>
            <li>
              <Link to="https://github.com/yeon7513" target='_blank'>
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            </li>
            <li>
              <Link to="https://github.com/yeon7513" target='_blank'>
                <FontAwesomeIcon icon={faBlog} />
              </Link>
            </li>
          </ul>
        </div>
        
        <div className='copy'>
          <small>
            Copyright {new Date().getFullYear()}. HY. All Rights Reserved.
          </small>
        </div>
      </footer>
    </div>
  );
}


export default Layout;

