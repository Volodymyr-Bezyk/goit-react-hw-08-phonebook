import { useSelector } from 'react-redux';
import { Category, CategoryTag } from './ContactList.styled';
import { selectLoadingSattus, selectError } from 'redux/selectors';
import PaginatedContacts from 'components/PaginatedContacts';

const ContactList = () => {
  const error = useSelector(selectError);
  const isloading = useSelector(selectLoadingSattus);

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

      <PaginatedContacts />
    </>
  );
};

export default ContactList;
