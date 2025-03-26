import React from 'react';
import FavBadge from './FavBadge';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = ({ isFavPhotoExist }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      
      {/* Add the TopicList for selecting photo topics */}
      <TopicList />

      {/* Pass isFavPhotoExist to FavBadge */}
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  );
};

export default TopNavigationBar;
