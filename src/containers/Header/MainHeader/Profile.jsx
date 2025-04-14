import Dropdown from '@/components/Dropdown';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Profile = props => {
  const { user, logout } = props;

  const handleLogout = () => {
    logout();
  };

  const menu = [
    {
      label: <button onClick={handleLogout}>Logout</button>,
      key: '0',
    },
  ];

  return (
    <Dropdown menu={menu} trigger="click">
      <div className="flex gap-3 rounded-2xl px-2 py-3 md:bg-black">
        <img
          className="size-10 rounded-full object-cover"
          src={user.avatar}
          alt="Avatar Image"
        />
        <div className="flex flex-col justify-between">
          <div className="small-headline text-primary md:text-neutral-3">
            {user.name}
          </div>
          <div className="botton-label text-black md:text-white">
            {user.area}
          </div>
        </div>
        <div className="flex items-center text-black md:text-white">
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
    </Dropdown>
  );
};

export default Profile;
