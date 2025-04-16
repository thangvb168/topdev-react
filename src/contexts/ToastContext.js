import ToastContainer from '@/components/Toast/ToastContainer';

const { createContext, useContext, useState, useCallback } = require('react');

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = props => {
  const {
    children,
    position = 'top-right',
    duration = '3000',
    closeButton = true,
  } = props;
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((msg, type, duration) => {
    const id = Date.now();
    const newToast = {
      id,
      message: msg,
      type,
      duration,
    };

    setToasts(prevToasts => [...prevToasts, newToast]);
  });

  const removeToast = useCallback(id => {
    setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id));
  }, []);

  const toast = {
    success: ({ msg = 'Thành công', duration = null }) => {
      addToast(msg, 'success', duration);
    },
    error: ({ msg = 'Thất bại', duration = null }) => {
      addToast(msg, 'error', duration);
    },
    warning: ({ msg = 'Cảnh báo', duration = null }) => {
      addToast(msg, 'warning', duration);
    },
  };

  const value = {
    toast,
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastContainer
        toasts={toasts}
        position={position}
        removeToast={removeToast}
        duration={duration}
        closeButton={closeButton}
      />
    </ToastContext.Provider>
  );
};
