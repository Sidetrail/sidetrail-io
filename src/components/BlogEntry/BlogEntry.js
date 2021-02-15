import React, { useEffect } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import './BlogEntry.scss';

const BlogEntry = ({ post }) => {
  const { blogTitle } = useParams();
  useEffect(() => {
    Axios.get(`/blog/${blogTitle}.html`)
      .then(resp => console.log('resp', resp))
      .catch(resp => console.log('err', resp));
  }, []);
  return <div className="blogEntry">BlogEntry</div>;
};

export default BlogEntry;
