import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Box from 'components/Box';
import { Label, Title, TitleText, Input, AddBtn } from './ContactForm.styled';
import { RiContactsBook2Line } from 'react-icons/ri';

class ContactForm extends Component {
  state = { name: '' };

  prevenDefaultForm = e => e.preventDefault();

  onInputChange = e => {
    this.setState({ name: { id: nanoid(), name: e.currentTarget.value } });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.addContact(this.state.name);
    this.setState({ name: '' });
  };

  render() {
    const {} = this.props;

    return (
      <Box width="30%" p={5}>
        <form onSubmit={this.onFormSubmit}>
          <Title>
            <TitleText>Phone Book</TitleText>
            <RiContactsBook2Line size={40} display="inline-block" />
          </Title>
          <Label>
            <p>Name</p>
            <Input
              onChange={this.onInputChange}
              value={this.state.name && this.state.name.name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <AddBtn type="submit">Add contact</AddBtn>
        </form>
      </Box>
    );
  }
}

export default ContactForm;
