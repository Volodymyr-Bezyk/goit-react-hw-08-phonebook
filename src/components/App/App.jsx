import { Toaster } from 'react-hot-toast';
import { Wrapper } from './App.styled';
import Box from 'components/Box';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from 'components/Filter';

const App = () => {
  return (
    <Wrapper>
      <Box width="30%" p={5}>
        <ContactForm />
        <Filter />
      </Box>
      <Toaster position="top-right" reverseOrder={false} />
      <ContactList />
    </Wrapper>
  );
};

export default App;
