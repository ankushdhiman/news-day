import { createContext } from 'react';

export const ApplicationContextConfig = {
  isLoggedIn: () => true,
};

const ApplicationContext = createContext(ApplicationContextConfig);
export const ApplicationContextProvider = ApplicationContext.Provider;
export default ApplicationContext;
