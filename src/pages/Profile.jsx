import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const Profile = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Profile
      </Typography>
      <Box component="form" noValidate autoComplete="off">
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          defaultValue="John Doe"
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          defaultValue="john@example.com"
          sx={{ mb: 2 }}
        />
        <Button variant="contained" color="primary" fullWidth>
          Update Profile
        </Button>
      </Box>
    </Container>
  );
};

export default Profile;
