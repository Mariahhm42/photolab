import React from 'react';
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo, favourites, toggleFavourite }) => {
  return (
    <div className="photo-item">
    <img src={photo.urls.regular} alt={photo.location.city} />
    <PhotoFavButton
      photoId={photo.id}
      favourites={favourites}
      toggleFavourite={toggleFavourite}
    />
  </div>
);
};


export default PhotoListItem;
