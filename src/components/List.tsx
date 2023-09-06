import React from 'react';
import { styled } from 'styled-components';
import { ListHeading } from './typography/ListHeading';
import { ListSubtitle } from './typography/ListSubtitle';
import { ListItem } from '../models';

type Props = {
  title?: string;
  subtitle?: string;
  marginTop?: number;
  listItems: ListItem[];
  areListItemsBold?: boolean;
  listHeadingFontSize?: number;
  listItemTextFontSize?: number;
  marginBetweenListItems?: number;
  withHorizontalListPadding?: boolean;
};

export const List = ({
  subtitle,
  listItems,
  title = '',
  areListItemsBold = false,
  listHeadingFontSize = 16,
  marginBetweenListItems = 12,
  listItemTextFontSize = 14,
  marginTop = 35,
  withHorizontalListPadding = true,
}: Props): JSX.Element => (
  <ListWrapper $marginTop={marginTop}>
    {title && (
      <ListHeading $fontSize={listHeadingFontSize}>{title}</ListHeading>
    )}

    {subtitle && <ListSubtitle>{subtitle}</ListSubtitle>}

    <PaddingWrapper>
      {listItems.map((item) => (
        <ListItemWrapper
          $withHorizontalListPadding={withHorizontalListPadding}
          $marginBetweenListItems={marginBetweenListItems}
          key={item.text}
        >
          {item.icon}

          <ListItemText
            $isBold={areListItemsBold}
            $fontSize={listItemTextFontSize}
          >
            {item.text}
          </ListItemText>
        </ListItemWrapper>
      ))}
    </PaddingWrapper>
  </ListWrapper>
);

const ListWrapper = styled.div<{
  $marginTop: number;
}>`
  margin-top: ${(props) => props.$marginTop}px;

  width: 100%;
`;

const ListItemWrapper = styled.div<{
  $marginBetweenListItems: number;
  $withHorizontalListPadding: boolean;
}>`
  display: flex;

  align-items: center;

  margin-top: ${({ $marginBetweenListItems }) => $marginBetweenListItems}px;

  width: ${({ $withHorizontalListPadding }) =>
    $withHorizontalListPadding ? '80%' : '100%'};
`;

const ListItemText = styled.span<{
  $isBold: boolean;
  $fontSize: number;
}>`
  font-size: ${({ $fontSize }) => $fontSize}px;
  margin-left: 10px;
  font-weight: ${(props) => (props.$isBold ? 700 : 400)};
`;

const PaddingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  max-width: 400px;
`;
