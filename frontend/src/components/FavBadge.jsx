import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      {isFavPhotoExist && <FavIcon displayAlert={true} />} {/* Render FavIcon only if isFavPhotoExist is true */}
    </div>
  ) 
};

export default FavBadge;
