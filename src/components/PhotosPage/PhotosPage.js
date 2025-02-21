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
          <Carosel>
            {albumbs?.map(album => (
              <AlbumCard key={album.id} album={album} />
            ))}
          </Carosel>
        </div>
        <hr className="seperator" />
        <div className="sectionTitle">Recent Photos</div>
        {recentPhotos?.length && <RecentPhotos recentPhotos={recentPhotos} />}
        <hr className="seperator" />
        <div className="sectionTitle">Favorite Photos</div>
        {favoritePhotos?.length && <FavoritePhotos favPhotos={favoritePhotos} />}
      </div>
    </div>
  );
};

export default PhotosPage;
