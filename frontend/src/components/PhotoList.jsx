import React from "react";
import PhotoListItem from "./PhotoListItem";
import PhotoDetailsModal from '../routes/PhotoDetailsModal'; // Correct import path
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, favouritePhotos, toggleFavourite, onPhotoClick }) => {
  return (
    <div className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          favouritePhotos={favouritePhotos}
          toggleFavourite={toggleFavourite}
          onClick={() => onPhotoClick(photo)} // Pass the photo data when clicked
        />
      ))}
    </div>
  );
};

export default PhotoList;
