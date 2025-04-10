import Container from '@/containers/Container';
import React from 'react';

const MainHeader = () => {
  return (
    <div id="main-header-container">
      <Container>
        <div className="flex h-full items-center justify-between">
          <div className="hidden md:block">Logo</div>
          <div className="flex grow flex-row-reverse justify-between md:grow-0 md:flex-row md:gap-8">
            <div>Icon</div>
            <div>Profile</div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MainHeader;
