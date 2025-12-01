import React from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import AppLayout from './components/layout/AppLayout';
import './App.css';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="hanger-theme">
      <AppLayout />
    </ThemeProvider>
  );
}

export default App;