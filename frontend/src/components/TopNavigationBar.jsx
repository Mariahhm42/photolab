import React from 'react';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar= () => {
  const isFavPhotoExist = true;
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  )
};

export default TopNavigationBar;
