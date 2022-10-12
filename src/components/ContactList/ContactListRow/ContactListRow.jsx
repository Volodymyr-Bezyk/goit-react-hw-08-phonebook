import { AiTwotoneDelete } from 'react-icons/ai';
import { Info, InfoBtn } from './ContactListRow.styled';

const ContactListRow = ({
  deleteContact,
  contact: { name, number, email, id },
}) => {
  return (
    <>
      <Info>{name}</Info>
      <Info>{number}</Info>
      <Info>{email}</Info>
      <InfoBtn type="button" onClick={deleteContact(id)}>
        <AiTwotoneDelete size={12} />
      </InfoBtn>
    </>
  );
};

export default ContactListRow;
