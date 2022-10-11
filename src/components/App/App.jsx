import React, { Component } from 'react';

import { Wrapper } from './App.styled';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';

class App extends Component {
  state = {
    contacts: [],
  };

  addContact = name => {
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, name] };
    });
  };

  deleteContact = contactID => () => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactID
        ),
      };
    });
  };

  render() {
    return (
      <Wrapper>
        <ContactForm addContact={this.addContact}></ContactForm>
        <ContactList
          contacts={this.state.contacts}
          deleteContact={this.deleteContact}
        ></ContactList>
      </Wrapper>
    );
  }
}

export default App;
