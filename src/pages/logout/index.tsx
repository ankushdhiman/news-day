import { useHistory } from 'react-router-dom';

import MainTemplate from '../../templates/main';
import Button from '../../atoms/button';

import { useAppDispatch } from '../../redux/hooks';
import { clearUser } from '../../redux/reducers/user';

export default function Login() {
  const history = useHistory();
  const dispatch = useAppDispatch();

  function handleCancel() {
    history.goBack();
  }
  function handleLogout() {
    dispatch(clearUser());
    sessionStorage.removeItem('isLoggedIn');
    history.replace('/home');
  }

  return (
    <MainTemplate>
      <h1 className='text-5xl font-bold text-center'>
        Are you sure?
      </h1>
      <div className='flex items-center justify-center mt-5'>
        <Button label='Cancel' className='primary-button mr-5' onClick={handleCancel}/>
        <Button label='Logout' className='primary-button' onClick={handleLogout}/>
      </div>
    </MainTemplate>
  );
}
