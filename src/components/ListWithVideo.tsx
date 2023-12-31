import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { ListItem } from '../models';
import { List } from './List';

type Props = {
  title: string;
  fileName: string;
  subtitle?: string;
  isFeature?: boolean;
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
  isFeature = true,
  paddingBottom = 0,
  areListItemsBold = false,
  listHeadingFontSize = 16,
  marginBetweenListItems = 12,
  marginBetweenVideoAndList = 35,
  withHorizontalListPadding = true,
}: Props): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);

  const [ignoreLoggingFeature, setIgnoreLoggingFeature] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ignoreLoggingFeature || !isFeature) return;

      const topOffset = ref.current?.getBoundingClientRect().top;

      if (!topOffset) {
        return;
      }

      if (topOffset < 20 && topOffset > -20) {
        console.log(`Feature: ${title}`);
        setIgnoreLoggingFeature(true);

        setTimeout(() => setIgnoreLoggingFeature(false), 500);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [ignoreLoggingFeature, title, isFeature]);

  return (
    <ListWithVideoWrapper ref={ref} $paddingBottom={paddingBottom}>
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
};

const ListWithVideoWrapper = styled.div<{
  $paddingBottom: number;
}>`
  padding-bottom: ${({ $paddingBottom }) => $paddingBottom}px;
`;

const VideoWrapper = styled.video`
  border-radius: 50px;

  width: 100%;

  max-width: 400px;
`;
