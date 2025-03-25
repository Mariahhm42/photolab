import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const sampleDataForPhotoListItems = [
  {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    imageSource: `Image-1-Regular.jpeg`,
    username: "Joe Example",
    profile: `profile-1.jpg`,
  },
  {
    id: "2",
    location: {
      city: "Vancouver",
      country: "Canada",
    },
    imageSource: `Image-2-Regular.jpeg`,
    username: "Jane Doe",
    profile: `profile-2.jpg`,
  },
  {
    id: "3",
    location: {
      city: "Toronto",
      country: "Canada",
    },
    imageSource: `Image-3-Regular.jpeg`,
    username: "Alice Smith",
    profile: `profile-3.jpg`,
  },
];

const App = () => (
  <div className="App">
    {/* Use map to loop through the array and render each PhotoListItem */}
    {sampleDataForPhotoListItems.map((photo) => (
      <PhotoListItem key={photo.id} photo={photo} />
    ))}
  </div>
);

export default App;
