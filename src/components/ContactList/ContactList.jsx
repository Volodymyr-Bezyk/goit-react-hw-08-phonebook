import PropTypes from 'prop-types';

import Box from 'components/Box';
import ContactListRow from '../ContactListRow';
import { Category, CategoryTag, Contact } from './ContactList.styled';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <Box width="70%" p={5}>
      <Category>
        <CategoryTag>Name</CategoryTag>
        <CategoryTag>Phone</CategoryTag>
        <CategoryTag>Email</CategoryTag>
        <CategoryTag>Delete</CategoryTag>
      </Category>

      <Box as="ul" display="flex" flexDirection="column-reverse">
        {contacts.map(contact => (
          <Contact key={contact.id}>
            <ContactListRow
              contact={contact}
              deleteContact={deleteContact}
            ></ContactListRow>
          </Contact>
        ))}
      </Box>
    </Box>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
