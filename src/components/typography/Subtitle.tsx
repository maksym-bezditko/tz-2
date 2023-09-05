import { styled } from 'styled-components';

export const Subtitle = styled.p<{
  color?: string;
  marginTop?: number;
}>`
  font-size: 16px;
  color: ${({ theme, color }) => color ?? theme.colors.darkPurple};
  opacity: 0.7;

  text-align: center;

  margin-top: ${({ marginTop }) => marginTop ?? 0}px;
`;
