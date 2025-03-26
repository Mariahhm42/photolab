import React from 'react';
import PhotoList from "./components/PhotoList"; //Import PhotoList
import TopicList from "./components/TopicList"; // Import TopicList
import TopNavigationBar from './components/TopNavigationBar'; // Import TopNavigationBar 

import './App.scss';

const App = () => (
  <div className="App">
    <PhotoList />
    <TopicList />
    <TopNavigationBar />
  </div>
);

export default App;