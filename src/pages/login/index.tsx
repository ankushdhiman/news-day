import { useEffect, useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import MainTemplate from '../../templates/main';
import LoginForm from './login-form';

import LoginFormValidations from './validations';
import { LoginFormItems } from '../../types';
import { useAppDispatch } from '../../redux/hooks';
import { addUserInfo } from '../../redux/reducers/user';
import { getQueryParams } from '../../utils/url-helper';
import ApplicationContext from '../../ApplicationContext';

export default function Login() {
  const { isLoggedIn } = useContext(ApplicationContext);
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { search } = useLocation();
  const { redirectTo } = getQueryParams<{ redirectTo: string; }>(search);

  useEffect(() => {
    if (isLoggedIn()) {
      history.push(redirectTo || '/');
    }
  }, []);

  const formik = useFormik<LoginFormItems>({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validate: LoginFormValidations,
    onSubmit: (values: LoginFormItems) => {
      dispatch(addUserInfo(
        {
          username: values.username,
          email: values.email,
        },
      ));
      sessionStorage.setItem('isLoggedIn', 'true');
      history.push(redirectTo || '/');
    },
  });

  return (
    <MainTemplate>
      <LoginForm
        {...formik}
      />
    </MainTemplate>
  );
}
