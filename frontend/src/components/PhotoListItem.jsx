import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo, favouritePhotos, toggleFavourite, onClick }) => {
  return (
    <div className="photo-list__item">
      <img
        src={photo.urls.regular}
        alt={`Photo by ${photo.user.name} in ${photo.location.city}`}
        className="photo-list__image"
        onClick={onClick} // Add the onClick event handler here
      />
      <div className="photo-list__info">
        <p>{photo.location.city}, {photo.location.country}</p>
        <p>{photo.user.username}</p>
        {/* Pass global state and function to the favourite button */}
        <PhotoFavButton
          photoId={photo.id}
          favouritePhotos={favouritePhotos}
          toggleFavourite={toggleFavourite}
        />
      </div>
    </div>
  );
};

export default PhotoListItem;
