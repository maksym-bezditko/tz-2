import { styled } from 'styled-components';

export const BIG_BUTTON_HEIGHT = 47;

export const Button = styled.button<{
  $isSmall?: boolean;
}>`
  background-color: ${({ theme }) => theme.colors.primaryPurple};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 1000px;

  width: 100%;
  height: ${({ $isSmall }) => ($isSmall ? 32 : BIG_BUTTON_HEIGHT)}px;

  font-size: ${({ $isSmall }) => ($isSmall ? 14 : 18)}px;
  font-weight: 700;

  max-width: ${({ $isSmall }) => ($isSmall ? 127 : 400)}px;

  cursor: pointer;
`;
