import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';
import "../styles/FavIcon.scss"

const PhotoDetailsModal = ({
  photo,
  onClose,
  similarPhotos,
  favouritePhotos,
  toggleFavourite
}) => {
  if (!photo) return null;

  // Determine if the main photo is favorited
  const isFavourite = favouritePhotos.includes(photo.id);

  const handleFavouriteClick = () => {
    toggleFavourite(photo.id);
  };

  return (
    <div className="photo-details-modal">
      {/* Dark overlay */}
      <div className="photo-details-modal__overlay" onClick={onClose}></div>

      {/* Modal container */}
      <div className="photo-details-modal__container">
        {/* Close button over the main image, at top-left */}
        <button
          className="photo-details-modal__close-button"
          onClick={onClose}
        >
          <img src={closeSymbol} alt="Close modal" />
        </button>

        {/* Main content */}
        <div className="photo-details-modal__content">
          {/* Photo container */}
          <div className="photo-details-modal__photo-container">
            <img
              src={photo.urls.regular}
              alt={photo.alt_description || 'Photo'}
              className="photo-details-modal__image"
            />
            {/* Heart icon now positioned on the left side (e.g., bottom-left) over the image */}
            <div className="photo-details-modal__fav-icon">
              <PhotoFavButton
                photoId={photo.id}
                favouritePhotos={favouritePhotos}
                toggleFavourite={toggleFavourite}
              />
            </div>
          </div>

          {/* Photo details */}
          <div className="photo-details-modal__info">
            <p className="photo-details-modal__photographer">
              Photographer: {photo.user.name}
            </p>
            {photo.location && (
              <p className="photo-details-modal__location">
                {photo.location.city}, {photo.location.country}
              </p>
            )}
          </div>

          {/* Similar photos section */}
          <div className="photo-details-modal__similar">
            <h3>Related Photos</h3>
            <PhotoList
              photos={similarPhotos}
              favouritePhotos={favouritePhotos}
              toggleFavourite={toggleFavourite}
              onPhotoClick={() => {}} // Optionally disable clicks here
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
