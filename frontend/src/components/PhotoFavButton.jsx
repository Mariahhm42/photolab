import React from "react";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = ({ photoId, favouritePhotos, toggleFavourite }) => {
  const isFavourite = favouritePhotos.includes(photoId);

  // When clicked, this button will update the global state via toggleFavourite
  const handleClick = () => {
    toggleFavourite(photoId);
  };

  return (
    <button
      className={`photo-list__fav-icon ${isFavourite ? 'active' : ''}`}
      onClick={handleClick}
    >
      {isFavourite ? "❤️" : "🤍"}
    </button>
  );
};

export default PhotoFavButton;
