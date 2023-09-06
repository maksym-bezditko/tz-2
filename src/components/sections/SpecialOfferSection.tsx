import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import BackgroundDetail from '../../assets/BackgroundDetail.png';
import { Heading } from '../typography/Heading';
import theme from '../../theme';
import { List } from '../List';
import { ListItem } from '../../models';
import { ShieldIcon } from '../icons/ShieldIcon';
import { InfinityIcon } from '../icons/InfinityIcon';
import { ChatIcon } from '../icons/ChatIcon';
import { ThreeIcon } from '../icons/ThreeIcon';
import { Button } from '../Button';
import { Subtitle } from '../typography/Subtitle';
import { MoneyBackIcon } from '../icons/MoneyBackIcon';
import { DownloadsIcon } from '../icons/DownloadsIcon';
import { useWindowSize } from '../../hooks/useWindowSize';
import { secondsToTime } from '../../helpers/secondsToTime';

const BENEFITS_LIST: ListItem[] = [
  {
    icon: <ThreeIcon />,
    text: 'Protection for 3 devices',
  },
  {
    icon: <ShieldIcon />,
    text: 'Anti-spy checkup',
  },
  {
    icon: <InfinityIcon />,
    text: 'Unlimited access to anti-spying tools',
  },

  {
    icon: <ChatIcon />,
    text: '24/7 help from security experts',
  },
];

const ADDITIONAL_BENEFITS_LIST: ListItem[] = [
  {
    icon: <MoneyBackIcon />,
    text: '30-day money-back guarantee',
  },
  {
    icon: <DownloadsIcon />,
    text: '100.000 + downloads',
  },
];

type Props = {
  sectionRef: React.RefObject<HTMLDivElement>;
};

const LOCAL_STORAGE_KEY = 'special-offer-seconds-left';

export const SpecialOfferSection = ({ sectionRef }: Props): JSX.Element => {
  const { width } = useWindowSize();

  const [secondsLeft, setSecondsLeft] = useState(30 * 60);

  useEffect(() => {
    const persistedSecondsLeft = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (!persistedSecondsLeft) {
      return;
    }

    setSecondsLeft(+persistedSecondsLeft);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (secondsLeft <= 0) {
        setSecondsLeft(0);

        clearInterval(interval);

        return;
      }

      localStorage.setItem(LOCAL_STORAGE_KEY, `${secondsLeft - 300}`);

      setSecondsLeft(secondsLeft - 300);
    }, 1000);

    return () => clearInterval(interval);
  }, [secondsLeft]);

  return (
    <SpecialOfferSectionWrapper ref={sectionRef}>
      {width < 400 && <BackgroundDetailImage />}

      <ContentWrapper>
        <Heading $color={theme.colors.white} $marginTop={width < 400 ? 0 : 54}>
          Start your spy-free week for as low as
        </Heading>

        <SpecialOfferCard>
          <SpecialOfferNotice>
            <SpecialOfferNoticeText $fontSize={11}>
              Special offer valid for
            </SpecialOfferNoticeText>

            <Row>
              <SpecialOfferNoticeText $fontSize={18} $isBold>
                {secondsToTime(secondsLeft)}
              </SpecialOfferNoticeText>

              <SpecialOfferNoticeText $fontSize={11} $paddingLeft={5}>
                min
              </SpecialOfferNoticeText>
            </Row>
          </SpecialOfferNotice>

          <PriceTag>
            <Row $isFlexStart>
              <PriceTagText
                $fontSize={42}
                $color={theme.colors.primaryPurple}
                $top={10}
              >
                $
              </PriceTagText>
              <PriceTagText $fontSize={80} $color={theme.colors.primaryPurple}>
                2
              </PriceTagText>
            </Row>

            <Column>
              <PriceTagText $fontSize={24} $color={theme.colors.primaryPurple}>
                99
              </PriceTagText>
              <PriceTagText
                $fontSize={24}
                $color={theme.colors.greyishBlue}
                $top={5}
              >
                /7 days
              </PriceTagText>
            </Column>
          </PriceTag>

          <ListWrapper>
            <List
              listItems={BENEFITS_LIST}
              title="What you get:"
              withHorizontalListPadding
              marginBetweenListItems={18}
              listHeadingFontSize={16}
            />
          </ListWrapper>

          <ButtonWrapper>
            <Button>Try for $2.99</Button>
          </ButtonWrapper>

          <Subtitle $color={theme.colors.grey} $marginTop={16}>
            By clicking above, you agree to try 7 days of Clario for $2.99 as a
            special offer. Your subscription will renew for $39.9/month every 2
            months. Cancel anytime or manage your subscription in your Clario
            account.
          </Subtitle>

          <List
            listItems={ADDITIONAL_BENEFITS_LIST}
            marginBetweenListItems={20}
            withHorizontalListPadding={false}
            marginTop={16}
          />
        </SpecialOfferCard>
      </ContentWrapper>
    </SpecialOfferSectionWrapper>
  );
};

const SpecialOfferSectionWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryPurple};

  display: flex;
  flex-direction: column;

  align-items: center;
`;

const BackgroundDetailImage = styled.img.attrs({
  src: BackgroundDetail,
  alt: 'background detail',
})`
  width: 100%;
`;

const ContentWrapper = styled.div`
  padding: 20px 24px 38px;
`;

const SpecialOfferCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 40px;

  margin-top: 20px;

  padding: 24px 24px 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SpecialOfferNotice = styled.div`
  background-color: ${({ theme }) => theme.colors.lightOrange};
  padding: 4px 12px;
  border-radius: 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  max-width: 400px;
`;

const SpecialOfferNoticeText = styled.p<{
  $fontSize: number;
  $isBold?: boolean;
  $paddingLeft?: number;
}>`
  font-size: ${({ $fontSize }) => $fontSize}px;
  font-weight: ${({ $isBold }) => ($isBold ? 'bold' : 'normal')};
  color: ${({ theme }) => theme.colors.orange};
  padding-left: ${({ $paddingLeft }) => $paddingLeft ?? 0}px;
`;

const Row = styled.div<{
  $isFlexStart?: boolean;
}>`
  display: flex;
  align-items: ${({ $isFlexStart }) =>
    $isFlexStart ? 'flex-start' : 'flex-end'};
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PriceTag = styled.div`
  height: 100px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  margin-top: 10px;

  width: 100%;

  max-width: 300px;
`;

const PriceTagText = styled.span<{
  $fontSize: number;
  $color: string;
  $top?: number;
}>`
  font-size: ${({ $fontSize }) => $fontSize}px;
  color: ${({ $color }) => $color};
  font-weight: bold;

  position: relative;
  top: ${({ $top }) => $top ?? 0}px;
`;

const ButtonWrapper = styled.div`
  display: grid;
  place-items: center;

  width: 100%;

  margin-top: 32px;
`;

const ListWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
`;
