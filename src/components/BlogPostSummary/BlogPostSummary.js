import React from 'react';
import './BlogPostSummary.scss';

const BlogPostSummary = ({ post }) => (
  <div className="blogPostSummary">
    <div>{post.title}</div>
    <div>{post.summary}</div>
    <div>{post.tags}</div>
  </div>
);

export default BlogPostSummary;
