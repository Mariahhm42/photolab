import React from "react";
import TopNavigationBar from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({ photos, topics, favouritePhotos, toggleFavourite }) => {
  return (
    <div className="home-route">
      {/* Pass favouritePhotos to TopNavigationBar */}
      <TopNavigationBar 
        topics={topics} 
        favouritePhotos={favouritePhotos} 
      />

      {/* Pass props to PhotoList */}
      <PhotoList 
        photos={photos} 
        favouritePhotos={favouritePhotos} 
        toggleFavourite={toggleFavourite} 
      />
    </div>
  );
};

export default HomeRoute;
