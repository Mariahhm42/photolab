// import FavIcon from './FavIcon';
import React, { useState } from "react";
import FavIcon from "./FavIcon"; 
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isLiked} /> {/* Pass the state to change icon color */}
      </div>
    </div>
  );
};

export default PhotoFavButton;