import { StrictMode, Suspense } from 'react';
import { render } from 'react-dom';

import { I18nextProvider } from 'react-i18next';

import App from './App';
import i18n from './i18next';
import { ApplicationContextProvider, ApplicationContextConfig } from './ApplicationContext';
import './style.scss';

render(
  <StrictMode>
    <Suspense fallback={<p>Loading...</p>}>
      <ApplicationContextProvider value={ApplicationContextConfig}>
        <I18nextProvider i18n={i18n}>
          <App/>
        </I18nextProvider>
      </ApplicationContextProvider>
    </Suspense>
  </StrictMode>,
  document.getElementById('app'),
);
