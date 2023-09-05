import { styled } from 'styled-components';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primaryPurple};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 1000px;

  width: 100%;
  height: 47px;

  font-size: 18px;
  font-weight: 700;
`;
