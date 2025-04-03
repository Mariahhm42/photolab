import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, favouritePhotos, toggleFavourite }) => {
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favouritePhotos={favouritePhotos} />
      <PhotoList 
      photos={photos} 
      favouritePhotos={favouritePhotos} 
      toggleFavourite={toggleFavourite} 
      />
    </div>
  );
};

export default HomeRoute;