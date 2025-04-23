import React from 'react';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Navbar from './components/Navbar';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Container>
        <h1>Welcome to My Portfolio</h1>
      </Container>
    </ThemeProvider>
  );
};

export default App;