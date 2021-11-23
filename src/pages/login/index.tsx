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

interface LoginPageParams {
  redirectTo: string;
}

export default function Login() {
  const { isLoggedIn } = useContext(ApplicationContext);
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { search } = useLocation();
  const { redirectTo } = getQueryParams<LoginPageParams>(search);

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
      const userInfo = {
        username: values.username,
        email: values.email,
      };
      dispatch(addUserInfo(userInfo));
      sessionStorage.setItem('user', JSON.stringify(userInfo));
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
