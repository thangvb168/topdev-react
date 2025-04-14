import React, { Children } from 'react';
import clsx from 'clsx';
import Spinner from '../Spinner';

/**
 *
 * @param {{
 *   type: 'button' | 'submit';
 *   color: 'primary' | 'success' | 'neutral' | 'default';
 *   variant: 'solid' | 'outlined' | 'dashed' | 'filled' | 'text' | 'link';
 *   size: 'sm' | 'md' | 'lg' | 'xl';
 *   shape: 'default' | 'square' | 'circle' | 'round';
 *   block: boolean;
 *   align: 'left' | 'center' | 'right';
 *   href: string | null;
 *   isLoading: boolean;
 *   disabled: boolean;
 *   onClick: function;
 *   onBlur: function;
 *   onFocus: function;
 *   className: string;
 *   children: ReactNode;
 *   icon: ReactNode;
 * }} props
 * @returns
 */
const Button2 = props => {
  let {
    type = 'button',
    color = 'default',
    variant = 'solid',
    size = 'md',
    shape = 'default',
    block = false,
    align = 'center',
    href = null,
    icon = null,
    isLoading = false,
    disabled = false,
    onClick = () => {},
    onBlur = () => {},
    onFocus = () => {},
    className = '',
    children,
  } = props;

  let colorClasses = {
    default: {
      '--btn-color': 'var(--color-dark)',
      '--btn-text': 'var(--color-white)',
    },
    primary: { '--btn-color': 'var(--color-primary)' },
    success: { '--btn-color': 'var(--color-success-1)' },
    white: { '--btn-color': 'var(--color-white)' },
    neutral: { '--btn-color': 'var(--color-neutral-1)' },
  };

  let variantClasses = {
    solid: { backgroundColor: 'var(--btn-color)', color: 'var(--btn-text)' },
    outlined: {
      backgroundColor: 'transparent',
      color: 'var(--btn-color)',
      border: '1px solid var(--btn-color)',
    },
    dashed: {
      backgroundColor: 'transparent',
      color: 'var(--btn-color)',
      border: '1px dashed var(--btn-color)',
    },
    filled: {
      backgroundColor: 'var(--btn-color)',
      border: '1px solid var(--btn-color)',
      color: 'var(--btn-text)',
    },
    text: {
      backgroundColor: 'transparent',
      color: 'var(--btn-color)',
      border: 'none',
    },
    link: {
      backgroundColor: 'transparent',
      color: 'var(--btn-color)',
      border: 'none',
    },
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl',
  };

  // const fullWidthClass = fullWidth ? 'w-full' : 'w-fit';

  const shapeClasses = {
    default: 'rounded-md',
    square: 'rounded-none',
    circle: 'rounded-full',
    round: 'rounded-lg',
  };

  const displayClass = block
    ? 'flex items-center w-full'
    : 'inline-flex items-center';

  const alignClass = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  };

  const disabledClass = disabled
    ? 'cursor-not-allowed opacity-50'
    : 'cursor-pointer';

  const btnClass = clsx(
    'transition duration-150 ease-in-out',
    displayClass,
    alignClass[align] || alignClass.center,
    disabledClass,
    sizeClasses[size] || sizeClasses.md,
    shapeClasses[shape] || shapeClasses.default,
    className
  );

  const handleClick = e => {
    if (disabled) return;
    onClick(e);
  };

  const handleBlur = e => {
    if (disabled) return;
    onBlur(e);
  };

  const handleFocus = e => {
    if (disabled) return;
    onFocus(e);
  };

  return variant === 'link' ? (
    <a
      href={href}
      style={{
        ...(colorClasses[color] || colorClasses.default),
        ...(variantClasses[variant] || variantClasses.link),
      }}
      className={btnClass}
      onClick={handleClick}
      onBlur={handleBlur}
      onFocus={handleFocus}
    >
      {isLoading && (
        <span className="mr-2">
          <Spinner size={size} />
        </span>
      )}
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </a>
  ) : (
    <button
      type={type}
      style={{
        ...(colorClasses[color] || colorClasses.default),
        ...(variantClasses[variant] || variantClasses.solid),
      }}
      className={btnClass}
      onClick={handleClick}
      onBlur={handleBlur}
      onFocus={handleFocus}
    >
      {isLoading && (
        <span className="mr-2">
          <Spinner size={size} />
        </span>
      )}
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button2;
