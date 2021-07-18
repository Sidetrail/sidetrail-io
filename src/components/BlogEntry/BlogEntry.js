import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import { DateTime } from 'luxon';
import { useSetTitle } from '../../services/titleservice';
import './BlogEntry.scss';

const BlogEntry = ({ posts }) => {
  const { blogTitle } = useParams();
  const [post, setPost] = useState();
  const [articleBody, setArticleBody] = useState();
  useSetTitle(post?.title || 'Blog');

  useEffect(() => {
    Axios.get(`/blog/${blogTitle}.html`)
      .then(resp => setArticleBody(resp.data))
      .catch(resp => console.log('err', resp));
  }, []);

  useEffect(() => {
    setPost(posts.find(i => i.url === blogTitle));
  }, [posts]);

  return (
    <div className="blogEntry">
      <h1 className="title">{post?.title}</h1>
      <h4 className="createdTime">
        {DateTime.fromISO(post?.originalPostDate).toLocaleString(DateTime.DATE_FULL)}
      </h4>
      <div className="blogTags">
        {post?.tags?.map(tag => (
          <div key={tag} className="tag">
            {tag}
          </div>
        ))}
      </div>
      <hr />
      <div className="blogContent" dangerouslySetInnerHTML={{ __html: articleBody }} />
    </div>
  );
};

export default BlogEntry;
