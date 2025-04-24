import React, { useState } from 'react';
import { Container, CssBaseline, ThemeProvider, createTheme, Box, Typography, Stack, IconButton, Tabs, Tab } from '@mui/material';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import About from './components/About';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
const theme = createTheme({
  palette: {
    primary: {
      main: '#64ffda',
    },
    background: {
      default: '#0a192f',
      paper: '#112240',
    },
    text: {
      primary: '#ccd6f6',
      secondary: '#8892b0',
    },
  },
  typography: {
    fontFamily: '"Calibre","Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif',
  },
});

const TabPanel = ({ children, value, index }: { children: React.ReactNode, value: number, index: number }) => (
  <Box hidden={value !== index} sx={{ py: 4 }}>
    {value === index && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    )}
  </Box>
);

function App() {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
        <Box sx={{ 
          borderBottom: 1, 
          borderColor: 'divider', 
          position: 'fixed', 
          width: '100%', 
          top: 0, 
          zIndex: 1100, 
          bgcolor: 'background.default' 
        }}>
          <Tabs 
            value={currentTab} 
            onChange={handleTabChange}
            centered
            sx={{
              '& .MuiTab-root': {
                color: 'text.secondary',
                '&.Mui-selected': {
                  color: 'primary.main',
                }
              }
            }}
          >
            <Tab label="Home" />
            <Tab label="About" />
            <Tab label="Projects" />
            <Tab label="Achievements" />
          </Tabs>
        </Box>

        <Container maxWidth="lg" sx={{ pt: 8 }}>
          <TabPanel value={currentTab} index={0}>
            <Box sx={{ 
              minHeight: '90vh', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center'
            }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography 
                  component={motion.h1}
                  variant="h5" 
                  sx={{ color: theme.palette.primary.main, mb: 2 }}
                >
                  Hi, I'm
                </Typography>
                <Typography 
                  component={motion.h2}
                  variant="h1" 
                  sx={{ 
                    fontSize: '4rem',
                    fontWeight: 600,
                    color: theme.palette.text.primary,
                    mb: 2 
                  }}
                >
                  Udisha Dutta Chowdhury.
                </Typography>
                <Typography 
                  component={motion.h3}
                  variant="h2" 
                  sx={{ 
                    fontSize: '3rem',
                    color: theme.palette.text.secondary,
                    mb: 4 
                  }}
                >
                  Building Secure, Intelligent Systems: ML Engineer with Expertise in Cybersecurity
                </Typography>

                <Stack direction="row" spacing={2}>
                  <motion.a 
                    whileHover={{ scale: 1.1 }}
                    href="https://linkedin.com/in/udisha-dutta-chowdhury" 
                    target="_blank"
                    style={{ textDecoration: 'none' }}
                  >
                    <IconButton sx={{ color: theme.palette.primary.main }}>
                      <LinkedInIcon />
                    </IconButton>
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.1 }}
                    href="https://github.com/udishadc" 
                    target="_blank"
                    style={{ textDecoration: 'none' }}
                  >
                    <IconButton sx={{ color: theme.palette.primary.main }}>
                      <GitHubIcon />
                    </IconButton>
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.1 }}
                    href="mailto:duttachowdhury.u@northeastern.edu"
                    style={{ textDecoration: 'none' }}
                  >
                    <IconButton sx={{ color: theme.palette.primary.main }}>
                      <EmailIcon />
                    </IconButton>
                  </motion.a>
                </Stack>
              </motion.div>
            </Box>
          </TabPanel>

          <TabPanel value={currentTab} index={1}>
            <About />
          </TabPanel>

          <TabPanel value={currentTab} index={2}>
            <Projects />
          </TabPanel>

          <TabPanel value={currentTab} index={3}>
          <Achievements />
        </TabPanel>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;