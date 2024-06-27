import React from 'react';
import { ThemeProvider } from '../shared/ui/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';

function AppProviders({ children }) {
  return (
    <ThemeProvider>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default AppProviders;