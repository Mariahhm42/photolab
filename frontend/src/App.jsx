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

// creates an array of 3 photo objects
const photos = [...Array(3)];

const App = () => {
  // this Maps over the array to generate PhotoListItem components
  const photoItems = photos.map((_, index) => (
    <PhotoListItem key={index} photo={sampleDataForPhotoListItem} />
  ));

  return (
    <div className="App">
      <h1>Photo Labs</h1>
      {photoItems}
    </div>
  );
};


export default App;
