import React from 'react';
import TopBar from './TopBar';
import MainHeader from './MainHeader';
import Container from '../Container';

const Header = () => {
  return (
    <header id="header-container" className="sticky top-0">
      <Container>
        <TopBar />
        <MainHeader />
      </Container>
    </header>
  );
};

export default Header;
