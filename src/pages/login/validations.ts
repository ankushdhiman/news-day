import { FormikErrors } from 'formik';
import { LoginFormItems } from '../../types';

export default function LoginFormValidations(values: LoginFormItems) {
  const errors: FormikErrors<LoginFormItems> = {};
  if (!values.username) {
    errors.username = 'Username Required';
  }

  if (!values.email) {
    errors.email = 'Email Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid Email Address';
  }

  if (!values.password) {
    errors.password = 'Password Required';
  }

  return errors;
}
