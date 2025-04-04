import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, favouritePhotos, toggleFavourite }) => {
  return (
    <div className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          favouritePhotos={favouritePhotos}
          toggleFavourite={toggleFavourite}
        />
      ))}
    </div>
  );
};

export default PhotoList;
