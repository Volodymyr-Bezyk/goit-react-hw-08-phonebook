import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';

import { Wrapper } from './App.styled';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import AppBar from 'components/AppBar';
import Box from 'components/Box';
import { operations } from 'redux/index';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchContacts());
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
