import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';

/**
 *
 * @param {{
 *   children: React.ReactNode,
 *   menu: Array<{
 *     label: React.ReactNode,
 *     key: string | number
 *   }>
 *   trigger: 'click' | 'hover',
 *   className: string,
 *   position: 'top-left' | 'top-right' | 'top-center' |'bottom-left' | 'bottom-right' | 'bottom-center' | 'right-center' | 'left-center'
 *   fullWidth: boolean
 * }} props
 * @returns
 */
const Dropdown = props => {
  const {
    children,
    menu = [],
    trigger = 'click',
    className = '',
    position = 'bottom-right',
    fullWidth = true,
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const handleClickOutside = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const handleClick = () => {
    if (trigger === 'click') {
      setIsOpen(!isOpen);
    }
  };

  const handleHover = () => {
    if (trigger === 'hover') {
      setIsOpen(true);
    }
  };

  const handleLeave = () => {
    if (trigger === 'hover') {
      setIsOpen(false);
    }
  };

  const renderMenu = menu => {
    return menu.map((item, index) => {
      return (
        <div
          key={item.key || index}
          className="hover:bg-neutral-4 cursor-pointer rounded-md p-2 transition-colors duration-200"
          onClick={item.onClick}
        >
          {item.label}
        </div>
      );
    });
  };

  const positionClasses = {
    'top-left': 'bottom-full left-0',
    'top-right': 'bottom-full right-0',
    'top-center': 'bottom-full left-1/2 transform -translate-x-1/2',
    'bottom-left': 'top-full left-0',
    'bottom-right': 'top-full right-0',
    'bottom-center': 'top-full left-1/2 transform -translate-x-1/2',
    'right-center': 'left-full top-1/2 transform -translate-y-1/2',
    'left-center': 'right-full top-1/2 transform -translate-y-1/2',
  };

  const fullWidthClasses = fullWidth ? 'w-full' : 'w-48 min-w-full';

  useEffect(() => {
    if (isOpen && trigger === 'click') {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, trigger]);

  return (
    <div
      className={`relative inline-block ${className}`}
      ref={ref}
      onClick={handleClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div className="cursor-pointer">{children}</div>

      <div
        className={clsx(
          'absolute z-10 transform overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg transition-all duration-200 ease-in-out',
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
          positionClasses[position] || 'top-full left-0',
          fullWidthClasses
        )}
      >
        <div className="p-1">{renderMenu(menu)}</div>
      </div>
    </div>
  );
};

export default Dropdown;
