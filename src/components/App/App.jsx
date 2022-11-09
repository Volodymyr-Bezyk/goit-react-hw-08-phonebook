// import { nanoid } from 'nanoid';
import { Toaster } from 'react-hot-toast';
import { Wrapper } from './App.styled';
import Box from 'components/Box';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from 'components/Filter';
// import { LS_KEY } from 'components/constants';
// import { useLocalStorage, useFilter } from 'hooks/hooks';

const App = () => {
  // const [contacts, setContacts] = useLocalStorage(LS_KEY);
  // const [filter, changeFilter, filteredContacts] = useFilter(contacts);

  return (
    <Wrapper>
      <Box width="30%" p={5}>
        <ContactForm></ContactForm>
        <Filter />
      </Box>
      <Toaster position="top-right" reverseOrder={false} />
      <ContactList />
    </Wrapper>
  );
};

export default App;
