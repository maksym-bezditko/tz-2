import React, { useRef, useState } from 'react';

import { ThemeProvider, styled } from 'styled-components';
import { Header } from './components/Header';
import { DownloadSection } from './components/sections/DownloadSection';
import theme from './theme';
import { FeatureSection } from './components/sections/FeatureSection';
import { SpecialOfferSection } from './components/sections/SpecialOfferSection';
import { FooterSection } from './components/sections/FooterSection';
import { SliderSection } from './components/sections/SliderSection';
import { StepsSection } from './components/sections/StepsSection';

const App = (): JSX.Element => {
  const specialOfferSectionRef = useRef<HTMLDivElement>(null);

  const [isHeaderButtonVisible, setIsHeaderButtonVisible] = useState(false);

  const handleProtectMeNow = () => {
    const LOCAL_STORAGE_KEY = 'TIMES_CLICKED';

    const timesClicked = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (timesClicked) {
      console.log('Scroll to price:', +timesClicked + 1);
      localStorage.setItem(LOCAL_STORAGE_KEY, `${+timesClicked + 1}`);
    } else {
      console.log('Scroll to price: 1');
      localStorage.setItem(LOCAL_STORAGE_KEY, '1');
    }

    specialOfferSectionRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <PageWrapper>
        <Header
          isHeaderButtonVisible={isHeaderButtonVisible}
          handleProtectMeNow={handleProtectMeNow}
        />

        <DownloadSection
          setIsHeaderButtonVisible={setIsHeaderButtonVisible}
          handleProtectMeNow={handleProtectMeNow}
        />
        <FeatureSection />
        <StepsSection />
        <SpecialOfferSection sectionRef={specialOfferSectionRef} />
        <SliderSection />
        <FooterSection handleProtectMeNow={handleProtectMeNow} />
      </PageWrapper>
    </ThemeProvider>
  );
};

const PageWrapper = styled.div``;

export default App;
