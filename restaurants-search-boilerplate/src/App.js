import React from 'react';
import { Home } from './pages/home';
import theme  from './theme';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
    
  );
}

export default App;
