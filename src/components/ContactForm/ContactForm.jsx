import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import toast from 'react-hot-toast';
import { RiContactsBook2Line } from 'react-icons/ri';

import { validationSchema } from 'components/validation';
import { Title, TitleText, AddBtn } from './ContactForm.styled';
import FieldInput from '../FieldInput';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

const ContactForm = () => {
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
          <RiContactsBook2Line size={40} display="inline-block" ml={20} />
        </Title>
        <FieldInput title="Name" type="text" name="name" />
        <FieldInput title="Phone" type="tel" name="number" />
        <FieldInput title="Email" type="mail" name="email" />
        <AddBtn type="submit">Add contact</AddBtn>
      </Form>
    </Formik>
  );
};

export default ContactForm;
