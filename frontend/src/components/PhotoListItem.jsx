import React from 'react';
import "../styles/PhotoListItem.scss";
import PropTypes from "prop-types"; // Import prop-types for validation
import PhotoFavButton from './PhotoFavButton';

/**
 * PhotoListItem Component
 * Displays a photo, user details, and a favorite button.
 * 
 * Props:
 * @param {Object} photo - Photo details including image, user profile, username, and location.
 */

const PhotoListItem = ({ photo }) => {
  return (
    <div className="photo-list__item">
      <img src={photo.imageSource} alt="Photo" className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={photo.profile} alt="User" className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <div>{photo.username}</div>
          <div className="photo-list__user-location">
            {photo.location.city}, {photo.location.country}
          </div>
        </div>
      </div>
      <PhotoFavButton /> {/* Like button for each photo */}
    </div>
  );
};

/**
 * PropTypes validation for PhotoListItem
 */
PhotoListItem.propTypes = {
  photo: PropTypes.shape({
    imageSource: PropTypes.string.isRequired, // URL of the photo
    profile: PropTypes.string.isRequired, // URL of user's profile picture
    username: PropTypes.string.isRequired, // Username of the uploader
    location: PropTypes.shape({
      city: PropTypes.string.isRequired, // City name
      country: PropTypes.string.isRequired, // Country name
    }).isRequired,
  }).isRequired,
};

export default PhotoListItem;
