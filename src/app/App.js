import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppProviders from './AppProviders';
import AppRoutes from './AppRoutes';
import NavBar from '../widgets/nav-bar/NavBar';
import './App.css';

function App() {
  return (
    <AppProviders>
      <Router>
        <NavBar />
        <AppRoutes />
      </Router>
    </AppProviders>
  );
}

export default App;