import React, { useCallback } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './utils/usePersistedState';

import Header from './components/Header';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyle from './styles/global';
import Routes from './routes';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>(
    '@GithubExplorer:theme',
    light,
  );

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme.title]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header toggleTheme={toggleTheme} />
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
