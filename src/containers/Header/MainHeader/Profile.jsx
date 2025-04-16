import Dropdown from '@/components/Dropdown';
import Modal from '@/components/Modal';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const Profile = props => {
  const { user, logout } = props;

  const handleLogout = () => {
    logout();
  };

  const [modalOpen, setModalOpen] = useState(false);

  const onClick = e => {
    e.stopPropagation();
    setModalOpen(true);
  };

  const menu = [
    {
      label: <button>Logout</button>,
      onClick: onClick,
      key: '0',
    },
  ];

  return (
    <>
      <Modal
        title="Xác nhận đăng xuất"
        open={modalOpen}
        onOk={handleLogout}
        onCancel={() => setModalOpen(false)}
      >
        Bạn có chắc chắn muốn đăng xuất không?
      </Modal>
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
    </>
  );
};

export default Profile;
