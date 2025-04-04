import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, count }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={isFavPhotoExist} />
      {isFavPhotoExist && <span className="fav-count">{count}</span>}
    </div>
  );
};


export default FavBadge;