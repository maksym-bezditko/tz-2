import React from 'react';
import { ListHeading } from './typography/ListHeading';
import { styled } from 'styled-components';
import { ListItem } from '../models';
import { ListSubtitle } from './typography/ListSubtitle';

type Props = {
  title: string;
  fileName: string;
  subtitle?: string;
  listItems: ListItem[];
  paddingBottom?: number;
  areListItemsBold?: boolean;
  listHeadingFontSize?: number;
  marginBetweenListItems?: number;
  marginBetweenVideoAndList?: number;
  withHorizontalListPadding?: boolean;
};

export const ListWithVideo = ({
  title,
  subtitle,
  fileName,
  listItems,
  areListItemsBold = false,
  listHeadingFontSize = 16,
  marginBetweenListItems = 12,
  marginBetweenVideoAndList = 35,
  withHorizontalListPadding = true,
  paddingBottom = 0,
}: Props): JSX.Element => (
  <ListWithVideoWrapper paddingBottom={paddingBottom}>
    <VideoWrapper loop muted autoPlay>
      <source src={`./videos/${fileName}.mp4`} type="video/mp4" />
    </VideoWrapper>

    <ListWrapper marginTop={marginBetweenVideoAndList}>
      <ListHeading fontSize={listHeadingFontSize}>{title}</ListHeading>

      {subtitle && <ListSubtitle>{subtitle}</ListSubtitle>}

      <PaddingWrapper withHorizontalListPadding={withHorizontalListPadding}>
        {listItems.map((item) => (
          <ListItemWrapper
            marginBetweenListItems={marginBetweenListItems}
            key={item.text}
          >
            {item.icon}

            <ListItemText isBold={areListItemsBold}>{item.text}</ListItemText>
          </ListItemWrapper>
        ))}
      </PaddingWrapper>
    </ListWrapper>
  </ListWithVideoWrapper>
);

const ListWithVideoWrapper = styled.div<{
  paddingBottom: number;
}>`
  padding-bottom: ${({ paddingBottom }) => paddingBottom}px;
`;

const VideoWrapper = styled.video`
  border-radius: 14px;

  width: 100%;
`;

const ListWrapper = styled.div<{
  marginTop: number;
}>`
  margin-top: ${(props) => props.marginTop}px;

  width: 100%;
`;

const ListItemWrapper = styled.div<{
  marginBetweenListItems: number;
}>`
  display: flex;
  flex-direction: row;

  align-items: center;

  margin-top: ${({ marginBetweenListItems }) => marginBetweenListItems}px;
`;

const ListItemText = styled.span<{
  isBold: boolean;
}>`
  font-size: 14px;
  margin-left: 10px;
  font-weight: ${(props) => (props.isBold ? 700 : 400)};
`;

const PaddingWrapper = styled.div<{
  withHorizontalListPadding: boolean;
}>`
  padding-left: ${(props) => (props.withHorizontalListPadding ? 22 : 0)}px;
  padding-right: ${(props) => (props.withHorizontalListPadding ? 22 : 0)}px;

  width: 100%;
`;
