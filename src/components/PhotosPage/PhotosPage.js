import React, { useEffect, useState } from 'react';
import { getRecentPhotos, getAlbums, getFavoritePhotos } from '../../services/flickrClient';
import AlbumCard from '../AlbumCard/AlbumCard';
import RecentPhotos from '../RecentPhotos/RecentPhotos';
import FavoritePhotos from '../FavoritePhotos/FavoritePhotos';
import './PhotosPage.scss';
import Carosel from '../Carosel/Carosel';

const PhotosPage = props => {
  const [recentPhotos, setRecentPhotos] = useState([]);
  const [favoritePhotos, setFavoritePhotos] = useState([]);
  const [albumbs, setAlbumbs] = useState([]);
  useEffect(() => {
    getRecentPhotos().then(data => setRecentPhotos(data?.photos?.photo));
    getAlbums().then(data =>
      setAlbumbs(data?.photosets?.photoset?.sort((a, b) => +b.date_update - a.date_update)),
    );
    getFavoritePhotos().then(data => setFavoritePhotos(data?.photoset?.photo));
  }, []);
  return (
    <div className="photosPage">
      <h1 className="title">Photos</h1>
      <div className="desc">
        Photography is a relatively new hobby of mine, while I have taken many photos over the years
        I only recently started editing and publishing them publicly. Most of the photos I have are
        from my years-long backlog from vacations and trips past. Almost all will be landscapes and
        most will involve national parks.
      </div>
      <div className="content">
        <h2 className="sectionTitle">Albums</h2>
        <div className="albumCards">
          <Carosel>
            {albumbs?.map(album => (
              <AlbumCard key={album.id} album={album} />
            ))}
          </Carosel>
        </div>
        <hr className="seperator" />
        <h2 className="sectionTitle">Recent Photos</h2>
        {recentPhotos?.length && <RecentPhotos recentPhotos={recentPhotos} />}
        <hr className="seperator" />
        <h2 className="sectionTitle">Favorite Photos</h2>
        {favoritePhotos?.length && <FavoritePhotos favPhotos={favoritePhotos} />}
      </div>
    </div>
  );
};

export default PhotosPage;
