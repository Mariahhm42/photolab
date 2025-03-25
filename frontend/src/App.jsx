import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: "/Image-1-Regular.jpeg",
  username: "Joe Example",
  profile: "/profile-1.jpg",
};

// Create an array of 3 photo objects (you can add more photo objects if needed)
const photos = new Array(3).fill(sampleDataForPhotoListItem);

const App = () => (
  <div className="App">
    <h1>Photo Labs</h1>
    {photos.map((photo, index) => (
      <PhotoListItem key={index} photo={photo} />
    ))}
  </div>
);

export default App;
