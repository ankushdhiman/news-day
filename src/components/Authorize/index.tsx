import { ReactNode, useContext } from 'react';
import { useLocation, Redirect } from 'react-router-dom';

import ApplicationContext from '../../ApplicationContext';

interface AuthorizeProps {
  children?: ReactNode;
}

export default function Authorize({ children }: AuthorizeProps) {
  const { isLoggedIn } = useContext(ApplicationContext);
  const location = useLocation();

  return isLoggedIn() ? (
    <>
      { children }
    </>
  ) : (
    <Redirect
      exact
      to={`/login/?redirectTo=${location.pathname}`}
    />
  );
}
