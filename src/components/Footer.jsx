import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        bottom: 0,
        left: 0,
        width: '100%',
        mt: 'auto', // Push footer to the bottom
        py: 2,
        textAlign: 'center',
        bgcolor: 'primary.main', // Same background as Header
        color: 'white', // White text for contrast
        borderTop: '1px solid rgba(255, 255, 255, 0.2)', // Subtle separator line
      }}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} DustBuddies. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
