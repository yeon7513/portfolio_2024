import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import ProjectItem from './components/ProjectItem';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Language from './pages/Language';
import NotFound404 from './pages/NotFound404';
import Projects from './pages/Projects';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="aboutMe" element={<AboutMe />} />
          <Route path="projects" element={<Projects />}>
            <Route path=":langs" element={<Language />}>
              <Route path=":name" element={<ProjectItem />} />
            </Route>
          </Route>
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/*" element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
