import React, { useState } from 'react';
import HomeRoute from './components/HomeRoute'; // Import the new HomeRoute
import './App.scss';

const App = () => (
  <div className="App">
    <HomeRoute /> {/* Only render the HomeRoute component */}
  </div>
  );

export default App;