import React from 'react';
import { CssBaseline, Box } from '@mui/material';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <CssBaseline />
      <Header />
      <Box display="flex">
        <Sidebar />
        <Box component="main" flexGrow={1} p={3}>
          <Dashboard />
        </Box>
      </Box>
      <Footer />
    </div>
  );
}

export default App;
