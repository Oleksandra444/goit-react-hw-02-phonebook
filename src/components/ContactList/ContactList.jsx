import { ContactCard } from "components/ContactCard/ContactCard";

export const ContactList = ({ contacts, onDelete}) => { 
    return (<>
        <ul>
            {contacts.map(contact => <li key={contact.id}><ContactCard name={contact.name} number={contact.number} onDelete={onDelete} id={contact.id} /></li>)}    
    </ul>
    
    
    </>)
}