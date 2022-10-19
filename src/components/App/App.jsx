import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { Wrapper } from './App.styled';
import Box from 'components/Box';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from 'components/Filter';
import { LS_KEY } from 'components/constants';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    try {
      const data = localStorage.getItem(LS_KEY);
      const parsedContacts = JSON.parse(data);
      if (parsedContacts && parsedContacts.length > 0) {
        this.setState({ contacts: [...parsedContacts] });
      }
    } catch (error) {
      console.log(error);
    }
  }
  componentDidUpdate(pP, pS) {
    const { contacts } = this.state;
    if (pS.contacts.length !== contacts.length) {
      try {
        localStorage.setItem(LS_KEY, JSON.stringify(contacts));
      } catch (error) {
        console.log(error);
      }
    }
  }

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
