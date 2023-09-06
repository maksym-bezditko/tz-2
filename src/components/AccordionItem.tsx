import React from 'react';

import { motion } from 'framer-motion';
import { styled } from 'styled-components';
import { ArrowUpIcon } from './icons/ArrowUpIcon';
import { ArrowDownIcon } from './icons/ArrowDownIcon';

type Props = {
  title: string;
  text: string;
  isActive: boolean;
  number: number;
  onClick: (title: string) => void;
};

export const AccordionItem = ({
  title,
  text,
  isActive,
  onClick,
  number,
}: Props): JSX.Element => (
  <AccordionItemWrapper onClick={() => onClick(title)}>
    <Row>
      <Row>
        <Badge $isActive={isActive}>{number}</Badge>

        <AccordionItemTitle $isActive={isActive}>{title}</AccordionItemTitle>
      </Row>

      {isActive ? <ArrowUpIcon /> : <ArrowDownIcon />}
    </Row>

    {isActive && (
      <AccordionItemText
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
      >
        {text}
      </AccordionItemText>
    )}
  </AccordionItemWrapper>
);

const AccordionItemWrapper = styled.div`
  margin-top: 20px;
  min-height: 48px;
  cursor: pointer;
`;

const AccordionItemTitle = styled.h4<{
  $isActive: boolean;
}>`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.limeGreen : theme.colors.black};

  transition: all 0.3s ease-in-out;
`;

const AccordionItemText = styled(motion.p)`
  font-size: 14px;
  margin-left: 36px;
  margin-top: 10px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Badge = styled.div<{
  $isActive: boolean;
}>`
  width: 28px;
  height: 28px;
  border-radius: 14px;
  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.limeGreen : theme.colors.badgePurple};
  color: white;
  font-size: 16px;
  font-weight: bold;
  display: grid;
  place-items: center;
  margin-right: 8px;

  transition: all 0.3s ease-in-out;
`;
