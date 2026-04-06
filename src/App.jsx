import React, { useContext } from 'react';
import { AppProvider, AppContext } from './context/AppContext';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import InsightsPage from './pages/InsightsPage';

const AppContent = () => {
  const { role, darkMode } = useContext(AppContext); 

  return (
    <div className={darkMode ? "bg-gray-900 min-h-screen" : "bg-gray-50 min-h-screen"}>
      <Navbar />
      <div className="p-6">
        <Dashboard />
        <Transactions />
        {/* <InsightsPage /> */}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;