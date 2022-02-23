import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BlogPostSummaryCard.scss';

const BlogPostSummary = ({ post }) => {
  const navigate = useNavigate();
  return (
    <button
      className="unbutton blogPostSummary"
      onClick={() => {
        navigate(`/blog/${post.url}`);
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

export default BlogPostSummary;
