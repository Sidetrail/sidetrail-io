import React from 'react';
import { useHistory } from 'react-router-dom';
import './BlogPostSummaryCard.scss';

const BlogPostSummary = ({ post }) => {
  const history = useHistory();
  return (
    <button
      className="unbutton blogPostSummary"
      onClick={() => {
        history.push(post.url);
      }}
    >
      <div className="blogTitle">{post.title}</div>
      <em className="blogSummary">{post.summary}</em>
      <div className="tagHolder">
        {post.tags.map(tag => (
          <div className="blogTag" key={tag}>
            {tag}
          </div>
        ))}
      </div>
    </button>
  );
};

const convertTitleToUrl = title => title.replace(' ', '_').toLowerCase();

export default BlogPostSummary;
