import React, { useEffect, useState } from 'react';
import { getPhoto, getPhotoUrl } from '../../services/flickrClient';
import './FavoritePhotos.scss';

const FavoritePhotos = ({ favPhotos }) => {
  const [photos, setPhotos] = useState(favPhotos);
  useEffect(() => {
    Promise.all(favPhotos.map(photo => getPhoto(photo.id))).then(resp =>
      setPhotos(photos.map(photo => ({ ...photo, sizes: resp.find(i => i.id === photo.id) }))),
    );
  }, [favPhotos]);
  return (
    <div className="favoritePhotos">
      {photos.map(photo => (
        <a
          href={getPhotoUrl(photo.id)}
          className="photo"
          key={photo.id}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src={photo.sizes && photo.sizes.sizes.size.find(size => size.height > 500).source}
            height="300px"
            alt={photo.title}
          />
        </a>
      ))}
    </div>
  );
};

export default FavoritePhotos;
