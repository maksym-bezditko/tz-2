import React from 'react';
import { styled } from 'styled-components';
import { ListItem } from '../models';
import { List } from './List';

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

    <List
      title={title}
      subtitle={subtitle}
      listItems={listItems}
      areListItemsBold={areListItemsBold}
      marginTop={marginBetweenVideoAndList}
      listHeadingFontSize={listHeadingFontSize}
      marginBetweenListItems={marginBetweenListItems}
      withHorizontalListPadding={withHorizontalListPadding}
    />
  </ListWithVideoWrapper>
);

const ListWithVideoWrapper = styled.div<{
  paddingBottom: number;
}>`
  padding-bottom: ${({ paddingBottom }) => paddingBottom}px;
`;

const VideoWrapper = styled.video`
  border-radius: 50px;

  width: 100%;
`;
