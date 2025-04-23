import React from 'react';
import { Container, CssBaseline, ThemeProvider, createTheme, Box, Typography } from '@mui/material';
import Navbar from './components/Navbar';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Container>
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to My Portfolio
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            I'm a Full Stack Developer
          </Typography>
          <Typography variant="body1" gutterBottom>
            This portfolio showcases my projects and skills in web development.
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;