import 'regenerator-runtime/runtime';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import Header from './index';

describe("<Header />", () => {
  test(`should have header template`, () => {
    const { container } = render(<BrowserRouter><Header/></BrowserRouter>);
    expect(container.innerHTML).toBe(`<header class=\"w-full flex items-center h-9 px-2 shadow-md\" data-testid=\"header\"><div class=\"container flex items-center justify-between\"><div class=\"flex items-center\"><img class=\"h-5 w-5 mr-5\" src=\"test-file-stub\" alt=\"logo\"><nav class=\"text-white text-lg leading-[1.2]\"><a class=\"nav-link mr-5 \" href=\"/home\">Home</a><a class=\"nav-link  \" href=\"/dashboard\">Dashboard</a></nav></div><a class=\"secondary-button self-end \" href=\"/logout\">Login</a></div></header>`);
  });
});