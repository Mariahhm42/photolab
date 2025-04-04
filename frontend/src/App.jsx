import React, { useState } from 'react';
import HomeRoute from './components/HomeRoute';
import './App.scss';
// Import mock data
import photos from './mocks/photos';
import topics from './mocks/topics';

function App() {
  const [favouritePhotos, setFavouritePhotos] = useState([]);

  // Global toggle function: adds or removes a photo ID from favourites
  const toggleFavourite = (photoId) => {
    setFavouritePhotos((prevFavourites) =>
      prevFavourites.includes(photoId)
        ? prevFavourites.filter((id) => id !== photoId)
        : [...prevFavourites, photoId]
    );
  };

  return (
    <div className="App">
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
