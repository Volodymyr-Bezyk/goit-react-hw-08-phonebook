import * as Yup from 'yup';

Yup.addMethod(Yup.string, 'numbers', function () {
  return this.matches(/^\d+$/, 'The field should have digits only');
});

export const validationSchema = Yup.object({
  name: Yup.string().min(3).required(),
  number: Yup.string().length(10).numbers().required(),
  email: Yup.string().email(),
});

export const validationRegisterSchema = Yup.object({
  name: Yup.string().min(3).required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(7).required(),
});

export const validationLoginSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(7).required(),
});
