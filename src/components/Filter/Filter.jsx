import React from 'react';
import PropTypes from 'prop-types';
import { BiFileFind } from 'react-icons/bi';
import Box from 'components/Box';
import { Label, Input, Title } from './Filter.styled';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { setNameFilter } from 'redux/actions';

const Filter = () => {
  const { value } = useSelector(getFilter);
  const dispatch = useDispatch();

  const onFilterChange = e => dispatch(setNameFilter(e.target.value));

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
          value={value}
          type="text"
          name="filter"
        />
      </Label>
    </Box>
  );
};

export default Filter;

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   findContact: PropTypes.func.isRequired,
// };
