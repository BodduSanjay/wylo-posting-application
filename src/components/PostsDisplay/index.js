import React from "react";
import { Link } from "react-router-dom";
import PostItem from "../PostItem";
import "./index.css";

const PostsDisplay = ({ posts, setPosts }) => {
  return (
    <div className="posts-display">
      <h1 className="posts-heading">Posts</h1>
      {posts.length === 0 ? (
        <div className="no-posts">
          <p>No posts created</p>
          <Link to="/create">
            <button className="create-button">Create Post</button>
          </Link>
        </div>
      ) : (
        posts.map((post, index) => (
          <PostItem
            key={index}
            post={post}
            setPosts={setPosts}
            posts={posts}
            index={index}
          />
        ))
      )}
    </div>
  );
};

export default PostsDisplay;
