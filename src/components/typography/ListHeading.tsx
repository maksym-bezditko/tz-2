import { styled } from 'styled-components';

export const ListHeading = styled.h3<{
  $fontSize: number;
}>`
  font-weight: bold;
  font-size: ${(props) => props.$fontSize}px;

  text-align: center;
`;
