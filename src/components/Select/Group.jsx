const Group = ({ label, children }) => {
  return (
    <div className="mb-2">
      <div className="mb-1 text-xs font-semibold text-gray-500">{label}</div>
      <div>{children}</div>
    </div>
  );
};

export default Group;
