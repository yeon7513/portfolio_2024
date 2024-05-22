import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import NotFound404 from './pages/NotFound404';
import ProjectItem from './components/ProjectItem';
import Language from './pages/Language';
import './scss/common.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/aboutMe' element={<AboutMe />} />
          <Route path='/projects' element={<Projects />}>
            <Route path=':langs' element={<Language />}>
              <Route path=':name' element={<ProjectItem />} />
            </Route>
          </Route>
          <Route path='/contact' element={<Contact />} />
        </Route>
        <Route path='/*' element={<NotFound404 />} />
      </Routes>
    </>
  );
}

export default App;
