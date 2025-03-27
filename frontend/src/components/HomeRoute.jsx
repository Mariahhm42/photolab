import React from 'react';
import TopNavigationBar from './TopNavigationBar'; // Import TopNavigationBar
import PhotoList from './PhotoList'; // Import PhotoList component (to display photos)
import '../styles/HomeRoute.scss'; // Include styling for HomeRoute

const HomeRoute = ({ photos, topics }) => {
    console.log("Received Photos in HomeRoute:", photos); // Debugging
  return (
    <div className="home-route">
      {/*Pass topic to the Top Navigation Bar */}
      <TopNavigationBar topics={topics} />

      {/* Pass photo to PhotoList */}
      <div className="home-route__photos">
        <PhotoList photos={photos}/> {/* This will display the list of photos */}
      </div>
    </div>
  );
};

export default HomeRoute;
