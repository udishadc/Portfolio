import React from 'react';
import { Container, CssBaseline, ThemeProvider, createTheme, Box, Typography, Paper } from '@mui/material';
import Navbar from './components/Navbar';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="lg">
        <Box sx={{ py: 4 }}>
          <Box sx={{ mb: 4, textAlign: 'center' }}>
            <Typography variant="h1" gutterBottom>
              Udisha Dutta Chowdhury
            </Typography>
            <Typography variant="h6" gutterBottom>
              duttachowdhury.u@northeastern.edu | +1(857)-763-7917
            </Typography>
            <Typography variant="h6">
              <Box component="span" sx={{ '& a': { color: 'primary.main', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } } }}>
                <a href="https://linkedin.com/in/udisha-dutta-chowdhury" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                {' | '}
                <a href="https://github.com/udishadc" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </Box>
            </Typography>
          </Box>

          <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
            <Typography variant="h5" gutterBottom>
              Education
            </Typography>
            <Box sx={{ mb: 4 }}>
              <Typography variant="subtitle1" gutterBottom>
                Northeastern University, Boston, MA
              </Typography>
              <Typography variant="body1" gutterBottom>
                Master of Science in Cyber Physical Systems - Internet of Things | GPA: 4.00
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                September 2023 - May 2025
              </Typography>
              <Typography variant="body1">
                Focus Area: Software Engineering, Data Networking, IoT Systems, ML Ops, Networking Security, 
                IoT Embedded System Design, Object-Oriented Design, Connected Devices
              </Typography>
            </Box>

            <Box>
              <Typography variant="subtitle1" gutterBottom>
                PES University, Bengaluru, India
              </Typography>
              <Typography variant="body1" gutterBottom>
                Bachelor of Technology in Electronics and Communication; Minor in Computer Science
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                August 2018 - May 2022
              </Typography>
              <Typography variant="body1">
                Relevant Coursework: Data Structures, Algorithms, Computer Networks, DBMS, Operating Systems
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;