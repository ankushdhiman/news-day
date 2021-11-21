import { withFormik } from 'formik';
import MainTemplate from '../../templates/main';
import LoginForm from './login-form';

import LoginFormValidations from './validations';
import { LoginFormItems } from '../../types';

const FormikLoginForm = withFormik<any, LoginFormItems>({
  mapPropsToValues: () => ({
    username: '',
    email: '',
    password: '',
  }),
  validate: LoginFormValidations,
  handleSubmit: values => {
    console.log(values);
  },
})(LoginForm);

export default function Login() {
  return (
    <MainTemplate>
      <FormikLoginForm/>
    </MainTemplate>
  );
}
