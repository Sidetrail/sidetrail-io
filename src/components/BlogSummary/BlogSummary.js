import React from 'react';
import './BlogSummary.scss';
import Carosel from '../Carosel/Carosel';
import BlogPostSummary from '../BlogPostSummary/BlogPostSummaryCard';

const BlogSummary = ({ posts }) => {
  const tags = posts
    .flatMap(post => post.tags)
    .reduce((acc, val) => ({ ...acc, [val]: acc[val] ? acc[val] + 1 : 1 }), {});
  return (
    <div className="blogSummary">
      <div className="title">Blog</div>
      <div className="description">
        This is a collection of my written works. Most are technology focused in nature but there
        are a few that stray. Most of it is just my ramblings.
      </div>
      <br />
      <div>
        <div className="searchContainer">
          <input className="searchBar" placeholder="Search Posts" />
          <div className="searchIcon">
            <i className="fas fa-search" />
          </div>
        </div>
      </div>
      <div className="tagPills">
        {Object.entries(tags)
          .sort((a, b) => b[1] - a[1])
          .map(entry => (
            <div key={entry[0]} className="tagPill">{`${entry[0]} (${entry[1]})`}</div>
          ))}
      </div>
      <div />
      <div className="recentPosts">
        <Carosel>
          {posts.map(post => (
            <BlogPostSummary post={post} key={post.id} />
          ))}
        </Carosel>
      </div>
    </div>
  );
};

export default BlogSummary;
