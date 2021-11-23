import { createContext } from 'react';

export const ApplicationContextConfig = {
  isLoggedIn: () => !!sessionStorage.getItem('user'),
};

const ApplicationContext = createContext(ApplicationContextConfig);
export const ApplicationContextProvider = ApplicationContext.Provider;
export default ApplicationContext;
