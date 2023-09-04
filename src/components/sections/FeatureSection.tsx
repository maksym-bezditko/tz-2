import React from 'react';

import { styled } from 'styled-components';
import { Heading } from '../typography/Heading';
import { FeatureListItem } from '../../models';
import { CirclesIcon } from '../icons/CirclesIcon';
import { BellIcon } from '../icons/BellIcon';
import { DotsIcon } from '../icons/DotsIcon';
import { ListWithVideo } from '../ListWithVideo';
import { EyeIcon } from '../icons/EyeIcon';
import { SkateIcon } from '../icons/SkateIcon';
import { CompassIcon } from '../icons/CompassIcon';
import { PolaroidIcon } from '../icons/PolaroidIcon';
import { ShieldIcon } from '../icons/ShieldIcon';
import { PhoneIcon } from '../icons/PhoneIcon';
import { ContactsIcon } from '../icons/ContactsIcon';
import { ExclamationMarkIcon } from '../icons/ExclamationMarkIcon';
import { PhoneWithFraudIcon } from '../icons/PhoneWithFraudIcon';
import { PhoneWithoutFraudIcon } from '../icons/PhoneWithoutFraudIcon';

const LIST_OF_FEATURES: FeatureListItem[] = [
  {
    title: 'Spyware detector',
    subtitle: 'Find apps secretly spying on you and your data. ',
    videoFileName: 'Video',
    listItems: [
      {
        icon: <CirclesIcon />,
        text: 'Full background anti-spyware scan',
      },
      {
        icon: <BellIcon />,
        text: 'Instant spyware detection alerts',
      },
      {
        icon: <DotsIcon />,
        text: 'Immediate threat quarantining',
      },
    ],
  },

  {
    title: 'Tracker detector',
    subtitle: 'Discover who tracks your location to spy on you.',
    videoFileName: 'Video',
    listItems: [
      {
        icon: <EyeIcon />,
        text: 'Stop being secretly tracked',
      },
      {
        icon: <SkateIcon />,
        text: 'Protect your real location',
      },
      {
        icon: <CompassIcon />,
        text: 'Control who sees your location',
      },
    ],
  },

  {
    title: 'Social media protection',
    subtitle: 'Easily prevent social media account hacks.',
    videoFileName: 'Video',
    listItems: [
      {
        icon: <PolaroidIcon />,
        text: 'See who uses your accounts',
      },
      {
        icon: <ShieldIcon />,
        text: 'Revoke access for other users',
      },
      {
        icon: <BellIcon />,
        text: 'Get unauthorized login alerts',
      },
    ],
  },

  {
    title: 'Call recorder blocker',
    subtitle: 'Discover if someone records your calls and chats. ',
    videoFileName: 'Video',
    listItems: [
      {
        icon: <PhoneIcon />,
        text: 'Hide your call history and records',
      },
      {
        icon: <ContactsIcon />,
        text: 'Revoke sharing your contact list',
      },
      {
        icon: <ExclamationMarkIcon />,
        text: 'Help secret texts remain secret',
      },
    ],
  },

  {
    title: 'Screen recording detector',
    subtitle: 'Don’t let anyone access your phone screen.',
    videoFileName: 'Video',
    listItems: [
      {
        icon: <PhoneWithFraudIcon />,
        text: 'Find out if your screen is being recorded',
      },
      {
        icon: <PhoneWithoutFraudIcon />,
        text: 'Immediately stop silent recordings',
      },
      {
        icon: <BellIcon />,
        text: 'Get alerts if your camera is in use',
      },
    ],
  },
];

export const FeatureSection = (): JSX.Element => {
  return (
    <FeatureSectionWrapper>
      <Heading marginBottom={30}>Clario helps you easily avoid spying.</Heading>

      {LIST_OF_FEATURES.map((item) => (
        <ListWithVideo
          withHorizontalListPadding={false}
          marginBetweenVideoAndList={15}
          fileName={item.videoFileName}
          marginBetweenListItems={15}
          listItems={item.listItems}
          listHeadingFontSize={18}
          subtitle={item.subtitle}
          paddingBottom={40}
          title={item.title}
          areListItemsBold
          key={item.title}
        />
      ))}
    </FeatureSectionWrapper>
  );
};

const FeatureSectionWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px 24px 10px;

  display: flex;
  flex-direction: column;

  align-items: center;
`;
