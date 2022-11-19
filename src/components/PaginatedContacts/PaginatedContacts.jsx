import React, { useState } from 'react';
import Box from 'components/Box';
import { Contact } from 'components/ContactList/ContactList.styled';
import ContactListRow from 'components/ContactListRow';
import { StyledPaginatedContacts } from './PaginatedContacts.styled';

const PaginatedContacts = ({ filteredContacts }) => {
  const itemsPerPage = 20;
  const [itemOffset, setItemOffset] = useState(0);

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
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<prev"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default PaginatedContacts;
