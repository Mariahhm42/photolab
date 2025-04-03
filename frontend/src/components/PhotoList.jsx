import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, favouritePhotos, toggleFavourite }) => {
  return (
    <div className="photo-list">
      {photos.map((photo) => (
        <div key={photo.id} className="photo-item">
          <img src={photo.urls.regular} alt={photo.location.city} />
          <button onClick={() => toggleFavourite(photo.id)}>
            {favouritePhotos.includes(photo.id) ? "❤️" : "🤍"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default PhotoList;
