import React from 'react';
import { BiFileFind } from 'react-icons/bi';
import { useSelector, useDispatch } from 'react-redux';

import Box from 'components/Box';
import { Label, Input, Title } from './Filter.styled';
import { selectFilter } from 'redux/selectors';
import { setFilterValue } from 'redux/filterSlice';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onFilterChange = e => dispatch(setFilterValue(e.target.value));

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
          onChange={onFilterChange}
          value={filter}
          type="text"
          name="filter"
        />
      </Label>
    </Box>
  );
};

export default Filter;
