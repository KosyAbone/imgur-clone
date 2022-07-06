import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/Styles/GlobalStyles'
import { theme } from './components/Styles/theme';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Body from "./components/Body/Body"

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
          <Header />
          <Body />
          <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
