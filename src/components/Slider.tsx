import React, { useCallback, useRef } from 'react';
import { styled } from 'styled-components';
import theme from '../theme';
import { TrustpilotLogo } from './icons/Trustpilot';
import { AppStoreLogo } from './icons/AppStoreLogo';
import { GooglePlayLogo } from './icons/GooglePlayLogo';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { useWindowSize } from '../hooks/useWindowSize';

type CardItem = {
  logo: JSX.Element;
  textContent: string;
  author: string;
  backgroundColor: string;
  textColor: string;
};

const CARD_ITEMS: CardItem[] = [
  {
    logo: <TrustpilotLogo />,
    author: 'Manweet',
    textContent: 'It is a great application to protect yourself from hackers.',
    textColor: theme.colors.purple,
    backgroundColor: theme.colors.slightPurple,
  },
  {
    logo: <TrustpilotLogo />,
    author: 'Megan_N',
    textContent:
      'Great service! They were an amazing help with making sure my device is secure.',
    textColor: theme.colors.purple,
    backgroundColor: theme.colors.slightPurple,
  },
  {
    logo: <GooglePlayLogo />,
    author: 'Shahu Sardar',
    textContent:
      'The best app you could find! I had a problem of malware which added unknown accounts to my device. The "Talk to experts" feature saved the day! I was helped in all possible ways.',
    textColor: theme.colors.primaryGreen,
    backgroundColor: theme.colors.lightGreen,
  },
  {
    logo: <AppStoreLogo />,
    author: 'Zagkri',
    textContent:
      'Great app! Cool thing with the data breaches - checked mine and my boyfriends emails and found 10! passwords we need to change',
    textColor: theme.colors.purpleBlue,
    backgroundColor: theme.colors.whitishBlue,
  },
];

export const Slider = (): JSX.Element => {
  const wrapperRef: React.RefObject<HTMLDivElement> = useRef(null);

  const { width } = useWindowSize();

  const slideWidth = width * 0.94;

  const scrollRight = useCallback(
    () =>
      wrapperRef.current?.scrollBy({
        left: slideWidth,
        behavior: 'smooth',
      }),
    [slideWidth],
  );

  const scrollLeft = useCallback(
    () =>
      wrapperRef.current?.scrollBy({
        left: -slideWidth,
        behavior: 'smooth',
      }),
    [slideWidth],
  );

  return (
    <CarouselWrapper>
      <ScrollWrapper ref={wrapperRef}>
        {CARD_ITEMS.map((item) => (
          <CarouselItem
            key={item.textContent}
            $backgroundColor={item.backgroundColor}
          >
            {item.logo}

            <ContentWrapper>
              <TextContent $isBold $color={item.textColor}>
                {item.textContent}
              </TextContent>

              <TextContent $color={item.textColor}>{item.author}</TextContent>
            </ContentWrapper>
          </CarouselItem>
        ))}
      </ScrollWrapper>

      <ButtonsWrapper>
        <ControlButton onClick={scrollLeft}>
          <ArrowLeftIcon />
        </ControlButton>
        <ControlButton onClick={scrollRight}>
          <ArrowRightIcon />
        </ControlButton>
      </ButtonsWrapper>
    </CarouselWrapper>
  );
};

const CarouselWrapper = styled.div`
  position: relative;
`;

const ScrollWrapper = styled.div`
  height: 340px;

  display: flex;
  overflow-x: scroll;

  position: relative;

  scrollbar-width: none;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    display: none;
  }

  margin-top: 30px;
`;

const CarouselItem = styled.div<{
  $backgroundColor: string;
}>`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  height: 340px;
  min-width: 94%;
  padding-left: 10px;
  padding: 40px 24px;

  margin-left: 3%;
  margin-right: 3%;

  scroll-snap-align: center;

  border-radius: 20px;
`;

const TextContent = styled.p<{
  $isBold?: boolean;
  $color: string;
}>`
  font-size: 16px;
  font-weight: ${({ $isBold }) => ($isBold ? 'bold' : 'normal')};

  color: ${({ $color }) => $color};
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 75%;
  justify-content: space-between;
  margin-top: 30px;
`;

const ButtonsWrapper = styled.div`
  width: 40%;

  position: absolute;

  bottom: -24px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  justify-content: space-between;

  height: 48px;
`;

const ControlButton = styled.button`
  width: 48px;
  height: 48px;

  border-radius: 24px;

  background-color: ${({ theme }) => theme.colors.white};

  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);

  cursor: pointer;
`;
