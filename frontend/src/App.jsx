import React, { useState } from 'react';
import HomeRoute from './components/HomeRoute'; // Import the new HomeRoute
import './App.scss';

// Import mock data
import photos from './mocks/photos.js';
import topics from './mocks/topics.js'; 


const App = () => (
  <div className="App">
    <HomeRoute photos={photos} topics={topics} />  
  </div>
  );

export default App;