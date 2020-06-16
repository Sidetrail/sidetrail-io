import React, { useState, useEffect } from 'react';
import { getPhoto } from '../../services/flickrClient';
import './AlbumCard.scss';

const AlbumCard = ({ album }) => {
  const [backgroundPhoto, setBackgroundPhoto] = useState();
  useEffect(() => {
    getPhoto(album.primary).then(resp => setBackgroundPhoto(resp.sizes.size));
  }, []);
  console.log('bg photo', backgroundPhoto);
  return (
    <div
      className="albumCard"
      style={{
        background: `${
          backgroundPhoto
            ? `url(${backgroundPhoto.find(size => size.label === 'Medium').source})`
            : 'black'
        } no-repeat center`,
      }}
    >
      <div className="fadedCover">
        <div className="title">{album.title._content}</div>
        <div className="data">
          <div>{album.count_photos}</div>
          <div>{album.date_update}</div>
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;
