import React from "react";
import "./index.css";
const LikedPosts = ({ posts }) => {
  const likedPosts = posts.filter((post) => post.liked);

  return (
    <div className="liked-posts">
      <h1>Liked Posts</h1>
      {likedPosts.length === 0 ? (
        <p>No liked posts</p>
      ) : (
        likedPosts.map((post, index) => (
          <div key={index} className="post-item">
            <div className="title-profile-cont">
              <img
                src="https://res.cloudinary.com/dnm4q4bgp/image/upload/v1718515889/Snapchat-1124405091_r3xcd3.jpg"
                alt="profile"
                className="profile"
              />
              <h2 className="like-name">Sanjay</h2>
            </div>
            <h3>{post.title}</h3>
            {post.image && (
              <img src={post.image} alt="Post" className="post-image" />
            )}
            <p>{post.content}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default LikedPosts;
