import { AuthProvider } from '@/contexts/AuthContext';
import { ToastProvider } from '@/contexts/ToastContext';
import '@/styles/globals.css';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <ToastProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ToastProvider>
  );
}
