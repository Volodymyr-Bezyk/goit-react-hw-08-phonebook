import React from 'react';
import { BiFileFind } from 'react-icons/bi';
import Box from 'components/Box';
import FieldInput from 'components/ContactForm/FieldInput';

const Filter = ({ filter, findContact }) => {
  return (
    <Box mt={6}>
      <FieldInput
        title="Find contacts"
        inputHandler={findContact}
        value={filter}
        type="text"
        name="find"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        hint="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      >
        <BiFileFind size={40} display="inline-block" />
      </FieldInput>
    </Box>
  );
};

export default Filter;
