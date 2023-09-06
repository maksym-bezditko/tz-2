import React, { useEffect, useRef } from 'react';

import { styled } from 'styled-components';
import { Heading } from '../typography/Heading';
import theme from '../../theme';
import { Subtitle } from '../typography/Subtitle';
import { BIG_BUTTON_HEIGHT, Button } from '../Button';
import { AppleLogo } from '../icons/AppleLogo';
import { MacOSLogo } from '../icons/MacOSLogo';
import { CheckIcon } from '../icons/CheckIcon';
import { ListItem } from '../../models';
import { ListWithVideo } from '../ListWithVideo';
import { HEADER_HEIGHT } from '../Header';

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

type Props = {
  setIsHeaderButtonVisible: React.Dispatch<React.SetStateAction<boolean>>;
  handleProtectMeNow: () => void;
};

export const DownloadSection = ({
  setIsHeaderButtonVisible,
  handleProtectMeNow,
}: Props): JSX.Element => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getElementPosition = () => {
      const element = elementRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();

        if (rect.top <= HEADER_HEIGHT - BIG_BUTTON_HEIGHT) {
          setIsHeaderButtonVisible(true);
        } else {
          setIsHeaderButtonVisible(false);
        }
      }
    };

    getElementPosition();

    window.addEventListener('scroll', getElementPosition);
    window.addEventListener('resize', getElementPosition);

    return () => {
      window.removeEventListener('scroll', getElementPosition);
      window.removeEventListener('resize', getElementPosition);
    };
  }, [setIsHeaderButtonVisible]);

  return (
    <DownloadSectionWrapper>
      <Heading>Stop your</Heading>

      <Heading color={theme.colors.primaryPurple}>
        phone from being spied on
      </Heading>

      <Subtitle $marginTop={15}>
        Try Clario, a smart anti-spy app that effectively protects your privacy.{' '}
      </Subtitle>

      <ButtonWrapper ref={elementRef}>
        <Button onClick={handleProtectMeNow}>Protect me now</Button>
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
        isFeature={false}
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

  display: grid;
  place-items: center;
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
