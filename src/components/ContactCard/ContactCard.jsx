import { FcPhoneAndroid } from 'react-icons/fc';
import { ContactCardWrappper, ContactCardValue, ContactCardDelButton,ContactValuedWrappper } from './ContactCard.styled';

export const ContactCard = ({ name, number, onDelete, id }) => { return(
    <>
        <ContactCardWrappper>
            <ContactValuedWrappper>
            <FcPhoneAndroid/>
                <ContactCardValue>{name} : {number}</ContactCardValue>
                </ContactValuedWrappper>
            <ContactCardDelButton onClick={()=>onDelete(id) }>Delete</ContactCardDelButton>
        </ContactCardWrappper>
        
    </>)
}