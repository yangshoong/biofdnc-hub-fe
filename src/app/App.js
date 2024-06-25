import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from '../shared/theme';
import LoginPage from '../pages/LoginPage';
import Dashboard from '../pages/Dashboard';
import NavBar from '../widgets/nav-bar/NavBar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <NavBar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Routes>
          <Route path="/login" element={
            isLoggedIn ? <Navigate to="/dashboard" /> : <LoginPage onLogin={handleLogin} />
          } />
          <Route path="/dashboard" element={
            isLoggedIn ? <Dashboard /> : <Navigate to="/login" />
          } />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;