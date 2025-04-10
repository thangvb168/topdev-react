import React from 'react';
import TopBar from './TopBar';
import MainHeader from './MainHeader';
import Container from '../Container';

const Header = () => {
  return (
    <header id="header-container" className="sticky top-0 z-[100]">
      <TopBar />
      <MainHeader />
    </header>
  );
};

export default Header;
