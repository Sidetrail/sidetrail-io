import React from 'react';
import './BlogPostSummaryCard.scss';

const BlogPostSummary = ({ post }) => (
  <div className="blogPostSummary">
    <div>{post.title}</div>
    <div>{post.summary}</div>
    <div>{post.tags}</div>
  </div>
);

const convertTitleToUrl = title => title.replace(' ', '_').toLowerCase();

export default BlogPostSummary;
