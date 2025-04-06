import React from 'react';
import HomeRoute from './components/HomeRoute';
import './App.scss';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    getSimilarPhotos,
  } = useApplicationData();

  // Get similar photos if a photo is selected
  const similarPhotos = state.selectedPhoto ? getSimilarPhotos(state.selectedPhoto) : [];

  return (
    <div className="App">
      <HomeRoute
        photos={state.photos}
        topics={state.topics}
        favouritePhotos={state.favouritePhotos}
        toggleFavourite={updateToFavPhotoIds}
        onPhotoClick={setPhotoSelected}
      />

      {state.displayModal && state.selectedPhoto && (
        <PhotoDetailsModal
          photo={state.selectedPhoto}
          closeModal={onClosePhotoDetailsModal}
          similarPhotos={similarPhotos}
          favouritePhotos={state.favouritePhotos}
          toggleFavourite={updateToFavPhotoIds}
        />
      )}
    </div>
  );
};

export default App;
