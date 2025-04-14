import React, { useState } from 'react';
import Container from '@/containers/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import Profile from './Profile';
import { useAuth } from '@/contexts/AuthContext';
import Button from '@/components/Button';
import LoginForm from './LoginForm';

const MainHeader = () => {
  const [notiCount, setNotiCount] = useState(99);
  const [showLogin, setShowLogin] = useState(false);

  const handleOpenLogin = () => {
    setShowLogin(true);
  };

  const { login, logout, user } = useAuth();

  return (
    <>
      {showLogin ? (
        <div className="bg-dark/70 fixed top-0 z-[999] flex h-full w-full items-center justify-center">
          <LoginForm action={login} onClose={() => setShowLogin(false)} />
        </div>
      ) : (
        <></>
      )}
      <div id="main-header-container" className="mt-8 bg-white md:mt-0 md:py-4">
        <Container>
          <div className="flex h-full items-center justify-between">
            <div className="hidden md:block">
              <img
                src="https://c.topdevvn.com/v4/assets/images/td-logo.png"
                alt="Logo Topdev"
                className="h-10 w-full object-cover"
              />
            </div>
            <div className="flex grow flex-row-reverse items-center justify-between md:grow-0 md:flex-row md:gap-8">
              <div className="relative">
                <FontAwesomeIcon size="2xl" icon={faBell} />
                <div className="absolute -top-0.5 left-1/2 flex items-center justify-center rounded-2xl bg-[#FF1D1D] px-1 py-[2px] text-white">
                  <span className="extra-small">{notiCount}+</span>
                </div>
              </div>
              {user ? (
                <Profile user={user} logout={logout} />
              ) : (
                <Button color="primary" onClick={handleOpenLogin}>
                  <span className="text-white">Login</span>
                </Button>
              )}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default MainHeader;
