import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { Wrapper } from './App.styled';
import Box from 'components/Box';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from 'components/Filter';
import data from '../data';
class App extends Component {
  state = {
    contacts: [...data],

    filter: '',
  };

  addContact = contact =>
    this.setState(({ contacts }) => ({
      contacts: [...contacts, { id: nanoid(), ...contact }],
    }));

  checkDuplicate = ({ name: newName }) =>
    this.state.contacts.some(
      ({ name }) => name.toLowerCase() === newName.toLowerCase()
    );

  deleteContact = contactID => () =>
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== contactID),
    }));

  filter = e => this.setState({ filter: e.currentTarget.value });

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const filteredContacts = this.getFilteredContacts();

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
