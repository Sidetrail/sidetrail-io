import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useParams, useHistory, Link } from 'react-router-dom';
import { DateTime } from 'luxon';
import { useSetTitle } from '../../services/titleservice';
import './BlogEntry.scss';

const BlogEntry = ({ posts }) => {
  const history = useHistory();
  const { blogTitle } = useParams();
  const [post, setPost] = useState();
  const [articleBody, setArticleBody] = useState();
  useSetTitle(post?.title || 'Blog');

  useEffect(() => {
    Axios.get(`/blog/${blogTitle}.html`)
      .then(resp => setArticleBody(resp.data))
      .catch(resp => {
        history.replace(`/blog/not_found`);
      });
  }, []);

  useEffect(() => {
    setPost(posts.find(i => i.url === blogTitle));
  }, [posts]);

  return (
    <div className="blogEntry">
      <div
        className="blogHeader"
        style={{
          background: `${
            post?.headerImage ? `url(${post.headerImage})` : 'black'
          } no-repeat center`,
        }}
      >
        <i className="fas fa-angle-left" />
        <h1 className="title">{post?.title}</h1>
        <h4 className="createdTime">
          {DateTime.fromISO(post?.originalPostDate).toLocaleString(DateTime.DATE_FULL)}
          {post?.lastUpdatedDate && post.lastUpdatedDate !== post.originalPostDate && (
            <div className="updatedTime">
              * Last updated{' '}
              {DateTime.fromISO(post.lastUpdatedDate).toLocaleString(DateTime.DATE_FULL)}
            </div>
          )}
        </h4>
        <div className="blogTags">
          {post?.tags?.map(tag => (
            <button
              key={tag}
              className="unbutton tag"
              onClick={() => history.push(`/blog?tags=${tag}`)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      <hr className="seperator" />
      <div className="blogContent" dangerouslySetInnerHTML={{ __html: articleBody }} />
      <div className="endNavigation">
        <Link to="/blog" className="unbutton navLink">
          Other Articles
        </Link>
        <button
          className="unbutton navLink"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Back To Top
        </button>
      </div>
    </div>
  );
};

export default BlogEntry;
