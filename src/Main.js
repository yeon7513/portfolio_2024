import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import NotFound404 from './pages/NotFound404';
import Home from './pages/home/Home';
import './scss/global.scss';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/*" element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
