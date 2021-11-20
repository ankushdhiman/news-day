import { StrictMode, Suspense } from 'react';
import { render } from 'react-dom';

import { I18nextProvider } from 'react-i18next';

import App from './App';
import i18n from './i18next';
import './style.scss';

render(
  <StrictMode>
    <Suspense fallback={<p>Loading...</p>}>
      <I18nextProvider i18n={i18n}>
        <App/>
      </I18nextProvider>
    </Suspense>
  </StrictMode>,
  document.getElementById('app'),
);
