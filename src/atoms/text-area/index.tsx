import { FormEvent } from 'react';
import './text-area.scss';

interface TextAreaProps {
  placeholder?: string;
  value: string;
  name?: string;
  className?: string;
  testid?: string;
  rows?: number;
  cols?: number;
  onChange?: (event: FormEvent<HTMLTextAreaElement>) => void;
}

export default function TextArea({ rows, className, testid, ...attr }: TextAreaProps) {
  return (
    <textarea
      className={`textarea ${className || ''}`}
      rows={rows || 1}
      data-testid={testid}
      {...attr}
    />
  );
}
