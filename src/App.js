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
      <div>
        <AppContent></AppContent>
      </div>

      <div>
        <div className="divAppForm">
          <AppForm></AppForm>
        </div>
      </div>

      <div className="divAppLogoRow">
        <AppLogoRow>
        </AppLogoRow>
      </div>


    </div>
  );
}

export default App;
