import React from 'react';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';

import { validationSchema } from 'components/validation';
import { Title, TitleText, AddBtn } from './ContactForm.styled';
import { RiContactsBook2Line } from 'react-icons/ri';
import FieldInput from '../FieldInput';

const ContactForm = ({ addContact, checkContact }) => {
  const handleSubmit = (contact, { resetForm }) => {
    if (checkContact(contact)) {
      alert(`${contact.name} is already in contacts!`);
    } else {
      addContact(contact);
      resetForm();
    }
  };

  return (
    <Formik
      initialValues={{ name: '', number: '', email: '' }}
      onSubmit={handleSubmit}
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

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  checkContact: PropTypes.func.isRequired,
};
