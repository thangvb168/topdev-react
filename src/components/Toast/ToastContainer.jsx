import clsx from 'clsx';
import React, { useState } from 'react';
import ToastItem from './ToastItem';

const ToastContainer = props => {
  const {
    toasts = [],
    position = 'top-right',
    removeToast,
    duration,
    closeButton,
  } = props;

  const positionClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'top-center': 'top-4 left-1/2 transform -translate-x-1/2',
    'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2',
  };

  return (
    <div
      className={clsx(
        'fixed z-[1000] flex h-fit w-fit flex-col',
        positionClasses[position] || positionClasses['top-right']
      )}
    >
      {toasts.map(toast => (
        <ToastItem
          id={toast.id}
          key={toast.id}
          message={toast.message}
          type={toast.type}
          duration={toast.duration ? toast.duration : duration}
          removeToast={removeToast}
          closeButton={closeButton}
        />
      ))}
    </div>
  );
};

export default ToastContainer;
