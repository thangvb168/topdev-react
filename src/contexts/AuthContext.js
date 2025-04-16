import request from '@/utils/request';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useToast } from './ToastContext';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const { toast } = useToast();

  useEffect(() => {
    const storedToken = localStorage.getItem('access-token');
    if (storedToken) {
      setToken(storedToken);
    }
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async data => {
    try {
      // Fake login request
      const { email, password } = data;

      const response = await request.get('/users');
      let user = response.find(user => user.email === email);

      if (!user) {
        throw new Error('User not found');
      }

      if (user.password !== password) {
        throw new Error('Incorrect password');
      }

      setToken(user['access-token']);
      localStorage.setItem('access-token', user['access-token']);
      delete user['access-token'];
      delete user['password'];
      user.area = 'UI/UX';
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
      toast.success({
        msg: 'Đăng nhập thành công',
      });
    } catch (error) {
      console.log('Login error:', error);
      toast.error({
        msg: 'Đăng nhập thất bại',
      });
      throw error;
    }
  };

  const logout = () => {
    setToken('');
    setUser(null);
    localStorage.removeItem('access-token');
    localStorage.removeItem('user');
    toast.success({
      msg: 'Đăng xuất thành công',
    });
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
