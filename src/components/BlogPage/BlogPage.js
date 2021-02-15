import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import BlogSummary from '../BlogSummary/BlogSummary';
import BlogEntry from '../BlogEntry/BlogEntry';
import BlogEntryNotFound from '../BlogEntryNotFound/BlogEntryNotFound';
import './BlogPage.scss';

const BlogPage = props => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get('/blog/index.json').then(resp => setPosts(resp.data));
  }, []);
  console.log('posts:', posts);
  return (
    <div className="blogPage">
      <Switch>
        <Route exact path="/blog">
          <BlogSummary posts={posts} />
        </Route>
        <Route exact path="/blog/not_found">
          <BlogEntryNotFound />
        </Route>
        <Route exact path="/blog/:blogTitle">
          <BlogEntry posts={posts} />
        </Route>
      </Switch>
    </div>
  );
};

export default BlogPage;
