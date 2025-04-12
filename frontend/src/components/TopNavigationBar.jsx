import React from 'react';
import TopicList from './TopicList';
import FavIcon from './FavIcon';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = ({ topics, favouritePhotos, onTopicSelect }) => {
  const favCount = favouritePhotos.length;
  const isSelected = favCount > 0;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} onTopicSelect={onTopicSelect}/>
      <div className="top-nav-bar__fav-icon">
        <FavIcon selected={isSelected} favouriteCount={favCount} />
      </div>
    </div>
  );
};

export default TopNavigationBar;
