import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Box from 'components/Box';
import { Contact } from 'components/ContactList/ContactList.styled';
import ContactListRow from 'components/ContactListRow';
import { StyledPaginatedContacts } from './PaginatedContacts.styled';
import { selectVisibleContacts } from 'redux/selectors';
import { selectActiveStatus } from 'redux/selectors';
import { filterStatus } from 'redux/constants';

const PaginatedContacts = () => {
  const filteredContacts = useSelector(selectVisibleContacts);
  const [itemOffset, setItemOffset] = useState(0);

  const status = useSelector(selectActiveStatus);

  useEffect(() => {
    if (status === filterStatus.favourite) {
      setItemOffset(0);
    }
  }, [status]);

  const itemsPerPage = 20;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredContacts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredContacts.length / itemsPerPage);

  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % filteredContacts.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Box as="ul" display="flex" flexDirection="column-reverse">
        {currentItems.map(contact => (
          <Contact key={contact.id}>
            <ContactListRow contact={contact} />
          </Contact>
        ))}
      </Box>
      <StyledPaginatedContacts
        breakLabel="..."
        nextLabel="next>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<prev"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default PaginatedContacts;
