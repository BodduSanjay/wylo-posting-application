import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./index.css";

const CreatePost = ({ posts, setPosts }) => {
  const { index } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (index !== undefined) {
      const post = posts[Number(index)];
      if (post) {
        setTitle(post.title);
        setContent(post.content);
        setPreview(post.image);
      }
    }
  }, [index, posts]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let imageURL = preview;
    if (image) {
      imageURL = URL.createObjectURL(image);
    }
    const newPost = { title, content, image: imageURL, liked: false };
    if (index !== undefined) {
      const updatedPosts = posts.map((post, i) =>
        i === Number(index) ? newPost : post
      );
      setPosts(updatedPosts);
    } else {
      setPosts([...posts, newPost]);
    }
    navigate("/");
  };

  return (
    <div className="create-post">
      <h1>{index !== undefined ? "Edit Post" : "Create Post"}</h1>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <label>Image:</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button type="submit">
          {index !== undefined ? "Update Post" : "Create Post"}
        </button>
      </form>
      {preview && <img src={preview} alt="Preview" className="image-preview" />}
    </div>
  );
};

export default CreatePost;
