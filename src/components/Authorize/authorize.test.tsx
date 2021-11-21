import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ApplicationContextProvider } from '../../ApplicationContext';

import Authorize from './index';

describe("<Authorize />", () => {
  test("should show child component if user info is not present", () => {
    const { container } = render(
      <ApplicationContextProvider value={{
        isLoggedIn: () => true,
      }}>
        <BrowserRouter>
          <Switch>
            <Route path='/login'>
              <span>Login</span>
            </Route>
            <Route path='/'>
              <Authorize>
                <span>Child Component</span>
              </Authorize>
            </Route>
          </Switch>
        </BrowserRouter>
      </ApplicationContextProvider>
    );
    expect(container.innerHTML).toBe('<span>Child Component</span>');
  });

  test("redirect to login component if user info is present", () => {
    const { container } = render(
      <ApplicationContextProvider value={{
        isLoggedIn: () => false,
      }}>
        <BrowserRouter>
          <Switch>
            <Route path='/login'>
              <span>Login Component</span>
            </Route>
            <Route path='/'>
              <Authorize>
                <span>Child Component</span>
              </Authorize>
            </Route>
          </Switch>
        </BrowserRouter>
      </ApplicationContextProvider>
    );
    expect(container.innerHTML).toBe('<span>Login Component</span>');
  });
});