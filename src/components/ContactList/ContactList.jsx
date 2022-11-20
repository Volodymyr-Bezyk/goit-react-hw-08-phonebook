import { Category, CategoryTag } from './ContactList.styled';

import PaginatedContacts from 'components/PaginatedContacts';

const ContactList = () => {
  return (
    <>
      <Category>
        <CategoryTag>Name</CategoryTag>
        <CategoryTag>Phone</CategoryTag>
        <CategoryTag>Email</CategoryTag>
        <CategoryTag>Delete</CategoryTag>
      </Category>

      {/* {error && <div>{error}. Please reload the page</div>} */}
      {<PaginatedContacts />}
    </>
  );
};

export default ContactList;
