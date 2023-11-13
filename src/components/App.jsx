import { Component } from "react";
import { nanoid } from "nanoid";
import { GlobalStyle } from "./GlobalStyle";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { ContactFilter } from "./ContactFilter/ContactFilter";
import { SectionTitle, Layout } from "./App.styled";

const storageKey = 'contact-list'

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    
  }

  componentDidMount() {
    const savedContacts = window.localStorage.getItem(storageKey);
    if (savedContacts !== null) { 
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    }

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      window.localStorage.setItem(storageKey, JSON.stringify(this.state.contacts))
     }
  }

  addCard =
    newContact => {
      if (this.state.contacts.some(contact => contact.name === newContact.name)) {
        alert(`Name ${newContact.name} is already exist in your Contacts`)
      }
      else {
        const contact = {
          ...newContact,
          id: nanoid(),
        };
        this.setState(prevState => {
          return {
            contacts: [...prevState.contacts, contact],
          };
        });
      }
    }
  
  deleteCard = (cardId) => {
    this.setState(prevState => {
      return { contacts: prevState.contacts.filter(contact => contact.id !== cardId) }
    })

  };

  updateListFilter = newList => {
    this.setState({ filter: newList })
  };
  

  resetFilter = () => {
  this.setState(prevState => ({
    contacts: prevState.contacts,
    filter: '',
  }));
}
  

  render() {

    const { contacts, filter } = this.state;

    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

    
    
    return (
      <div>
        <Layout>
        <SectionTitle>Phonebook</SectionTitle>
        <ContactForm onAdd={this.addCard} />
        <SectionTitle>Contacts</SectionTitle>
        <ContactFilter name={filter} onUpdateList={this.updateListFilter} onResetFilter={ this.resetFilter} />
        {visibleContacts.length>0 && <ContactList contacts={visibleContacts} onDelete={ this.deleteCard} /> }
          <GlobalStyle />
          </Layout>
      </div>
    );
  }
 
}
;

