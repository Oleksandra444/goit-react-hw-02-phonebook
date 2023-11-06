import { ContactFilterWrapper, ContactFilterButton, ContactFilterInput } from "./ContactFilter.styled";

export const ContactFilter = ({
  name,
  onUpdateList,
  onResetFilter,
}) => {
  return (
    <ContactFilterWrapper>
      <ContactFilterInput
        type="text"
        value={name}
        onChange={evt => onUpdateList(evt.target.value)}
        placeholder="SEARCH"
      />
      
      <ContactFilterButton type = "button" onClick={onResetFilter}>Reset search</ContactFilterButton>
    </ContactFilterWrapper>
  );
};
