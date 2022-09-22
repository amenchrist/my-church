import { useState } from 'react';
import './App.css';
import DashboardNavbar from './components/DashboardNavbar';
import { useStateContext } from './contexts/ContextProvider';
import Router from './routes';
import ThemeProvider from './theme';

function App() {
  const { isMobileNavOpen, setMobileNavOpen } = useStateContext();
  return (
    <div style={{height: '100vh'}}>
    <ThemeProvider>
      <DashboardNavbar onMobileNavOpen={() => setMobileNavOpen(true)} isMobileNavOpen={isMobileNavOpen} />
      <Router />
    </ThemeProvider>
    </div>
  );
}

export default App;
