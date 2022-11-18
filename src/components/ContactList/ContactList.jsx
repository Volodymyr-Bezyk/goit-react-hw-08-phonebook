import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import Box from 'components/Box';
import ContactListRow from '../ContactListRow';
import { Category, CategoryTag, Contact } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getVisibleContacts = (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getVisibleContacts(contacts, filter);

  return (
    <Box width="70%" p={4} maxWidth={1100}>
      <Category>
        <CategoryTag>Name</CategoryTag>
        <CategoryTag>Phone</CategoryTag>
        <CategoryTag>Email</CategoryTag>
        <CategoryTag>Delete</CategoryTag>
      </Category>

      <Box as="ul" display="flex" flexDirection="column-reverse">
        {filteredContacts.map(contact => (
          <Contact key={contact.id}>
            <ContactListRow contact={contact} />
          </Contact>
        ))}
      </Box>
    </Box>
  );
};

export default ContactList;
