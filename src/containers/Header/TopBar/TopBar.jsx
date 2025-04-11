import React from 'react';
import Container from '@/containers/Container';
import NavBar from './NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faUsers,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

const TopBar = () => {
  return (
    <div id="top-nav-container" className="bg-dark text-white">
      <Container>
        <div className="hidden items-center gap-8 py-2 md:flex">
          <div className="grow">
            <NavBar />
          </div>
          <div className="flex gap-8">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon size="lg" icon={faPhone} />
              <span className="body-2">028.6273.3496</span>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon size="lg" icon={faUsers} />
              <span className="body-2">Đăng tuyển</span>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon size="lg" icon={faEnvelope} />
              <span className="body-2">Liên hệ</span>
            </div>
          </div>
          <img
            className="size-6 rounded-full"
            src="/img/lang/en.png"
            alt="En"
          />
        </div>
      </Container>
    </div>
  );
};

export default React.memo(TopBar);
