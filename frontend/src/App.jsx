import React, { useState } from 'react';
import PhotoList from "./components/PhotoList"; //Import PhotoList
//import TopNavigationBar from './components/TopNavigationBar'; // Import TopNavigationBar 
import HomeRoute from './components/HomeRoute'; // Import the new HomeRoute

import './App.scss';

const App = () => {
  const [isFavPhotoExist] = useState(false);

  return (
  <div className="App">
    <HomeRoute />
    <PhotoList /> 
  </div>
  );
};

export default App;