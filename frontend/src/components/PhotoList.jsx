import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, favouritePhotos, toggleFavourite, onPhotoClick, setDisplayModal }) => {
  return (
    <div className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          favouritePhotos={favouritePhotos}
          toggleFavourite={toggleFavourite}
          onClick={() => {
            onPhotoClick(photo); // Set the selected photo
            setDisplayModal(true); // Trigger the modal display
          }}
        />
      ))}
    </div>
  );
};

export default PhotoList;
