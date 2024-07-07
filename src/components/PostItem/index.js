import React from "react";
import { Link } from "react-router-dom";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { MdEdit, MdDeleteOutline } from "react-icons/md";

import "./index.css";

const PostItem = ({ post, index, setPosts, posts }) => {
  const handleLike = () => {
    const updatedPosts = posts.map((p, i) =>
      i === index ? { ...p, liked: !p.liked } : p
    );
    setPosts(updatedPosts);
  };

  const handleDelete = () => {
    const updatedPosts = posts.filter((_, i) => i !== index);
    setPosts(updatedPosts);
  };

  return (
    <div className="post-item">
      <div className="title-profile-cont">
        <img
          src="https://res.cloudinary.com/dnm4q4bgp/image/upload/v1718515889/Snapchat-1124405091_r3xcd3.jpg"
          alt="profile"
          className="profile"
        />
        <h2 className="name">Sanjay</h2>
      </div>
      <h3>{post.title}</h3>
      {post.image && <img src={post.image} alt="Post" className="post-image" />}
      <p>{post.content}</p>

      <div className="post-actions">
        <button onClick={handleLike}>
          {post.liked ? <FcLike size={20} /> : <FcLikePlaceholder size={20} />}
        </button>
        <Link to={`/edit/${index}`}>
          <button>
            <MdEdit size={20} color="#66fcf1" />
          </button>
        </Link>
        <button onClick={handleDelete}>
          <MdDeleteOutline size={20} color="#66fcf1" />
        </button>
      </div>
    </div>
  );
};

export default PostItem;
