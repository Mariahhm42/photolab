import React, { useState } from "react";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = ({ photoId, toggleFavourite }) => {
  const [isLiked, setIsLiked] = useState(false); // Local state to manage liked state

  const handleClick = () => {
    setIsLiked((prevState) => !prevState); // Toggle like state
    toggleFavourite(photoId); // Call parent function to update the global favourites list
  };

  return (
    <button
      className={`photo-list__fav-icon ${isLiked ? 'active' : ''}`}
      onClick={handleClick}
    >
      {isLiked ? "❤️" : "🤍"} {/* Heart icon based on like state */}
    </button>
  );
};

export default PhotoFavButton;
