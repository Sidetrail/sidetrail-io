import React, { useState, useEffect } from 'react';
import { getPhoto, getAlbumUrl } from '../../services/flickrClient';
import './AlbumCard.scss';

const AlbumCard = ({ album }) => {
  const [backgroundPhoto, setBackgroundPhoto] = useState();
  useEffect(() => {
    getPhoto(album.primary).then(resp => setBackgroundPhoto(resp.sizes.size));
  }, []);

  const bgPhoto = backgroundPhoto && backgroundPhoto.find(size => size.height > 400);
  return (
    <div
      className="albumCard"
      style={{
        background: `${bgPhoto ? `url(${bgPhoto.source})` : 'black'} no-repeat center`,
      }}
    >
      <div className="fadedCover">
        <a href={getAlbumUrl(album.id)} target="_blank" rel="noreferrer noopener" className="title">
          {album.title._content}
        </a>
        <div className="data">
          <div>
            <div className="dataHeader">Photos</div>
            <div className="dataContent">{album.count_photos}</div>
          </div>
          <div>
            <div className="dataHeader">Last Updated</div>
            <div className="dataContent">
              {new Date(+album.date_update * 1000).toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;
