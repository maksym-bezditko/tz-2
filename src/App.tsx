import React from 'react';

import { ThemeProvider, styled } from 'styled-components';
import { Header } from './components/Header';
import { DownloadSection } from './components/sections/DownloadSection';
import theme from './theme';
import { FeatureSection } from './components/sections/FeatureSection';
import { SpecialOfferSection } from './components/sections/SpecialOfferSection';
import { FooterSection } from './components/sections/FooterSection';
import { SliderSection } from './components/sections/SliderSection';

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <PageWrapper>
        <Header />

        <DownloadSection />
        <FeatureSection />
        <SpecialOfferSection />
        <SliderSection />
        <FooterSection />
      </PageWrapper>
    </ThemeProvider>
  );
};

const PageWrapper = styled.div``;

export default App;
