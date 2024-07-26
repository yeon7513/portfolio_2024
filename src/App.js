import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './layout/Footer';
import Header from './layout/Header';

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
