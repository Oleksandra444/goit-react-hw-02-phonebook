
export const ContactFilter = ({
  name,
  onUpdateList,
  onResetFilter,
}) => {
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={evt => onUpdateList(evt.target.value)}
        placeholder="Search"
      />
      
      <button type = "button" onClick={onResetFilter}>Reset search</button>
    </div>
  );
};
