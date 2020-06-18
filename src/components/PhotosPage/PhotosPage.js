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
      <div className="desc">
        Photography is a relatively new hobby of mine, while I have taken many photos over the years
        I only recently started editing and publishing them publicly. Most of the photos I have are
        from my years-long backlog from vacations and trips past. Almost all will be landscapes and
        most will involve national parks.
      </div>
      <div className="content">
        <div className="sectionTitle">Albums</div>
        <div className="albumCards">
          {albumbs.map(album => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
        <hr className="seperator" />
        <div className="sectionTitle">Recent Photos</div>
        {recentPhotos.length && <RecentPhotos recentPhotos={recentPhotos} />}
      </div>
    </div>
  );
};

export default PhotosPage;
