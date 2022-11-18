import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { Wrapper } from './App.styled';
import Box from 'components/Box';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from 'components/Filter';
import { fetchContacts } from 'redux/operations';
import { getLoadingSattus, getError } from 'redux/selectors';

const App = () => {
  const error = useSelector(getError);
  const isloading = useSelector(getLoadingSattus);
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchContacts(controller));
    return () => {
      controller.abort();
    };
  }, [dispatch]);

  return (
    <Wrapper>
      <Box minWidth="15%" maxWidth="25%" p={4}>
        <ContactForm />
        <Filter />
      </Box>
      <Toaster position="top-right" reverseOrder={false} />
      <ContactList />
    </Wrapper>
  );
};

export default App;
