import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from '@testing-library/react';

import Footer from './index';

describe("<Footer />", () => {
  test(`should have footer template`, () => {
    const { container } = render(<Footer/>);
    expect(container.innerHTML).toBe(`<footer class=\"w-full bg-copy text-white px-2 py-4\" data-testid=\"footer\"><div class=\"container flex flex-col md:flex-row items-center justify-between\"><img class=\"h-5\" src=\"test-file-stub\" alt=\"logo\"><div class=\"flex flex-col justify-center md:flex-row md:mt-[0] mt-2\"><p class=\"text-xl text-white\">Copyright 2021, Newsday GmbH</p></div></div></footer>`);
  });
});