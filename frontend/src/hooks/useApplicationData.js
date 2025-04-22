import { useReducer, useEffect } from 'react';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
};

const initialState = {
  photos: [],
  topics: [],
  favouritePhotos: [],
  selectedPhoto: null,
  displayModal: false,
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favouritePhotos: [...state.favouritePhotos, action.payload.id],
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favouritePhotos: state.favouritePhotos.filter((id) => id !== action.payload.id),
      };
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photos: action.payload.photos,
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topics: action.payload.topics,
      };
    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload.photo,
      };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {
        ...state,
        displayModal: action.payload.displayModal,
      };
    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch photo and topic data from the API on first render
  useEffect(() => {
    Promise.all([
      fetch('/api/photos').then((res) => res.json()),
      fetch('/api/topics').then((res) => res.json())
    ])
      .then(([photos, topics]) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { photos } });
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: { topics } });
      })
      .catch((err) => console.error('Failed to fetch data from API:', err));
  }, []);

  const updateToFavPhotoIds = (photoId) => {
    if (state.favouritePhotos.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id: photoId } });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id: photoId } });
    }
  };

  const setPhotoSelected = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo } });
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: { displayModal: true } });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: { displayModal: false } });
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo: null } });
  };

  const onTopicSelect = (topicId) => {
    fetch(`/api/topics/${topicId}/photos`)
      .then((res) => res.json())
      .then((photos) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { photos } });
      })
      .catch((error) => console.error('Error fetching photos by topic:', error));
  };

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    onTopicSelect,
  };
};

export default useApplicationData;
