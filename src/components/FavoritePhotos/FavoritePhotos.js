import React, { useEffect, useState } from "react";
import { getPhoto, getPhotoUrl } from "../../services/flickrClient";
import "./FavoritePhotos.scss";

const FavoritePhotos = ({ favPhotos }) => {
  const PHOTOS_PER_PAGE = 10;
  const [photos, setPhotos] = useState(favPhotos);
  const [page, setPage] = useState(1);

  useEffect(() => {
    Promise.all(favPhotos.map((photo) => getPhoto(photo.id))).then((resp) =>
      setPhotos(
        photos.map((photo) => ({
          ...photo,
          sizes: resp.find((i) => i.id === photo.id),
        }))
      )
    );
    // eslint-disable-next-line
  }, []);

  return (
    <div className="favoritePhotos">
      {photos
        .sort((a, b) => +b.dateupload - +a.dateupload)
        .slice(0, page * PHOTOS_PER_PAGE)
        .map((photo) => (
          <a
            href={getPhotoUrl(photo.id)}
            className="photo"
            key={photo.id}
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src={
                photo.sizes &&
                photo.sizes.sizes.size.find((size) => size.height > 500).source
              }
              height="300px"
              alt={photo.title}
            />
          </a>
        ))}
      {photos.length > page * PHOTOS_PER_PAGE && (
        <button className="unbutton loadMore" onClick={() => setPage(page + 1)}>
          Load More
        </button>
      )}
    </div>
  );
};

export default FavoritePhotos;
