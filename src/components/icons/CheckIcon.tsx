import React from 'react';

type Props = {
  width: number;
  height: number;
};

export const CheckIcon = ({ width, height }: Props): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="8" cy="10" r="8" fill="#483FDD" />
    <path
      d="M5 10.5L7.57143 13L11 8"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
