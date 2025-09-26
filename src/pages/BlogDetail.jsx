import React from "react";
import { useParams, Link } from "react-router-dom";
import blogsData from "../data/blogs.json";

export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogsData.find(b => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="container page-container">
        <h2>Blog not found</h2>
        <Link to="/blog">Back to Blogs</Link>
      </div>
    );
  }

  return (
    <div className="container page-container">
      <h1>{blog.title}</h1>
      <img src={blog.image} alt={blog.title} style={{ width: "100%", margin: "20px 0", borderRadius: "8px" }} />
      <p>{blog.content}</p>
      <Link to="/blog" style={{ display: "inline-block", marginTop: "20px", color: "#1e3a8a" }}>← Back to Blogs</Link>
    </div>
  );
}
