import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';  // Import PhotoList to show similar photos

const PhotoDetailsModal = ({ photo, onClose, similarPhotos }) => {
  // Print out the photo data for now
  console.log("Selected Photo Data: ", photo);

  return (
    <div className="photo-details-modal">
      {/* Close button */}
      <button 
        className="photo-details-modal__close-button"
        onClick={onClose} // Trigger the close action
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>

      {/* Modal content */}
      <div className="photo-details-modal__content">
        {/* Display the larger version of the selected photo */}
        <img src={photo.urls.regular} alt={photo.alt_description} className="photo-details-modal__image" />
        <p>{photo.description}</p>
        <p>Photographer: {photo.user.name}</p>
        
        {/* Display similar photos */}
        <h3>Similar Photos</h3>
        <PhotoList
          photos={similarPhotos}  // Pass the similar photos
          favouritePhotos={[]}    // You can pass favouritePhotos here if needed
          toggleFavourite={() => {}}  // Pass a function to toggle favourites if needed
          onPhotoClick={() => {}}  // Optional: handle photo click inside the modal
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
