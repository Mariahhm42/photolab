import React, { useState } from 'react';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';
import PhotoDetailsModal from '../routes/PhotoDetailsModal'; // Correct import path
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, favouritePhotos, toggleFavourite }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null); // State to manage the selected photo

  // Function to get similar photos based on certain criteria (e.g., same photographer)
  const getSimilarPhotos = (photo) => {
    return photos.filter((p) => p.user.username === photo.user.username && p.id !== photo.id);
  };

  // Handle the click on a photo
  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo); // Set the selected photo when a photo is clicked
  };

  // Handle closing the modal
  const handleCloseModal = () => {
    setSelectedPhoto(null); // Close the modal by setting selectedPhoto to null
  };

  // Get similar photos based on the selected photo
  const similarPhotos = selectedPhoto ? getSimilarPhotos(selectedPhoto) : [];

  return (
    <div className="home-route">
      {/* Pass topics and favouritePhotos to TopNavigationBar */}
      <TopNavigationBar topics={topics} favouritePhotos={favouritePhotos} />
      
      {/* Render the PhotoDetailsModal when a photo is selected */}
      {selectedPhoto && (
        <PhotoDetailsModal 
          photo={selectedPhoto} // Pass the selected photo data
          onClose={handleCloseModal} // Pass the close handler
          similarPhotos={similarPhotos} // Pass similar photos to the modal
        />
      )}
      
      {/* Pass photos, favouritePhotos, toggleFavourite, and onPhotoClick to PhotoList */}
      <PhotoList
        photos={photos}
        favouritePhotos={favouritePhotos}
        toggleFavourite={toggleFavourite}
        onPhotoClick={handlePhotoClick} // Pass the click handler to PhotoList
      />
    </div>
  );
};

export default HomeRoute;
