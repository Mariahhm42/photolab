// import FavIcon from './FavIcon';
import React, { useState } from "react";
import FavIcon from "./FavIcon"; 
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = ({ photoId, favourites, toggleFavourite }) => {
  const isFavourite = favourites.includes(photoId);

  return (
    <button onClick={() => toggleFavourite(photoId)}>
      {isFavourite ? "❤️" : "🤍"}
    </button>
  );
};


export default PhotoFavButton;