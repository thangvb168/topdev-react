import request from '@/utils/request';
import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
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
    } catch (error) {
      console.log('Login error:', error);
      throw error;
    }
  };

  const logout = () => {
    setToken('');
    setUser(null);
    localStorage.removeItem('access-token');
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
