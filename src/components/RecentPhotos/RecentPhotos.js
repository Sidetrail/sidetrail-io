import React, { useEffect, useState } from 'react';
import { getPhoto, getPhotoUrl, getPhotostreamUrl } from '../../services/flickrClient';
import Carosel from '../Carosel/Carosel';
import './RecentPhotos.scss';

const RecentPhotos = ({ recentPhotos }) => {
  const [photos, setPhotos] = useState(recentPhotos);
  useEffect(() => {
    Promise.all(recentPhotos.map(photo => getPhoto(photo.id))).then(resp =>
      setPhotos(photos.map(photo => ({ ...photo, sizes: resp.find(i => i.id === photo.id) }))),
    );
    // eslint-disable-next-line
  }, [recentPhotos]);
  return (
    <div className="recentPhotos">
      <Carosel>
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
        <a href={getPhotostreamUrl()} target="_blank" rel="noreferrer noopener" className="photo">
          <div
            style={{
              height: '300px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textDecoration: 'underline',
            }}
          >
            See More
          </div>
        </a>
      </Carosel>
    </div>
  );
};

export default RecentPhotos;
