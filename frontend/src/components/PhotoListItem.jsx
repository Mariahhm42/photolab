import React from 'react';
import "../styles/PhotoListItem.scss";


const PhotoListItem = ({ photo }) => {
  const { id, location, imageSource, username, profile } = photo;

  return (
    <div className="photo-list-item">
      <img src={imageSource} alt={`Photo ${id}`} />
      <div className="photo-info">
        <img src={profile} alt={`${username}'s profile`} className="profile-pic" />
        <p>{username}</p>
        <p>{location.city}, {location.country}</p>
      </div>
    </div>
  );
};

export default PhotoListItem;
