import React from 'react';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics }) => {
    return (
      <div className="home-route">
        {/* Pass topics to the navigation bar */}
        <TopNavigationBar topics={topics} />
  
        {/* Pass photos to PhotoList */}
        <div className="home-route__photos">
          <PhotoList photos={photos} />
        </div>
      </div>
    );
  };
export default HomeRoute;