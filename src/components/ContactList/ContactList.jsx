import { ContactCard } from "components/ContactCard/ContactCard";
import { ContactCardItem } from "./ContactList.styled";


export const ContactList = ({ contacts, onDelete}) => { 
    return (<>
        <ul>
            {contacts.map(contact => <ContactCardItem key={contact.id}><ContactCard name={contact.name} number={contact.number} onDelete={onDelete} id={contact.id} /></ContactCardItem>)}    
    </ul>
    
    
    </>)
}