import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import BlogSummary from "../BlogSummary/BlogSummary";
import BlogEntry from "../BlogEntry/BlogEntry";
import BlogEntryNotFound from "../BlogEntryNotFound/BlogEntryNotFound";
import "./BlogPage.scss";

const BlogPage = (props) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("/blog/index.json").then((resp) => setPosts(resp.data));
  }, []);
  return (
    <div className="blogPage">
      <Routes>
        <Route path="/" element={<BlogSummary posts={posts} />} />
        <Route path="/not_found" element={<BlogEntryNotFound />} />
        <Route path="/:blogTitle" element={<BlogEntry posts={posts} />} />
      </Routes>
    </div>
  );
};

export default BlogPage;
