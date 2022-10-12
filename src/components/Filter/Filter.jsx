import React, { Component } from 'react';
import { BiFileFind } from 'react-icons/bi';
import { Title, TitleText, Label, Input } from './Filter.styled';
import Box from 'components/Box';

const Filter = ({ filter, findContact }) => {
  return (
    <Box mt={6}>
      <Label>
        <Title>
          <TitleText>Find contacts</TitleText>
          <BiFileFind size={40} display="inline-block" />
        </Title>

        <Input
          onChange={findContact}
          value={filter}
          type="text"
          name="find"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </Label>
    </Box>
  );
};

export default Filter;
