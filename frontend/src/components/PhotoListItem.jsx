import React from 'react';
import PhotoFavButton from './PhotoFavButton'; // Import the PhotoFavButton component
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo, favourites, toggleFavourite }) => {
  return (
    <div className="photo-list__item">
      {/* Use photo.urls.regular as the image source */}
      <img
        src={photo.urls.regular}
        alt={`Photo by ${photo.user.name} in ${photo.location.city}`}
        className="photo-list__image"
      />
      <div className="photo-list__info">
        <p>{photo.location.city}, {photo.location.country}</p>
        <p>{photo.user.username}</p>
      </div>

      {/* Add PhotoFavButton here */}
      <PhotoFavButton
        photoId={photo.id} // Pass the photo ID
        favourites={favourites} // Pass the favourites state
        toggleFavourite={toggleFavourite} // Pass the toggle function
      />
    </div>
  );
};

export default PhotoListItem;
