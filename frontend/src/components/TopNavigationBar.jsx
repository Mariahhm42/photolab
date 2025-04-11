import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = ({ topics, favouritePhotos, onTopicSelect }) => {
  const favCount = favouritePhotos.length; // Count of liked photos

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      {/* Pass onTopicSelect to TopicList */}
      <TopicList topics={topics} onTopicSelect={onTopicSelect} />
      {favCount > 0 && (
        <div className="top-nav-bar__favourites-notification">
          ❤️ {favCount} {favCount === 1 ? 'Photo Liked' : 'Photos Liked'}
        </div>
      )}
    </div>
  );
};

export default TopNavigationBar;
