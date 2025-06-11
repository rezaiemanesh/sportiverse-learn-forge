
import React from 'react';
import Header from '../components/Layout/Header';
import Custom404 from '../components/NotFound/Custom404';

const NotFound = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Custom404 />
    </div>
  );
};

export default NotFound;
