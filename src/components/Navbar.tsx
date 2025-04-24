import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

interface NavbarProps {
  onAboutClick: () => void;
  onExperienceClick: () => void;
}

const Navbar = ({ onAboutClick, onExperienceClick }: NavbarProps) => {
  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        background: 'transparent',
        boxShadow: 'none',
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Portfolio
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button 
            color="primary"
            onClick={onAboutClick}
          >
            About
          </Button>
          <Button 
            color="primary"
            onClick={onExperienceClick}
          >
            Experience
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;