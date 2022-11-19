import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { Wrapper } from './App.styled';
import Box from 'components/Box';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from 'components/Filter';
import AppBar from 'components/AppBar';
import { fetchContacts } from 'redux/operations';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
    return () => {};
  }, [dispatch]);

  return (
    <Wrapper>
      <Box minWidth="15%" maxWidth="25%" p={4}>
        <ContactForm />
        <Filter />
      </Box>
      <Toaster position="top-right" reverseOrder={false} />
      <Box width="70%" p={4} maxWidth={1200}>
        <AppBar />
        <ContactList />
      </Box>
    </Wrapper>
  );
};

export default App;
