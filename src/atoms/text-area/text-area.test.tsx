import 'regenerator-runtime/runtime';
import React, { FormEvent } from 'react';
import { render, fireEvent } from '@testing-library/react';

import TextArea from './index';

describe("<TextArea />", () => {
  let inputValue = '';
  function handleChange(event: FormEvent<HTMLTextAreaElement>) {
    inputValue = event.currentTarget.value;
  }
  const textInput = (inputVal: string) => (
    <TextArea
      testid='text-area'
      className='text-area-class'
      onChange={handleChange}
      value={inputVal}
      placeholder='Placeholder Value'
    />
  )

  test("should have a placeholder", async () => {
    const { findByTestId } = render(textInput(''));
    const textArea = await findByTestId('text-area');
    expect(textArea.getAttribute('placeholder')).toBe('Placeholder Value');
  });

  test("should have a className='text-area-class'", async () => {
    const { findByTestId } = render(textInput(''));
    const textArea = await findByTestId('text-area');
    expect(textArea.className.includes('text-area-class')).toBe(true);
  });
  test("should have a input element with value Hello", async () => {
    const { container } = render(textInput('Hello'));
    const textArea = container.querySelector('textarea');
    expect(textArea?.value).toBe('Hello');
  });
  test("should have fire onChange handled on click event", async () => {
    const { container } = render(textInput(''));
    const textArea = container.querySelector('textarea');
    if (textArea) {
      fireEvent.change(textArea, { target: { value: 'Bye' } })
      expect(inputValue).toBe('Bye');
    } else {
      expect(false).toBe(true);
    }
  });
});