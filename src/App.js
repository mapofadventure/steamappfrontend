import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import AppForm from './components/AppForm';
import AppLogoRow from './components/AppLogoRow';
import AppContent from './components/AppContent';

function App() {
  return (
    <div className="App">
      <AppNavbar></AppNavbar>
      <div className="divAppContent">
        <AppContent></AppContent>
      </div>

      <div className="divAppLogoRow">
        <AppLogoRow>
        </AppLogoRow>
      </div>


    </div>
  );
}

export default App;
