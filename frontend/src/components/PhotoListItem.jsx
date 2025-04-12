import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo, favouritePhotos, toggleFavourite, onClick }) => {
  return (
    <div className="photo-list__item">
      <div className="photo-list__image-container">
        <img
          src={photo.urls.regular}
          alt={`Photo by ${photo.user.name} in ${photo.location.city}`}
          className="photo-list__image"
          onClick={onClick} // When the image is clicked, trigger onClick to show modal
        />
        {/* Favorite icon positioned at top-left */}
        <div className="photo-list__like-icon">
          <PhotoFavButton
            photoId={photo.id}
            favouritePhotos={favouritePhotos}
            toggleFavourite={toggleFavourite}
          />
        </div>
      </div>
      <div className="photo-list__user-details">
        <img 
          src={photo.user.profile} 
          alt={photo.user.name} 
          className="photo-list__user-profile" 
        />
        <div className="photo-list__user-info">
          <span className="photo-list__user-name">
            <p> {photo.user.name}</p></span>
          <span className="photo-list__user-location">
            {photo.location.city}, {photo.location.country}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
