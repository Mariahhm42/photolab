import React from 'react';
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo }) => {
  const { id, location, imageSource, username, profile } = photo;

  return (
    <div className="photo-list__item">
      <img src={imageSource} alt={`Photo ${id}`} className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={profile} alt={`${username}'s profile`} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <p>{username}</p>
          <div className="photo-list__user-location">{location.city}, {location.country}</div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
