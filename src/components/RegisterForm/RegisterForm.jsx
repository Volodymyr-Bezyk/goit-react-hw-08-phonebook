import React from 'react';
import { Formik, Form } from 'formik';
import { SiGnuprivacyguard } from 'react-icons/si';
import Box from 'components/Box';
import { validationRegisterSchema } from 'components/validation';
import { Title, TitleText, RegisterBtn } from './RegisterForm.styled';
import FieldInput from '../FieldInput';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const onFormSubmit = (credentials, data) => {
    // console.log(credentials);
    // console.log(data);
    dispatch(register(credentials));
  };

  return (
    <Box width="80%" py={6} maxWidth={700}>
      <Formik
        initialValues={{ name: '', password: '', email: '' }}
        onSubmit={onFormSubmit}
        validationSchema={validationRegisterSchema}
      >
        <Form>
          <Title>
            <TitleText>Plese fill up registration form</TitleText>
            <SiGnuprivacyguard size={40} display="inline-block" ml={20} />
          </Title>
          <FieldInput title="Name" type="text" name="name" />
          <FieldInput title="Email" type="mail" name="email" />
          <FieldInput title="Password" type="password" name="password" />
          <RegisterBtn type="submit">Send</RegisterBtn>
        </Form>
      </Formik>
    </Box>
  );
};

export default RegisterForm;
