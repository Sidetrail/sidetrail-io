import React from 'react';
import './BlogSummary.scss';
import Carosel from '../Carosel/Carosel';
import BlogPostSummary from '../BlogPostSummary/BlogPostSummary';

const BlogSummary = ({ posts }) => (
  <div className="blogSummary">
    <div className="title">Blog</div>
    <div>description here</div>
    <br />
    <div>
      <input className="searchBar" placeholder="Search Posts" />
    </div>
    <div>{posts.flatMap(post => post.tags).join()}</div>
    <Carosel
      items={posts.map(post => (
        <BlogPostSummary post={post} key={post.id} />
      ))}
    />
  </div>
);

export default BlogSummary;
