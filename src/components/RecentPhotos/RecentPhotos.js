import React, { useEffect, useState } from 'react';
import { getPhoto } from '../../services/flickrClient';
import './RecentPhotos.scss';

const RecentPhotos = ({ recentPhotos }) => {
  const [photos, setPhotos] = useState(recentPhotos);
  useEffect(() => {
    Promise.all(recentPhotos.map(photo => getPhoto(photo.id))).then(resp =>
      setPhotos(photos.map(photo => ({ ...photo, sizes: resp.find(i => i.id === photo.id) }))),
    );
  }, [recentPhotos]);
  console.log('photos:', photos);
  return (
    <div className="recentPhotos">
      {photos.map(photo => (
        <img key={photo.id} />
      ))}
    </div>
  );
};

export default RecentPhotos;
