import React from 'react';
import './App.scss';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    onTopicSelect,
  } = useApplicationData();

  // Derive similar photos from selected photo
  const getSimilarPhotos = () => {
    if (!state.selectedPhoto) return [];
    return state.photos.filter(
      (photo) =>
        photo.id !== state.selectedPhoto.id &&
        state.selectedPhoto.similar_photos.includes(photo.id)
    );
  };

  return (
    <div className="App">
      <HomeRoute
        photos={state.photos}
        topics={state.topics}
        favouritePhotos={state.favouritePhotos}
        toggleFavourite={updateToFavPhotoIds}
        onPhotoClick={setPhotoSelected}
        onTopicSelect={onTopicSelect}
      />

      {state.displayModal && state.selectedPhoto && (
        <PhotoDetailsModal
          photo={state.selectedPhoto}
          onClose={onClosePhotoDetailsModal}
          similarPhotos={getSimilarPhotos()}
          favouritePhotos={state.favouritePhotos}
          toggleFavourite={updateToFavPhotoIds}
        />
      )}
    </div>
  );
};

export default App;