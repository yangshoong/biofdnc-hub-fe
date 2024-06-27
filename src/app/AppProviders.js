import React from 'react';
import { ThemeProvider } from '../shared/ui/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import { AuthProvider } from '../features/auth/AuthContext'; // 이 파일은 별도로 생성해야 합니다

function AppProviders({ children }) {
  return (
    <AuthProvider>
      <ThemeProvider>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AuthProvider>
  );
}

export default AppProviders;