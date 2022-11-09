import React from 'react';
import { Formik, Form } from 'formik';
// import PropTypes from 'prop-types';
import toast from 'react-hot-toast';

import { validationSchema } from 'components/validation';
import { Title, TitleText, AddBtn } from './ContactForm.styled';
import { RiContactsBook2Line } from 'react-icons/ri';
import FieldInput from '../FieldInput';

import { useDispatch } from 'react-redux';
import { addContact } from 'redux/actions';
import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

const ContactForm = ({ checkContact }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const checkDuplicate = ({ name: newName }) =>
    contacts.some(({ name }) => name.toLowerCase() === newName.toLowerCase());

  const onFormSubmit = (contact, { resetForm }) => {
    const isContactAlreadyExist = checkDuplicate(contact);

    if (isContactAlreadyExist) {
      toast.error(`Name ${contact.name} already exist in your contact list!`);
      alert(`${contact.name} is already in contacts!`);
      return;
    }
    toast.success('Contact added successfully');
    dispatch(addContact(contact));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '', email: '' }}
      onSubmit={onFormSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <Title>
          <TitleText>Phone Book</TitleText>
          <RiContactsBook2Line size={40} display="inline-block" />
        </Title>
        <FieldInput title="Name" type="text" name="name"></FieldInput>
        <FieldInput title="Phone" type="tel" name="number"></FieldInput>
        <FieldInput title="Email" type="mail" name="email"></FieldInput>
        <AddBtn type="submit">Add contact</AddBtn>
      </Form>
    </Formik>
  );
};

export default ContactForm;

// ContactForm.propTypes = {
//   addContact: PropTypes.func.isRequired,
//   checkContact: PropTypes.func.isRequired,
// };
