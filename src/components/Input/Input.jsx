import React from 'react';

/**
 * @param {{
 *    type?: string,
 *    placeholder?: string,
 *    size?: 'small' | 'default' | 'large' | 'extra'| 'full' | 'auto',
 *    disabled?: boolean,
 *    bordered?: boolean,
 *    suffix?: React.ReactNode,
 *    className?: string,
 *    onChange?: function,
 *    onBlur?: function,
 *    onFocus?: function,
 * }} props
 */
const Input = props => {
  const {
    type = 'text',
    placeholder,
    size = 'default',
    disabled = false,
    bordered = false,
    suffix = null,
    className = '',
    onChange,
    onBlur,
    onFocus,
  } = props;

  const sizeClasses = {
    small: 'h-6 text-sm',
    default: 'h-8 text-base py-1',
    large: 'h-10 text-lg',
    extra: 'h-12 text-xl',
    auto: 'h-auto text-base',
    full: 'h-full text-base',
  };

  const sizeClass = sizeClasses[size] || sizeClasses.default;

  const wrapperClass = `
    flex items-center bg-neutral-2 rounded-lg px-8 gap-6 py-[1px]
    ${sizeClass} 
    ${bordered ? 'border border-neutral-4' : ''} 
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''} 
    ${className}
  `;

  const inputClass = `
    w-full h-full bg-transparent outline-none placeholder:text-neutral-6 body-1
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
  `;

  return (
    <div className={wrapperClass}>
      {suffix && suffix}
      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        className={inputClass}
      />
    </div>
  );
};

export default Input;
