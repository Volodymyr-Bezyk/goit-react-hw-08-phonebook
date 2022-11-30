import React from 'react';
import { Formik, Form } from 'formik';
import { CgLogIn } from 'react-icons/cg';
import Box from 'components/Box';
import { validationLoginSchema } from 'components/validation';
import { Title, TitleText, LoginBtn } from './LoginForm.styled';
import FieldInput from '../FieldInput';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const onFormSubmit = (credentials, { setSubmitting, resetForm }) => {
    dispatch(login(credentials));
    setSubmitting(false);
    resetForm();
  };

  return (
    <Box width="80%" py={6} maxWidth={700}>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={onFormSubmit}
        validationSchema={validationLoginSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <Title>
              <TitleText>Plese fill up to login</TitleText>
              <CgLogIn size={40} display="inline-block" ml={20} />
            </Title>
            <FieldInput title="Email" type="mail" name="email" />
            <FieldInput title="Password" type="password" name="password" />
            <LoginBtn disabled={isSubmitting} type="submit">
              Login
            </LoginBtn>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default LoginForm;
