import React, { useState } from 'react';
import Option from './Option';
import Group from './Group';
import Button from '../Button';

const Select = ({ value, placeholder, onChange, children }) => {
  const [open, setOpen] = useState(false);

  const handleSelect = newValue => {
    onChange(newValue);
    setOpen(false);
  };

  const clonedChildren = React.Children.map(children, child => {
    if (!React.isValidElement(child)) return child;

    return React.cloneElement(child, { onSelect: handleSelect });
  });

  return (
    <div className="relative inline-block w-full">
      <Button
        size="md"
        color="neutral"
        fullWidth={true}
        onClick={() => setOpen(!open)}
      >
        <span className="line-clamp-1">{value || placeholder}</span>
      </Button>

      {open && (
        <div className="absolute z-10 mt-1 w-full rounded border bg-white p-2 shadow">
          {clonedChildren}
        </div>
      )}
    </div>
  );
};

Select.Option = Option;
Select.Group = Group;

export default Select;
