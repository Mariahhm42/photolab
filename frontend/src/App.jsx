import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import PhotoList from "./components/PhotoList";
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

const App = () => (
  <div className="App">
    <PhotoList />
  </div>
);

export default App;
