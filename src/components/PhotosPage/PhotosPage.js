import React, { useEffect, useState } from 'react';
import { getRecentPhotos, getAlbums } from '../../services/flickrClient';
import AlbumCard from '../AlbumCard/AlbumCard';
import RecentPhotos from '../RecentPhotos/RecentPhotos';
import './PhotosPage.scss';

const PhotosPage = props => {
  const [recentPhotos, setRecentPhotos] = useState([]);
  const [albumbs, setAlbumbs] = useState([]);
  useEffect(() => {
    getRecentPhotos().then(data => setRecentPhotos(data && data.photos && data.photos.photo));
    getAlbums().then(data => setAlbumbs(data && data.photosets && data.photosets.photoset));
  }, []);
  console.log(albumbs, recentPhotos);
  return (
    <div className="photosPage">
      <div className="title">Photos</div>
      <div>Description</div>
      <div>
        <div className="sectionTitle">Albums</div>
        <div className="albumCards">
          {albumbs.map(album => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
      </div>
      <RecentPhotos />
    </div>
  );
};

export default PhotosPage;
