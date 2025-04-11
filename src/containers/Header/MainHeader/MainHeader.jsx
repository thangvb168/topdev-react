import React, { useState } from 'react';
import Container from '@/containers/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const MainHeader = () => {
  const [notiCount, setNotiCount] = useState(99);

  const [user, setUser] = useState({
    fullName: 'Nguyễn Tiến Đạt',
    avatar:
      'https://i.pinimg.com/736x/21/24/92/21249201424022cdd93cd144f099b056.jpg',
    area: 'UI UX',
  });

  return (
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
              <FontAwesomeIcon size="md" icon={faBell} />
              <div className="absolute -top-0.5 left-1/2 flex items-center justify-center rounded-2xl bg-[#FF1D1D] px-1 py-[2px] text-white">
                <span className="extra-small">{notiCount}+</span>
              </div>
            </div>
            <div className="flex gap-3 rounded-2xl px-2 py-3 md:bg-black">
              <img
                className="size-10 rounded-full object-cover"
                src={user.avatar}
                alt="Avatar Image"
              />
              <div className="flex flex-col justify-between">
                <div className="small-headline text-primary md:text-neutral-3">
                  {user.fullName}
                </div>
                <div className="botton-label text-black md:text-white">
                  {user.area}
                </div>
              </div>
              <div className="flex items-center text-black md:text-white">
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MainHeader;
