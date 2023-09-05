import React from 'react';
import { styled } from 'styled-components';
import { Heading } from '../typography/Heading';
import theme from '../../theme';
import { Button } from '../Button';
import ClarioLogo from '../../assets/Logo.png';

export const FooterSection = (): JSX.Element => (
  <FooterSectionWrapper>
    <SloganWrapper>
      <Heading>Stop your</Heading>
      <Heading color={theme.colors.primaryPurple}>
        phone from being spied on.
      </Heading>

      <ButtonWrapper>
        <Button>Protect me now</Button>
      </ButtonWrapper>
    </SloganWrapper>

    <LogoFooterSectionWrapper>
      <LogoImage />

      <LogoFooterText>© 2023 Clario Tech DMCC</LogoFooterText>
      <LogoFooterText>All rights reserved.</LogoFooterText>
    </LogoFooterSectionWrapper>
  </FooterSectionWrapper>
);

const FooterSectionWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
`;

const SloganWrapper = styled.div`
  padding: 70px 24px 80px;
`;

const ButtonWrapper = styled.div`
  margin-top: 40px;
  width: 100%;
`;

const LogoImage = styled.img.attrs({
  src: ClarioLogo,
  alt: 'Clario Logo',
})`
  max-height: 30px;
`;

const LogoFooterSectionWrapper = styled.div`
  height: 150px;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

const LogoFooterText = styled.p`
  color: ${({ theme }) => theme.colors.silentPurple};
`;
