import React, { useState, useEffect } from "react";
import BlogCard from "../components/BlogCard";
import blogsData from "../data/blogs.json";
import Pagination from "../components/Pagination";

export default function Blog() {
  const itemsPerPage = 6; // Number of blogs per page
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [filterTag, setFilterTag] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setBlogs(blogsData);
  }, []);

  // Collect unique categories + tags from all blogs
  const categories = [...new Set(blogs.flatMap((b) => b.categories || []))];
  const tags = [...new Set(blogs.flatMap((b) => b.tags || []))];

  // Filtering logic
  const filteredBlogs = blogs.filter((b) => {
    const matchesSearch = b.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory ? (b.categories || []).includes(filterCategory) : true;
    const matchesTag = filterTag ? (b.tags || []).includes(filterTag) : true;
    return matchesSearch && matchesCategory && matchesTag;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const currentItems = filteredBlogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Scroll to top on page change or filter change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentPage(1); // reset page when filters change
  }, [searchTerm, filterCategory, filterTag]);

  return (
    <div className="container page-container">
      <h1 style={{ marginBottom: "20px" }}>Blog Posts</h1>

      {/* Filter Section */}
      <div style={{ marginBottom: "20px", display: "flex", flexWrap: "wrap", gap: "10px" }}>
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: "8px", flex: "1 1 200px" }}
        />

        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          style={{ padding: "8px", flex: "1 1 160px" }}
        >
          <option value="">All Categories</option>
          {categories.map((cat, i) => (
            <option key={i} value={cat}>{cat}</option>
          ))}
        </select>

        <select
          value={filterTag}
          onChange={(e) => setFilterTag(e.target.value)}
          style={{ padding: "8px", flex: "1 1 160px" }}
        >
          <option value="">All Tags</option>
          {tags.map((tag, i) => (
            <option key={i} value={tag}>{tag}</option>
          ))}
        </select>
      </div>

      {/* Blogs Grid */}
      <div className="row">
        {currentItems.length > 0 ? (
          currentItems.map((blog) => (
            <div className="col" key={blog.id}>
              <BlogCard {...blog} />
            </div>
          ))
        ) : (
          <p>No blogs found for the applied filters.</p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}
