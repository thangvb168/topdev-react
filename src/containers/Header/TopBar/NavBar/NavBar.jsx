import Button from '@/components/Button';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const NavBar = () => {
  return (
    <>
      <div className="block lg:hidden">
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className="hidden items-center gap-2 lg:flex">
        <Button variant="link" color="white" href="#" className="botton-label">
          Việc làm IT
        </Button>
        <Button variant="link" color="white" href="#" className="botton-label">
          Tạo CV
        </Button>
        <Button variant="link" color="white" href="#" className="botton-label">
          Công Ty IT
        </Button>
        <Button variant="link" color="white" href="#" className="botton-label">
          Trắc nghiệm tính cách
        </Button>
        <Button variant="link" color="white" href="#" className="botton-label">
          Blog
        </Button>
        <Button variant="link" color="white" href="#" className="botton-label">
          Việc làm IT <span className="text-primary">Fresher</span>
        </Button>
      </div>
    </>
  );
};

export default NavBar;
