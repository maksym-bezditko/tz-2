import { styled } from 'styled-components';

export const Subtitle = styled.p<{
  color?: string;
}>`
  font-size: 16px;
  color: ${({ theme, color }) => color ?? theme.colors.darkPurple};
  opacity: 0.7;

  text-align: center;
`;
