import { useState, useEffect } from 'react';
import photosData from '../mocks/photos';
import topicsData from '../mocks/topics';

const useApplicationData = () => {
  // Entire application state
  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);
  const [favouritePhotos, setFavouritePhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [displayModal, setDisplayModal] = useState(false);

  // Load initial data (simulate API calls with mock data)
  useEffect(() => {
    setPhotos(photosData);
    setTopics(topicsData);
  }, []);

  // Action to toggle favourite photos
  const updateToFavPhotoIds = (photoId) => {
    setFavouritePhotos((prevFavs) =>
      prevFavs.includes(photoId)
        ? prevFavs.filter((id) => id !== photoId)
        : [...prevFavs, photoId]
    );
  };

  // Action to select a photo and open the modal
  const setPhotoSelected = (photo) => {
    setSelectedPhoto(photo);
    setDisplayModal(true);
  };

  // Action to close the modal
  const onClosePhotoDetailsModal = () => {
    setDisplayModal(false);
    setSelectedPhoto(null);
  };

  // Function to get similar photos based on a criterion (e.g. same photographer)
  const getSimilarPhotos = (photo) => {
    return photos.filter(
      (p) => p.user.username === photo.user.username && p.id !== photo.id
    );
  };

  return {
    state: { photos, topics, favouritePhotos, selectedPhoto, displayModal },
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    getSimilarPhotos,
  };
};

export default useApplicationData;
