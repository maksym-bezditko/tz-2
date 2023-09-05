import React from 'react';

import { styled } from 'styled-components';
import ClarioLogo from '../assets/Logo.png';

export const Header = (): JSX.Element => {
  return (
    <HeaderWrapper>
      <LogoImage />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  width: 100%;
  height: 56px;

  background-color: ${({ theme }) => theme.colors.white};

  position: fixed;
  top: 0;

  z-index: 1000;

  display: grid;
  place-items: center;
`;

const LogoImage = styled.img.attrs({
  src: ClarioLogo,
  alt: 'Clario Logo',
})`
  max-height: 30px;
`;
