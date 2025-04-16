import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React, { useEffect, useRef } from 'react';
import Button from '../Button';

const Modal = props => {
  let {
    children,
    open = false,
    onOk = () => {},
    onCancel = () => {},
    title = 'Modal Title',
  } = props;

  const modalRef = useRef(null);

  const handleClickOutside = e => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onCancel();
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '15px';
    } else {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'auto';
      modalRef.current = null;
      document.body.style.paddingRight = '0px';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'auto';
      modalRef.current = null;
      document.body.style.paddingRight = '0px';
    };
  }, [open]);

  return (
    <div
      className={clsx(
        'fixed inset-0 z-[1000] flex items-center justify-center bg-black/30',
        open ? 'block' : 'hidden'
      )}
    >
      <div
        ref={modalRef}
        className="w-full rounded-lg bg-white p-4 px-4 md:w-1/3"
      >
        <div className="-mr-2 flex items-center">
          <div className="flex-1 grow text-left text-lg font-semibold text-black">
            {title}
          </div>
          <button
            className="hover:text-primary rounded-full px-2"
            onClick={onCancel}
          >
            <FontAwesomeIcon icon={faX} />
          </button>
        </div>
        <div className="py-6">{children}</div>
        <div className="flex justify-end gap-2">
          <Button variant="outlined" onClick={onCancel}>
            Hủy bỏ
          </Button>
          <Button variant="filled" color="primary" onClick={onOk}>
            <span className="font-semibold text-white">Xác nhận</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
