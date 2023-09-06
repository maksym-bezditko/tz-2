import { styled } from 'styled-components';

export const Heading = styled.h1<{
  $color?: string;
  $marginBottom?: number;
  $paddingHorizontal?: number;
  $fontSize?: number;
  $marginTop?: number;
}>`
  font-size: ${({ $fontSize }) => $fontSize ?? 36}px;
  font-weight: 700;
  color: ${({ theme, $color }) => $color ?? theme.colors.black};

  text-align: center;

  margin-bottom: ${({ $marginBottom }) => $marginBottom ?? 0}px;
  margin-top: ${({ $marginTop }) => $marginTop ?? 0}px;

  padding-left: ${({ $paddingHorizontal }) => $paddingHorizontal ?? 0}px;
  padding-right: ${({ $paddingHorizontal }) => $paddingHorizontal ?? 0}px;
`;
