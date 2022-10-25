import React from 'react';
import PropTypes from 'prop-types';
import { BiFileFind } from 'react-icons/bi';
import Box from 'components/Box';
import { Label, Input, Title } from './Filter.styled';

const Filter = ({ filter, findContact }) => {
  return (
    <Box mt={6}>
      <Label>
        <Box
          as="div"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Title>Find contacts</Title>
          <BiFileFind size={40} display="inline-block" />
        </Box>
        <Input
          onChange={findContact}
          type="text"
          name="filter"
          value={filter}
        />
      </Label>
    </Box>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  findContact: PropTypes.func.isRequired,
};
