import React, { useState } from 'react';
import HomeRoute from './components/HomeRoute';
import './App.scss';
// Import mock data
import photos from './mocks/photos';
import topics from './mocks/topics';
import PhotoDetailsModal from './routes/PhotoDetailsModal'; // Import the PhotoDetailsModal component

function App() {
  const [favouritePhotos, setFavouritePhotos] = useState([]);
  const [displayModal, setDisplayModal] = useState(false); // State to control modal visibility
  const [selectedPhoto, setSelectedPhoto] = useState(null); // State to store the selected photo


  // Global toggle function: adds or removes a photo ID from favourites
  const toggleFavourite = (photoId) => {
    setFavouritePhotos((prevFavourites) =>
      prevFavourites.includes(photoId)
        ? prevFavourites.filter((id) => id !== photoId)
        : [...prevFavourites, photoId]
    );
  };

  // Function to handle photo click and open modal
  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo); // Store the clicked photo
    setDisplayModal(true); // Show the modal
  };

  // Function to close the modal
  const closeModal = () => {
    setDisplayModal(false); // Hide the modal
  };

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        favouritePhotos={favouritePhotos}
        toggleFavourite={toggleFavourite}
        onPhotoClick={handlePhotoClick} // Pass the photo click handler to HomeRoute
        />
    {/* Conditionally render the modal when displayModal is true */}
      {displayModal && selectedPhoto && (
        <PhotoDetailsModal
          photo={selectedPhoto} // Pass the selected photo to the modal
          closeModal={closeModal} // Pass the closeModal function to the modal
        />
      )}
    </div>
  );
}

export default App;
