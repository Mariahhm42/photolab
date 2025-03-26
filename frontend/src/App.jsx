import React from 'react';
import PhotoList from "./components/PhotoList"; //Import PhotoList
import TopicList from "./components/TopicList"; // Import TopicList

import './App.scss';

const App = () => (
  <div className="App">
    <PhotoList />
    <TopicList />
  </div>
);

export default App;
