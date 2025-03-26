import React, { useState } from 'react';
import PhotoList from "./components/PhotoList"; //Import PhotoList
import TopNavigationBar from './components/TopNavigationBar'; // Import TopNavigationBar 

import './App.scss';

const App = () => {
  const [isFavPhotoExist] = useState(false);

  return (
  <div className="App">
    <PhotoList />
    <TopNavigationBar isFavPhotoExist={isFavPhotoExist}/>
    
  </div>
  );
};

export default App;