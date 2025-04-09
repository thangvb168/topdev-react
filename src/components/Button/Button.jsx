import React from 'react';
import Spinner from '../Spinner';

const Button = props => {
  let {
    type = 'button',
    onClick = () => {},
    className = '',
    fullWidth = false,
    size = 'sm',
    color = 'sm',
    isDisabled = false,
    isLoading = false,
    isOutline = false,
    isActive = false,
    children,
  } = props;

  const sizeClasses = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
    '2xl': 'px-12 py-6 text-2xl',
  };
  if (!Object.keys(sizeClasses).includes(size)) size = 'sm';
  let sizeClass = sizeClasses[size];

  const colorClasses = {
    primary: {
      solid: {
        base: 'bg-primary text-white',
        hover: 'hover:bg-primary-lc-1',
        focus: 'focus:ring-primary-lc-1',
        active: 'bg-primary-lc-1 text-white',
      },
      outline: {
        base: 'bg-transparent text-primary border border-primary',
        hover: 'hover:bg-primary hover:text-white',
        focus: 'focus:ring-primary',
        active: 'bg-primary text-white',
      },
    },
    success: {
      solid: {
        base: 'bg-success-1 text-white',
        hover: 'hover:bg-success-2',
        focus: 'focus:ring-success-2',
        active: 'bg-success-2 text-white',
      },
      outline: {
        base: 'bg-transparent text-success-1 border border-success-1',
        hover: 'hover:bg-success-1 hover:text-white',
        focus: 'focus:ring-success-1',
        active: 'bg-success-1 text-white',
      },
    },
    warning: {
      solid: {
        base: 'bg-warning-1 text-black',
        hover: 'hover:bg-warning-2',
        focus: 'focus:ring-warning-2',
        active: 'bg-warning-2 text-black',
      },
      outline: {
        base: 'bg-transparent text-warning-1 border border-warning-1',
        hover: 'hover:bg-warning-1 hover:text-black',
        focus: 'focus:ring-warning-1',
        active: 'bg-warning-1 text-black',
      },
    },
    info: {
      solid: {
        base: 'bg-info-1 text-white',
        hover: 'hover:bg-info-2',
        focus: 'focus:ring-info-2',
        active: 'bg-info-2 text-white',
      },
      outline: {
        base: 'bg-transparent text-info-1 border border-info-1',
        hover: 'hover:bg-info-1 hover:text-white',
        focus: 'focus:ring-info-1',
        active: 'bg-info-1 text-white',
      },
    },
    danger: {
      solid: {
        base: 'bg-error-1 text-white',
        hover: 'hover:bg-error-2',
        focus: 'focus:ring-error-2',
        active: 'bg-error-2 text-white',
      },
      outline: {
        base: 'bg-transparent text-error-1 border border-error-1',
        hover: 'hover:bg-error-1 hover:text-white',
        focus: 'focus:ring-error-1',
        active: 'bg-error-1 text-white',
      },
    },
    neutral: {
      solid: {
        base: 'bg-neutral-2 text-neutral-8',
        hover: 'hover:bg-neutral-3',
        focus: 'focus:ring-neutral-3',
        active: 'bg-neutral-3 text-neutral-8',
      },
      outline: {
        base: 'bg-transparent text-neutral-5 border border-neutral-5',
        hover: 'hover:bg-neutral-2 hover:text-neutral-8',
        focus: 'focus:ring-neutral-3',
        active: 'bg-neutral-2 text-neutral-8',
      },
    },
  };

  if (!Object.keys(colorClasses).includes(color)) color = 'primary';
  const variant = isOutline ? 'outline' : 'solid';
  const colorConfig = colorClasses[color][variant];

  let colorClass = `${colorConfig.base} ${colorConfig.hover} ${colorConfig.focus}`;
  if (isActive) {
    colorClass = `${colorConfig.active} ${colorConfig.hover} ${colorConfig.focus}`;
  }

  const baseClasses =
    'inline-flex items-center justify-center rounded-lg focus:outline-none focus:ring-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed';

  const fullWidthClasses = fullWidth ? 'w-full' : '';

  const isActivedClass = isActive ? '' : '';

  return (
    <button
      type={type}
      className={`${baseClasses} ${sizeClass} ${colorClass} ${fullWidthClasses} ${isActivedClass} ${className}`}
      onClick={onClick}
      disabled={isDisabled || isLoading}
    >
      {isLoading && (
        <div className="mr-2">
          <Spinner />
        </div>
      )}
      {children}
    </button>
  );
};

export default Button;
