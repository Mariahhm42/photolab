import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ photo }) => {
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {/* You can display more photo details here in the future */}
      <div className="photo-details-modal__content">
        <img src={photo.urls.regular} alt={photo.alt_description} />
        <p>{photo.description}</p>
        <p>Photographer: {photo.user.name}</p>
        {/* Display more details if needed */}
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
