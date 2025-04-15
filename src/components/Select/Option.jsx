const Option = ({ value, children, onSelect }) => {
  return (
    <div
      className="hover:bg-neutral-3 cursor-pointer rounded-md px-2 py-1 text-black hover:text-white"
      onClick={() => onSelect(value)}
    >
      <span className="font-semibold text-nowrap">{children}</span>
    </div>
  );
};

export default Option;
