import { MouseEvent } from 'react';

interface ButtonProps {
  label?: string;
  testid?: string;
  className?: string;
  type?: 'submit' | 'reset' | 'button';
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ label, type = 'button', testid, ...attr }: ButtonProps) {
  return (
    <button type={type} data-testid={testid} {...attr}>{label}</button>
  );
}
