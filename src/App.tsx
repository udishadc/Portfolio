import React from 'react';
import { Container, CssBaseline, ThemeProvider, createTheme, Box, Typography, Grid, Paper } from '@mui/material';
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
      <Container>
        <Box sx={{ mt: 4, mb: 4 }}>
          <Typography variant="h1" gutterBottom align="center">
            Udisha Dutta Chowdhury
          </Typography>
          <Typography variant="h6" align="center" gutterBottom>
            duttachowdhury.u@northeastern.edu | +1(857)-763-7917
          </Typography>
          <Typography variant="h6" align="center" gutterBottom>
            <a href="https://linkedin.com/udisha-dutta-chowdhury" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            {' | '}
            <a href="https://github.com/udishadc" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Typography>

          <Grid container spacing={3} sx={{ mt: 4 }}>
            <Grid item component="div" xs={12}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom>
                  Education
                </Typography>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle1" gutterBottom>
                    Northeastern University, Boston, MA
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Master of Science in Cyber Physical Systems - Internet of Things | GPA: 4.00
                  </Typography>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
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
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    August 2018 - May 2022
                  </Typography>
                  <Typography variant="body1">
                    Relevant Coursework: Data Structures, Algorithms, Computer Networks, DBMS, Operating Systems
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;