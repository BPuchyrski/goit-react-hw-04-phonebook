// import { Component } from 'react';
import ContactForm from './contactForm/ContactForm';
import Filter from './filter/Filter';
import ContactList from './contactList/ContactList';
import { nanoid } from 'nanoid';
import { useState } from 'react';
// import { useRef } from 'react';
import { useEffect } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    console.log('log');
    const savedContacts = localStorage.getItem('contacts');

    if (savedContacts) {
      console.log('log2');
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    console.log(name, number);
    const index = contacts.findIndex(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (index === -1) {
      const newContacts = [...contacts];
      const id = nanoid();
      newContacts.push({ id: id, name: name, number: number });
      setContacts(newContacts);
      localStorage.setItem('contacts', JSON.stringify(newContacts));
    } else {
      alert(`${name} is already in contacts`);
    }
  };
  const handleFilterChange = e => {
    const searchTerm = e.target.value;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilter(filteredContacts);

    if (searchTerm === '') {
      setFilter('');
    }
  };
  const removeContact = e => {
    const newContacts = [...contacts];
    const number = e.currentTarget.attributes.number.value;
    const index = contacts.findIndex(contact => contact.number === number);
    newContacts.splice(index, 1);
    setContacts(newContacts);
    if (filter !== '') {
      removeFilter(e);
    }
  };
  const removeFilter = e => {
    const newFilter = [...filter];
    const number = e.currentTarget.attributes.number.value;
    const index = filter.findIndex(contact => contact.number === number);
    newFilter.splice(index, 1);
    setFilter(newFilter);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm add={addContact} />
      <h2>Contacts</h2>
      <Filter filter={handleFilterChange} />
      <ContactList
        contacts={contacts}
        delite={removeContact}
        filter={filter}
        deliteFilter={removeFilter}
      />
    </div>
  );
};

// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Doctor Doom', number: '459-12-56' },
//       { id: 'id-2', name: 'Thanos', number: '443-89-12' },
//       { id: 'id-3', name: 'Ultron', number: '645-17-79' },
//       { id: 'id-4', name: 'Kang', number: '227-91-26' },
//     ],
//     filter: '',
//   };

// addContact = e => {
//   e.preventDefault();
//   const { contacts } = this.state;
//   const form = e.currentTarget;
//   const name = form.elements.name.value;
//   const number = form.elements.number.value;
//   const index = contacts.findIndex(
//     contact => contact.name.toLowerCase() === name.toLowerCase()
//   );
//   if (index === -1) {
//     const newContacts = [...contacts];
//     const id = nanoid();
//     newContacts.push({ id: { id }, name: name, number: number });
//     this.setState({ contacts: newContacts });
//   } else {
//     alert(`${name} is already in contacts`);
//   }
// };

// handleFilterChange = e => {
//   const searchTerm = e.target.value;
//   const { contacts } = this.state;
//   const filteredContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );
//   this.setState({ filter: filteredContacts });
//   if (searchTerm === '') {
//     this.setState({ filter: '' });
//   }
// };

// removeContact = e => {
//   const { contacts, filter } = this.state;
//   const newContacts = [...contacts];
//   const number = e.currentTarget.attributes.number.value;
//   const index = contacts.findIndex(contact => contact.number === number);
//   newContacts.splice(index, 1);
//   this.setState({ contacts: newContacts });
//   if (filter !== '') {
//     this.removeFilter(e);
//   }
// };

// removeFilter = e => {
//   const { filter } = this.state;
//   const newFilter = [...filter];
//   const number = e.currentTarget.attributes.number.value;
//   const index = filter.findIndex(contact => contact.number === number);
//   newFilter.splice(index, 1);
//   this.setState({ filter: newFilter });
// };

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     if (contacts) {
//       this.setState({ contacts: JSON.parse(contacts) });
//     }
//   }

//   componentDidUpdate() {
// localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//   }

//   render() {
// return (
//   <div>
//     <h1>Phonebook</h1>
//     <ContactForm add={this.addContact} />
//     <h2>Contacts</h2>
//     <Filter filter={this.handleFilterChange} />
//     <ContactList
//       contacts={this.state.contacts}
//       delite={this.removeContact}
//       filter={this.state.filter}
//       deliteFilter={this.removeFilter}
//     />
//   </div>
// );
//   }
// }
