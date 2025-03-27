import React from 'react';
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo }) => {
  return (
    <div className="photo-list__item">
      <img src={photo.imageSource} alt={photo.description} className="photo-list__image" />
      <div className="photo-list__info">
        <p>{photo.location.city}, {photo.location.country}</p>
        <p>{photo.username}</p>
      </div>
    </div>
  );
};

export default PhotoListItem;
