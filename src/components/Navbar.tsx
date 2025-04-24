import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Portfolio
        </Typography>
        <Box>
          <Button color="inherit">Education</Button>
          <Button color="inherit">Skills</Button>
          <Button color="inherit">Experience</Button>
          <Button color="inherit">Projects</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;