import React from 'react';
import HomeRoute from './components/HomeRoute';
import './App.scss';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    onTopicSelect,  // Get onTopicSelect from the hook
  } = useApplicationData();

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
        onTopicSelect={onTopicSelect}  // Pass the new function
        displayModal={state.displayModal}
        selectedPhoto={state.selectedPhoto}
        onClosePhotoDetailsModal={onClosePhotoDetailsModal}
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
