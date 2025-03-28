import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
    {/* {isFavPhotoExist && <FavIcon displayAlert={true} />} Render FavIcon only if isFavPhotoExist is true */}
    <FavIcon displayAlert={isFavPhotoExist} />
    </div>
  ) 
};

export default FavBadge;
