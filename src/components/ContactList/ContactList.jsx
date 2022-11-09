// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

import Box from 'components/Box';
import ContactListRow from '../ContactListRow';
import { Category, CategoryTag, Contact } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const { value } = useSelector(getFilter);

  const getVisibleContacts = (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getVisibleContacts(contacts, value);

  return (
    <Box width="70%" p={5}>
      <Category>
        <CategoryTag>Name</CategoryTag>
        <CategoryTag>Phone</CategoryTag>
        <CategoryTag>Email</CategoryTag>
        <CategoryTag>Delete</CategoryTag>
      </Category>

      <Box as="ul" display="flex" flexDirection="column-reverse">
        {filteredContacts.map(contact => (
          <Contact key={contact.id}>
            <ContactListRow contact={contact}></ContactListRow>
          </Contact>
        ))}
      </Box>
    </Box>
  );
};

export default ContactList;

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   deleteContact: PropTypes.func.isRequired,
// };
