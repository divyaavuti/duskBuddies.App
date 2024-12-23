import React from 'react';
import { Container, Box, TextField, Button, Typography } from '@mui/material';

const Login = () => {
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
          sx={{ mb: 3, color: 'primary.main' }}
        >
          Login
        </Typography>
        <Box component="form" noValidate autoComplete="off">
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
            color="primary"
            fullWidth
            sx={{ py: 1.5 }}
          >
            Login
          </Button>
        </Box>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          Don’t have an account?{' '}
          <a href="/signup" style={{ color: '#a3c4f3' }}>
            Sign Up
          </a>
        </Typography>
      </Container>
    </Box>
  );
};

export default Login;
