"use client";

import '../src/styles/index.css';

export interface ButtonProps {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  backgroundColor: string;
  label: string;
}

export const Button = ({ backgroundColor, label, primary = false, size = 'medium', }: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  return (
    <button
    type="button"
    className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
    >
      {`Custom label: ${label}`}
      <style>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  );
};

