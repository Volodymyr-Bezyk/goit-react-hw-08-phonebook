import { AiTwotoneDelete } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Info, InfoBtn } from './ContactListRow.styled';
import { deleteContact } from 'redux/contactsSlice';

const ContactListRow = ({ contact: { name, number, email, id } }) => {
  const dispatch = useDispatch();
  const onDeleteClick = () => dispatch(deleteContact(id));

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
    email: PropTypes.string,
    id: PropTypes.string.isRequired,
  }),
};
