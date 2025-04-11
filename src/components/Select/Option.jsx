const Option = ({ value, children, onSelect }) => {
  return (
    <div
      className="cursor-pointer px-2 py-1 hover:bg-gray-100"
      onClick={() => onSelect(value)}
    >
      <span className="text-nowrap">{children}</span>
    </div>
  );
};

export default Option;
