import { AiTwotoneDelete } from 'react-icons/ai';
import Box from 'components/Box';
import {
  Category,
  CategoryTag,
  Contact,
  Info,
  InfoBtn,
} from './ContactList.styled';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <Box width="70%" p={5}>
      <Category>
        <CategoryTag>Name</CategoryTag>
        <CategoryTag>Phone</CategoryTag>
        <CategoryTag>Email</CategoryTag>
        <CategoryTag>Delete</CategoryTag>
      </Category>
      <Box as="ul" display="flex" flexDirection="column-reverse">
        {contacts.map(({ id, name }) => (
          <Contact key={id}>
            <Info>{name}</Info>
            <Info>0666654654</Info>
            <Info>sdfsdfs@ad.asd</Info>
            <InfoBtn type="button" onClick={deleteContact(id)}>
              <AiTwotoneDelete size={12} />
            </InfoBtn>
          </Contact>
        ))}
      </Box>
    </Box>
  );
};

export default ContactList;
