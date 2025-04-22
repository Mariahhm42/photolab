import React from "react";
import "../styles/PhotoFavButton.scss";
import FavIcon from "./FavIcon";

const PhotoFavButton = ({ photoId, favouritePhotos, toggleFavourite }) => {
  const isFav = favouritePhotos.includes(photoId);

  const handleClick = () => {
    toggleFavourite(photoId);
  };

  return (
    <div onClick={handleClick}>
      <FavIcon selected={isFav} />
    </div>
  );
};

export default PhotoFavButton;
