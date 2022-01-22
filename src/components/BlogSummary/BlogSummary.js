import React, { useState } from 'react';
import { useLocation } from 'react-router';
import './BlogSummary.scss';
import Carosel from '../Carosel/Carosel';
import BlogPostSummary from '../BlogPostSummary/BlogPostSummaryCard';

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const getUrlSearch = query => query.get('tags')?.replace(',', ' ') || '';

const BlogSummary = ({ posts }) => {
  const [searchInput, setSearchInput] = useState(getUrlSearch(useQuery()));

  const tags = posts
    .flatMap(post => post.tags)
    .reduce((acc, val) => ({ ...acc, [val]: acc[val] ? acc[val] + 1 : 1 }), {});

  const searchTerms = searchInput?.split(' ') || [];
  const displayPosts = posts.filter(
    post =>
      searchTerms.some(term => post.title.includes(term)) ||
      searchTerms.some(term => post.summary.includes(term)) ||
      searchTerms.some(term => post.tags.some(tag => tag.includes(term))),
  );

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
          <input
            className="searchBar"
            placeholder="Search Posts"
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
          />
          <div className="searchIcon">
            <i className="fas fa-search" />
          </div>
        </div>
      </div>
      <div className="tagPills">
        {Object.entries(tags)
          .sort((a, b) => b[1] - a[1])
          .map(entry => (
            <button
              key={entry[0]}
              className="ubutton tagPill"
              onClick={() => setSearchInput(`${searchInput ? `${searchInput} ` : ''}${entry[0]}`)}
            >{`${entry[0]} (${entry[1]})`}</button>
          ))}
      </div>
      <div />
      <div className="recentPosts">
        <Carosel>
          {displayPosts.map(post => (
            <BlogPostSummary post={post} key={post.id} />
          ))}
        </Carosel>
      </div>
    </div>
  );
};

export default BlogSummary;
