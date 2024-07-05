import React from 'react';
import { Container, Box, Typography, Paper } from '@mui/material';
import LoginForm from '../../features/auth/ui/LoginForm';

function LoginPage({ onLogin }) {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper elevation={3} sx={{ padding: 4, width: '100%' }}>
          <Typography component="h1" variant="h5" align="center" gutterBottom>
            BIO-FD&C
          </Typography>
          <LoginForm onLogin={onLogin} />
        </Paper>
      </Box>
    </Container>
  );
}

export default LoginPage;