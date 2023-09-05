import React from 'react';
import { styled } from 'styled-components';
import { Heading } from '../typography/Heading';
import { Slider } from '../Slider';

export const SliderSection = (): JSX.Element => (
  <SliderSectionWrapper>
    <Heading paddingHorizontal={32}>
      Let’s hear what real Clario users say.{' '}
    </Heading>

    <Slider />
  </SliderSectionWrapper>
);

const SliderSectionWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};

  padding: 40px 0 54px;
`;
