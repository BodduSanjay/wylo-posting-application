import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostsDisplay from "./components/PostsDisplay";
import CreatePost from "./components/CreatePost";
import LikedPosts from "./components/LikedPosts";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route
              exact
              path="/"
              element={<PostsDisplay posts={posts} setPosts={setPosts} />}
            />
            <Route
              path="/create"
              element={<CreatePost posts={posts} setPosts={setPosts} />}
            />
            <Route
              path="/edit/:index"
              element={<CreatePost posts={posts} setPosts={setPosts} />}
            />
            <Route path="/liked" element={<LikedPosts posts={posts} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
