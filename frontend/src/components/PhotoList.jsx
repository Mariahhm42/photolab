import React, { useState } from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos }) => {
  const [favourites, setFavourites] = useState([]); // State to manage favourites

  const toggleFavourite = (photoId) => {
    setFavourites((prevFavourites) => {
      if (prevFavourites.includes(photoId)) {
        return prevFavourites.filter((id) => id !== photoId); // Remove from favourites
      } else {
        return [...prevFavourites, photoId]; // Add to favourites
      }
    });
  };

  return (
    <div className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          favourites={favourites} // Pass favourites to PhotoListItem
          toggleFavourite={toggleFavourite} // Pass toggle function to PhotoListItem
        />
      ))}
    </div>
  );
};

export default PhotoList;
