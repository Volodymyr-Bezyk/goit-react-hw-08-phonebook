import React, { Component } from 'react';

import Box from 'components/Box';
import { Wrapper } from './App.styled';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from 'components/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };

  addContact = name => {
    this.setState(({ contacts }) => ({ contacts: [...contacts, name] }));
  };

  checkDuplicate = ({ name: someName }) =>
    this.state.contacts.some(
      ({ name }) => name.toLowerCase() === someName.toLowerCase()
    );

  deleteContact = contactID => () =>
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== contactID),
    }));

  filter = e => this.setState({ filter: e.currentTarget.value });

  getfilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();

    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const filteredContacts = this.getfilteredContacts();

    return (
      <Wrapper>
        <Box width="30%" p={5}>
          <ContactForm
            addContact={this.addContact}
            checkContact={this.checkDuplicate}
          ></ContactForm>

          <Filter filter={this.state.filter} findContact={this.filter}></Filter>
        </Box>

        <ContactList
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        ></ContactList>
      </Wrapper>
    );
  }
}

export default App;
