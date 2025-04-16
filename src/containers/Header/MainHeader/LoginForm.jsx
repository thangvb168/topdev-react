import Button from '@/components/Button';
import React, { useEffect, useRef, useState } from 'react';
import { z } from 'zod';

const LoginForm = ({ action, onClose }) => {
  const formRef = useRef(null);

  const loginSchema = z.object({
    email: z.string().email('Email không hợp lệ').nonempty('Email là bắt buộc'),
    password: z
      .string()
      .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
      .nonempty('Mật khẩu là bắt buộc'),
  });

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    const handleClickOutside = e => {
      if (formRef.current && !formRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      loginSchema.parse(formData);

      await action(formData);
      setFormData({ email: '', password: '' });
      onClose();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors = {};
        error.errors.forEach(err => {
          formattedErrors[err.path[0]] = err.message;
        });
        setErrors(formattedErrors);
      }

      if (error.message === 'User not found') {
        setErrors(prev => ({ ...prev, email: 'Tài khoản không tồn tại' }));
      }
      if (error.message === 'Incorrect password') {
        setErrors(prev => ({ ...prev, password: 'Sai mật khẩu' }));
      }
    }
  };

  return (
    <div
      className="mx-6 w-full max-w-md rounded-lg bg-white p-8 shadow-lg"
      ref={formRef}
    >
      <div className="mb-8 text-center">
        <h1 className="bg-gradient-to-r from-[#eb2702] from-[3%] via-[#ff7d25] via-75% to-[#FF9D5A] bg-clip-text text-4xl font-bold text-transparent">
          Đăng nhập
        </h1>
        <p className="mt-2 text-gray-500">
          Vui lòng đăng nhập vào tài khoản của bạn
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Địa chỉ Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="focus:ring-primary w-full rounded-md px-4 py-2 focus:ring-2 focus:outline-none"
            placeholder="john@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        <div className="mb-6">
          <div className="mb-1 flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Mật khẩu
            </label>
            <a
              href="#"
              className="text-primary-lc-1 hover:text-primary text-sm"
            >
              Quên mật khẩu?
            </a>
          </div>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="focus:ring-primary w-full rounded-md px-4 py-2 focus:ring-2 focus:outline-none"
            placeholder="••••••••"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">{errors.password}</p>
          )}
        </div>

        <div className="mb-6">
          <Button block type="submit" color="primary">
            <span className="font-semibold text-white">Đăng nhập</span>
          </Button>
        </div>

        <div className="text-center text-sm text-gray-600">
          Bạn chưa có tài khoản?
          <a href="#" className="text-primary-lc-2 hover:text-primary ml-1">
            Đăng ký
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
