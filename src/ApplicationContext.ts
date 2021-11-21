import { createContext } from 'react';

export const ApplicationContextConfig = {
  isLoggedIn: () => !!sessionStorage.getItem('isLoggedIn'),
};

const ApplicationContext = createContext(ApplicationContextConfig);
export const ApplicationContextProvider = ApplicationContext.Provider;
export default ApplicationContext;
