import { styled } from 'styled-components';

export const Heading = styled.h1<{
  color?: string;
  marginBottom?: number;
  paddingHorizontal?: number;
}>`
  font-size: 36px;
  font-weight: 700;
  color: ${({ theme, color }) => color ?? theme.colors.black};

  text-align: center;

  margin-bottom: ${({ marginBottom }) => marginBottom ?? 0}px;

  padding-left: ${({ paddingHorizontal }) => paddingHorizontal ?? 0}px;
  padding-right: ${({ paddingHorizontal }) => paddingHorizontal ?? 0}px;
`;
