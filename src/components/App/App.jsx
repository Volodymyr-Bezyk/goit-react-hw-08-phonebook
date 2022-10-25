import { nanoid } from 'nanoid';
import { Wrapper } from './App.styled';
import Box from 'components/Box';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from 'components/Filter';
import { LS_KEY } from 'components/constants';
import { useLocalStorage, useFilter } from 'hooks/hooks';

const App = () => {
  const [contacts, setContacts] = useLocalStorage(LS_KEY);
  const [filter, changeFilter, filteredContacts] = useFilter(contacts);

  const addContact = contact =>
    setContacts(prevState => [...prevState, { id: nanoid(), ...contact }]);

  const checkDuplicate = ({ name: newName }) =>
    contacts.some(({ name }) => name.toLowerCase() === newName.toLowerCase());

  const deleteContact = contactID => () =>
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactID)
    );

  return (
    <Wrapper>
      <Box width="30%" p={5}>
        <ContactForm
          addContact={addContact}
          checkContact={checkDuplicate}
        ></ContactForm>
        <Filter filter={filter} findContact={changeFilter}></Filter>
      </Box>
      <ContactList
        contacts={filteredContacts}
        deleteContact={deleteContact}
      ></ContactList>
    </Wrapper>
  );
};

export default App;
