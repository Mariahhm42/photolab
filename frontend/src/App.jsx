import React, { useState } from 'react';
import HomeRoute from './components/HomeRoute'; // Import the new HomeRoute
import './App.scss';
// Import mock data
import photos from './mocks/photos';
import topics from './mocks/topics'; 

function App() {
  // State to track favourite photos (stored as an array of photo IDs)
  const [favouritePhotos, setFavouritePhotos] = useState([]);

  // Function to toggle favourites
  const toggleFavourite = (photoId) => {
    setFavouritePhotos((prevFavourites) =>
      prevFavourites.includes(photoId)
        ? prevFavourites.filter((id) => id !== photoId) // Remove if already liked
        : [...prevFavourites, photoId] // Add if not already liked
    );
  };

  return (
    <div className="App">
      
      {/* Pass favourites state and toggle function to HomeRoute */}
      <HomeRoute
        photos={photos}
        topics={topics}
        favouritePhotos={favouritePhotos}
        toggleFavourite={toggleFavourite}
      />
    </div>
  );
}

export default App;