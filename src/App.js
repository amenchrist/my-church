import { useState } from 'react';
import './App.css';
import DashboardNavbar from './components/DashboardNavbar';
import Router from './routes';
import ThemeProvider from './theme';

function App() {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <>
    <ThemeProvider>
      <DashboardNavbar onMobileNavOpen={() => setMobileNavOpen(true)} isMobileNavOpen={isMobileNavOpen} setMobileNavOpen={() => setMobileNavOpen } />
      <Router />
    </ThemeProvider>
    </>
  );
}

export default App;
