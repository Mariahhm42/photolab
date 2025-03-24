import React from 'react';
import "../styles/PhotoListItem.scss";


const PhotoListItem = ({ id, location, imageSource, username, profile }) => {
  return (
    <div className="photo-list-item" key={id}>
      {/* User Profile Section */}
      <div className="photo-list-item__header">
        <img src={profile} alt={`${username}'s profile`} className="photo-list-item__profile" />
        <h2 className="photo-list-item__username">{username}</h2>
      </div>

      {/* Main Photo */}
      <img src={imageSource} alt="Photo" className="photo-list-item__image" />

      {/* Location */}
      <p className="photo-list-item__location">{`${location.city}, ${location.country}`}</p>
    </div>
  );
};

export default PhotoListItem;
