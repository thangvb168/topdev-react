import React, { useEffect, useRef, useState } from 'react';
import Option from './Option';
import Group from './Group';
import Button from '../Button';

const Select = ({ value, placeholder, onChange, children }) => {
  const [open, setOpen] = useState(false);
  const optRef = useRef(null);

  const handleClickOutside = e => {
    if (optRef.current && !optRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = newValue => {
    onChange(newValue);
    setOpen(false);
  };

  const childrenElem = React.Children.map(children, child => {
    if (!React.isValidElement(child)) return child;

    return React.cloneElement(child, { onSelect: handleSelect });
  });

  return (
    <div className="relative inline-block w-full">
      <Button size="md" color="neutral" block onClick={() => setOpen(!open)}>
        <span className="line-clamp-1 font-semibold">
          {value || placeholder}
        </span>
      </Button>

      {open && (
        <div
          ref={optRef}
          className="bg-neutral-2 absolute z-10 mt-1 w-full rounded p-2 shadow"
        >
          {childrenElem}
        </div>
      )}
    </div>
  );
};

Select.Option = Option;
Select.Group = Group;

export default Select;
