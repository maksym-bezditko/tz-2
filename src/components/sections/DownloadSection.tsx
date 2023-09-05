import React from 'react';

import { styled } from 'styled-components';
import { Heading } from '../typography/Heading';
import theme from '../../theme';
import { Subtitle } from '../typography/Subtitle';
import { Button } from '../Button';
import { AppleLogo } from '../icons/AppleLogo';
import { MacOSLogo } from '../icons/MacOSLogo';
import { CheckIcon } from '../icons/CheckIcon';
import { ListItem } from '../../models';
import { ListWithVideo } from '../ListWithVideo';

const SizedCheckIcon = <CheckIcon width={16} height={18} />;

const LIST_OF_ABILITIES: ListItem[] = [
  {
    text: 'reveal hidden spying apps',
    icon: SizedCheckIcon,
  },
  {
    text: 'stop silent location tracking',
    icon: SizedCheckIcon,
  },
  {
    text: 'avoid social media hacks',
    icon: SizedCheckIcon,
  },
  {
    text: 'provide 24/7 expert security help',
    icon: SizedCheckIcon,
  },
];

export const DownloadSection = (): JSX.Element => {
  return (
    <DownloadSectionWrapper>
      <Heading>Stop your</Heading>
      <Heading color={theme.colors.primaryPurple}>
        phone from being spied on
      </Heading>

      <Subtitle>
        Try Clario, a smart anti-spy app that effectively protects your privacy.{' '}
      </Subtitle>

      <ButtonWrapper>
        <Button>Protect me now</Button>
      </ButtonWrapper>

      <AvailablePlatformsWrapper>
        <PlatformWrapper>
          <AppleLogo width={12} height={14} /> <PlatformText>iOS</PlatformText>
        </PlatformWrapper>

        <PlatformWrapper>
          <MacOSLogo width={14} height={13} />
          <PlatformText>MacOS</PlatformText>
        </PlatformWrapper>

        <PlatformWrapper>
          <PlatformText>Windows</PlatformText>
        </PlatformWrapper>
      </AvailablePlatformsWrapper>

      <ListWithVideo
        fileName="Video"
        listItems={LIST_OF_ABILITIES}
        title="The anti-spy Clario app can:"
        withHorizontalListPadding={true}
      />
    </DownloadSectionWrapper>
  );
};

const DownloadSectionWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.slightPurple};
  padding: 110px 24px 50px;

  display: flex;
  flex-direction: column;

  align-items: center;
`;

const ButtonWrapper = styled.div`
  margin-top: 35px;
  width: 100%;
`;

const AvailablePlatformsWrapper = styled.div`
  display: flex;
  width: 50%;
  min-width: 170px;
  max-width: 300px;

  margin-top: 35px;
  margin-bottom: 35px;

  justify-content: space-between;
`;

const PlatformWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const PlatformText = styled.span`
  font-weight: 700;
  font-size: 12px;
  padding-left: 4px;
`;
