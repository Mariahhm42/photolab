import React, { useState } from 'react';
import HomeRoute from './components/HomeRoute'; // Import the new HomeRoute
import './App.scss';

// Import mock data
import photos from './mocks/photos';
import topics from './mocks/topics';

console.log("Mock Photos in App:", photos); // Debugging

const App = () => (
  <div className="App">
    <HomeRoute photos={photos} topics={topics}/> {/* Only render the HomeRoute component */}
  </div>
  );

export default App;