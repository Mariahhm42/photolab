import React from 'react';
import HomeRoute from './components/HomeRoute';
import './App.scss';
import useApplicationData, { ACTIONS } from './hooks/useApplicationData';

const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  // You might derive similar photos in HomeRoute or elsewhere if needed

  return (
    <div className="App">
      <HomeRoute
        photos={state.photos}
        topics={state.topics}
        favouritePhotos={state.favouritePhotos}
        toggleFavourite={updateToFavPhotoIds}
        onPhotoClick={setPhotoSelected}
        displayModal={state.displayModal}
        selectedPhoto={state.selectedPhoto}
        onClosePhotoDetailsModal={onClosePhotoDetailsModal}
      />
    </div>
  );
};

export default App;
