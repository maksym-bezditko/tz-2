import React from 'react';

type Props = {
  width: number;
  height: number;
};

export const MacOSLogo = ({ width, height }: Props): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 14 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.608696 0.712891C0.272546 0.712891 0 0.981198 0 1.3122V9.70258C0 10.0336 0.272546 10.3019 0.608696 10.3019H4.86957V11.8395H4.26087C3.92472 11.8395 3.65217 12.1078 3.65217 12.4388C3.65217 12.7698 3.92472 13.0381 4.26087 13.0381H9.73913C10.0753 13.0381 10.3478 12.7698 10.3478 12.4388C10.3478 12.1078 10.0753 11.8395 9.73913 11.8395H9.13043V10.3019H13.3913C13.7275 10.3019 14 10.0336 14 9.70258V1.3122C14 0.981198 13.7275 0.712891 13.3913 0.712891H0.608696Z"
      fill="#151D51"
    />
  </svg>
);
