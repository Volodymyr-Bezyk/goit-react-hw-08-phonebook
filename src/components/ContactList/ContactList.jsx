import { useSelector } from 'react-redux';
import { Category, CategoryTag } from './ContactList.styled';
import { selectLoadingStatus, selectError } from 'redux/selectors';
import PaginatedContacts from 'components/PaginatedContacts';

const ContactList = () => {
  const error = useSelector(selectError);
  const isloading = useSelector(selectLoadingStatus);

  return (
    <>
      <Category>
        <CategoryTag>Name</CategoryTag>
        <CategoryTag>Phone</CategoryTag>
        <CategoryTag>Email</CategoryTag>
        <CategoryTag>Delete</CategoryTag>
      </Category>

      {isloading && !error && <div>Loading...</div>}
      {error && <div>{error}. Please reload the page</div>}
      {!error && <PaginatedContacts />}
    </>
  );
};

export default ContactList;
