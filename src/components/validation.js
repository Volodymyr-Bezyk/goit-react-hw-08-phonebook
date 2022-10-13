import * as Yup from 'yup';

Yup.addMethod(Yup.string, 'numbers', function () {
  return this.matches(/^\d+$/, 'The field should have digits only');
});

export const validationSchema = Yup.object({
  name: Yup.string().min(3).required(),
  number: Yup.string().min(6).numbers().required(),
  email: Yup.string().email(),
});
