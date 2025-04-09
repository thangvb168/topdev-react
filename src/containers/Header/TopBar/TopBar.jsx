import React from 'react';
import Container from '@/containers/Container';
import NavBar from './NavBar';

const TopBar = () => {
  return (
    <div id="top-nav-container">
      <div className="hidden items-center gap-8 md:flex">
        <div className="grow">
          <NavBar />
        </div>
        <div>Info</div>
        <div>Icon</div>
      </div>
    </div>
  );
};

export default React.memo(TopBar);
