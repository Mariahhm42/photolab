import React from 'react';
import TopNavigationBar from './TopNavigationBar'; // Import TopNavigationBar
import PhotoList from './PhotoList'; // Import PhotoList component (to display photos)
import '../styles/HomeRoute.scss'; // Include styling for HomeRoute

const HomeRoute = () => {
  return (
    <div className="home-route">
      {/* Top Navigation Bar */}
      <TopNavigationBar />

      {/* Photos Section */}
      <div className="home-route__photos">
        <PhotoList /> {/* This will display the list of photos */}
      </div>
    </div>
  );
};

export default HomeRoute;
