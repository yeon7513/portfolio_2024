import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { ProjectProvider } from './context/projectContext';
import AboutMe from './pages/about-me/AboutMe';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import NotFound404 from './pages/not-found/NotFound404';
import Projects from './pages/projects/Projects';
import './scss/global.scss';

function Main() {
  return (
    <ProjectProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="/*" element={<NotFound404 />} />
        </Routes>
      </BrowserRouter>
    </ProjectProvider>
  );
}

export default Main;
