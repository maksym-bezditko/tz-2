import React, { useCallback, useState } from 'react';
import { styled } from 'styled-components';
import { Heading } from '../typography/Heading';
import { AccordionItem } from '../AccordionItem';

const STEPS = [
  {
    title: 'Install Clario',
    text: 'Go to the store (App Store or Google Play) and download Clario.',
  },
  {
    title: 'Set up your protection',
    text: 'Enable all the permissions requested by the software.',
  },
  {
    title: 'Enjoy spy-free life',
    text: 'Relax and let Clario do the job.',
  },
];

export const StepsSection = (): JSX.Element => {
  const [activeTitle, setActiveTitle] = useState('');

  const handleClick = useCallback(
    (title: string) => {
      if (activeTitle === title) {
        setActiveTitle('');
      } else {
        setActiveTitle(title);
      }
    },
    [activeTitle],
  );

  return (
    <StepsSectionWrapper>
      <Heading $fontSize={26} $paddingHorizontal={20}>
        All you need to do is{' '}
        <GreenSpan>
          3 easy steps<BlackSpan>.</BlackSpan>
        </GreenSpan>
      </Heading>

      <AccordionWrapper>
        {STEPS.map((item, index) => (
          <AccordionItem
            key={item.title}
            title={item.title}
            text={item.text}
            isActive={activeTitle === item.title}
            onClick={handleClick}
            number={index + 1}
          />
        ))}
      </AccordionWrapper>
    </StepsSectionWrapper>
  );
};

const StepsSectionWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 30px 20px 40px;
`;

const GreenSpan = styled.span`
  color: ${({ theme }) => theme.colors.limeGreen};
`;

const BlackSpan = styled.span`
  color: ${({ theme }) => theme.colors.black};
`;

const AccordionWrapper = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`;
