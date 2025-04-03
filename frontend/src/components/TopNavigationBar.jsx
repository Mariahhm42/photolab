import React from 'react';
import FavBadge from './FavBadge';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss';
 

const TopNavigationBar = ({ topics, favouritePhotos }) => {
  return (
    <nav className="top-nav">
      {topics.map((topic) => (
        <button key={topic.id}>{topic.title}</button>
      ))}
      <div className="favourites">
        ❤️ {favouritePhotos.length} Liked
      </div>
    </nav>
  );
};

export default TopNavigationBar;
