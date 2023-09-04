import React from 'react';

import { ThemeProvider, styled } from 'styled-components';
import { Header } from './components/Header';
import { DownloadSection } from './components/sections/DownloadSection';
import theme from './theme';
import { FeatureSection } from './components/sections/FeatureSection';

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <PageWrapper>
        <Header />

        <DownloadSection />
        <FeatureSection />
      </PageWrapper>
    </ThemeProvider>
  );
};

const PageWrapper = styled.div``;

export default App;
