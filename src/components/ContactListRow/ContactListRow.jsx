import { AiTwotoneDelete } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { Info, InfoBtn } from './ContactListRow.styled';
import { operations } from 'redux/index';

const ContactListRow = ({ contact }) => {
  const { name, number, email, id } = contact;
  const dispatch = useDispatch();
  const onDeleteClick = () => dispatch(operations.deleteContact(id));

  return (
    <>
      <Info>{name}</Info>
      <Info>{number}</Info>
      <Info>{email}</Info>
      <InfoBtn type="button" onClick={onDeleteClick}>
        <AiTwotoneDelete size={12} />
      </InfoBtn>
    </>
  );
};

export default ContactListRow;

ContactListRow.propTypes = {
  contact: PropTypes.exact({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
