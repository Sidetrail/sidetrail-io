import React, { useEffect } from 'react';
import { getRecentPhotos } from '../../services/flickrClient';
import './PhotosPage.scss';

const PhotosPage = props => {
  useEffect(() => {
    getRecentPhotos();
  }, []);
  return (
    <div className="photosPage">
      <div className="title">Photos</div>
    </div>
  );
};

export default PhotosPage;
