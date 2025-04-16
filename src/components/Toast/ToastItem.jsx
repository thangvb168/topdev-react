import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faTriangleExclamation,
  faX,
} from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

const ToastItem = props => {
  const {
    id,
    message = 'Toast Message',
    closeButton = true,
    icon = true,
    duration = 3000,
    type,
    removeToast,
  } = props;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const hideTimer = setTimeout(() => {
      setIsVisible(false);

      setTimeout(() => {
        removeToast(id);
      }, 300);
    }, duration);

    return () => {
      clearTimeout(hideTimer);
      setIsVisible(false);
    };
  }, [duration, id]);

  const iconType = {
    success: (
      <span className="text-success-1">
        <FontAwesomeIcon icon={faCheckCircle} />
      </span>
    ),
    error: (
      <span className="text-error-1">
        <FontAwesomeIcon icon={faX} />
      </span>
    ),
    warning: (
      <span className="text-warning-1">
        <FontAwesomeIcon icon={faTriangleExclamation} />
      </span>
    ),
  };

  return (
    <div
      className={clsx(
        'bg-background flex w-80 transform flex-col items-center rounded-md shadow-lg transition-all duration-300 ease-in-out',
        isVisible
          ? 'visible mb-2 max-h-40 translate-x-0 px-4 py-2 opacity-100'
          : 'pointer-events-none invisible mb-0 max-h-0 translate-x-full p-0 opacity-0'
      )}
    >
      <div className="w-full text-end leading-0">
        {closeButton && (
          <button
            className="hover:text-primary ms-auto"
            onClick={() => {
              setIsVisible(false);
              setTimeout(() => {
                removeToast(id);
              }, 300);
            }}
          >
            <FontAwesomeIcon icon={faX} />
          </button>
        )}
      </div>
      <div
        className={clsx(
          'mb-4 flex w-full items-center justify-start',
          icon && 'gap-2'
        )}
      >
        {icon && (
          <span className="text-2xl">
            {type === 'success' && iconType.success}
            {type === 'error' && iconType.error}
            {type === 'warning' && iconType.warning}
          </span>
        )}
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ToastItem;
