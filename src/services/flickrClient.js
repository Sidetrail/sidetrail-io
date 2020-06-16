import axios from 'axios';

const API_KEY = process.env.REACT_APP_flickr_url;
const BASE_URL = 'https://api.flickr.com/services/rest/?method=';
const SIDETRAIL_USER_ID = '188185390@N02';

const getUrlForMethod = method =>
  `${BASE_URL + method}&api_key=${API_KEY}&per_page=10&format=json&nojsoncallback=1`;

export const getRecentPhotos = () =>
  axios
    .get(getUrlForMethod(`flickr.people.getPhotos&user_id=${SIDETRAIL_USER_ID}`))
    .then(resp => resp.data);

export const getAlbums = () =>
  axios
    .get(getUrlForMethod(`flickr.photosets.getList&user_id=${SIDETRAIL_USER_ID}`))
    .then(resp => resp.data);

export const getPhoto = photoId =>
  axios.get(getUrlForMethod(`flickr.photos.getSizes&photo_id=${photoId}`)).then(resp => resp.data);
