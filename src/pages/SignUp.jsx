import React from 'react';
import { Container, Box, TextField, Button, Typography } from '@mui/material';

const SignUp = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        bgcolor: 'background.default',
      }}
    >
      <Container
        maxWidth="xs"
        sx={{
          bgcolor: 'white',
          p: 4,
          borderRadius: 2,
          boxShadow: 2,
        }}
      >
        <Typography
          variant="h5"
          align="center"
          sx={{ mb: 3, color: 'secondary.main' }}
        >
          DustBuddies
          <br/>
          Sign Up
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            type="password"
            sx={{ mb: 3 }}
          />
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            sx={{ py: 1.5 }}
          >
            Sign Up
          </Button>
        </Box>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          Already have an account?{' '}
          <a href="/login" style={{ color: '#f8c3c3' }}>
            Login
          </a>
        </Typography>
      </Container>
    </Box>
  );
};

export default SignUp;
