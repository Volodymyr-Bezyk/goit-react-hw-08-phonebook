import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import Box from 'components/Box';
import ContactListRow from '../ContactListRow';
import { Category, CategoryTag, Contact } from './ContactList.styled';

const ContactList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);

  return (
    <Box width="70%" p={4} maxWidth={1200}>
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
