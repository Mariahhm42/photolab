import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ photo, onClose }) => {
  return (
    <div className="photo-details-modal">
      {/* Close button that triggers the onClose function when clicked */}
      <button 
        className="photo-details-modal__close-button"
        onClick={onClose} // Trigger the close action
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      
      {/* Modal content */}
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
