import React, {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from 'react';
import Option from './Option';
import Group from './Group';
import Button from '../Button';
import clsx from 'clsx';

const Select = props => {
  const { value, placeholder, icon = null, onChange, children } = props;

  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = e => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = newValue => {
    onChange(newValue);
    setOpen(false);
  };

  const childrenElem = Children.map(children, child =>
    isValidElement(child)
      ? cloneElement(child, { onSelect: handleSelect })
      : child
  );

  return (
    <div ref={wrapperRef} className="relative inline-block w-full">
      {icon && (
        <div className="absolute top-1/2 left-2 -translate-y-1/2">{icon}</div>
      )}
      <Button size="md" color="neutral" block onClick={() => setOpen(!open)}>
        <span className={clsx('line-clamp-1 font-semibold', icon && 'pl-3')}>
          {value || placeholder}
        </span>
      </Button>

      {open && (
        <div className="bg-neutral-2 absolute z-10 mt-1 w-auto min-w-full rounded p-2 shadow">
          {childrenElem}
        </div>
      )}
    </div>
  );
};

Select.Option = Option;
Select.Group = Group;

export default Select;
