import React from 'react';

import { styled } from 'styled-components';
import ClarioLogo from '../assets/Logo.png';
import { Button } from './Button';

type Props = {
  isHeaderButtonVisible: boolean;
  handleProtectMeNow: () => void;
};

export const HEADER_HEIGHT = 56;

export const Header = ({
  isHeaderButtonVisible,
  handleProtectMeNow,
}: Props): JSX.Element => {
  return (
    <HeaderWrapper $isCentered={!isHeaderButtonVisible}>
      <LogoImage />

      {isHeaderButtonVisible && (
        <Button $isSmall onClick={handleProtectMeNow}>
          Protect me now
        </Button>
      )}
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div<{
  $isCentered: boolean;
}>`
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  padding: 17px 24px;

  background-color: ${({ theme }) => theme.colors.white};

  position: fixed;
  top: 0;

  z-index: 1000;

  display: flex;
  justify-content: ${({ $isCentered }) =>
    $isCentered ? 'center' : 'space-between'};
  align-items: center;
`;

const LogoImage = styled.img.attrs({
  src: ClarioLogo,
  alt: 'Clario Logo',
})`
  max-height: 30px;
`;
