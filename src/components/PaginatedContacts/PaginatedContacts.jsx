import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Box from 'components/Box';
import { Contact } from 'components/ContactList/ContactList.styled';
import ContactListRow from 'components/ContactListRow';
import { StyledPaginatedContacts } from './PaginatedContacts.styled';
import {
  selectVisibleContacts,
  selectActiveStatus,
  selectFilter,
  selectError,
} from 'redux/selectors';
import { filterStatus } from 'redux/constants';
import Error from 'components/Error';

const PaginatedContacts = () => {
  const filteredContacts = useSelector(selectVisibleContacts);
  const [itemOffset, setItemOffset] = useState(0);
  const status = useSelector(selectActiveStatus);
  const filter = useSelector(selectFilter);
  const error = useSelector(selectError);

  useEffect(() => {
    if (status === filterStatus.favourite || filter.length > 0) {
      setItemOffset(0);
    }
  }, [status, filter]);

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
      {error && <Error />}
      {!error && (
        <Box as="ul" display="flex" flexDirection="column-reverse">
          {currentItems.map(contact => (
            <Contact key={contact.id}>
              <ContactListRow contact={contact} />
            </Contact>
          ))}
        </Box>
      )}
      {!error && (
        <StyledPaginatedContacts
          breakLabel="..."
          nextLabel=">>"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="<<"
          renderOnZeroPageCount={null}
        />
      )}
    </>
  );
};

export default PaginatedContacts;
