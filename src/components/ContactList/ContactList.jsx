import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectVisibleContacts } from 'redux/selectors';
import { Category, CategoryTag } from './ContactList.styled';
import { selectLoadingSattus, selectError } from 'redux/selectors';
import PaginatedContacts from 'components/PaginatedContacts';

const ContactList = () => {
  const error = useSelector(selectError);
  const isloading = useSelector(selectLoadingSattus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
    return () => {};
  }, [dispatch]);

  const filteredContacts = useSelector(selectVisibleContacts);

  return (
    <>
      <Category>
        <CategoryTag>Name</CategoryTag>
        <CategoryTag>Phone</CategoryTag>
        <CategoryTag>Email</CategoryTag>
        <CategoryTag>Delete</CategoryTag>
      </Category>

      {isloading && !error && <div>Loading...</div>}
      {error && <div>Error</div>}
      <PaginatedContacts filteredContacts={filteredContacts} />
    </>
  );
};

export default ContactList;
