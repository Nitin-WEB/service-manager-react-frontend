import React from "react";

export default function Home() {
  return (
    <div>
      <section style={{
        background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80') no-repeat center center/cover",
        height: "60vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center"
      }}>
        <div>
          <h1 style={{ fontSize: "3rem" }}>Welcome to Service Manager</h1>
          <p style={{ fontSize: "1.5rem", marginTop: "15px" }}>The portal for Services & Blogs</p>
        </div>
      </section>

      <div className="container" style={{ marginTop: "40px", textAlign: "center" }}>
        <h2>Our Services & Insights</h2>
        <p>Explore our range of services and read interesting blog posts!</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "30px"
          }}
        >
          <a href="/services" style={{ textDecoration: "none", color: "inherit", flex: 1, maxWidth: "220px" }}>
            <div
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "20px",
                height: "180px",
                width: "100%",
                boxSizing: "border-box",
                transition: "box-shadow 0.2s",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}
            >
              <h3>Services</h3>
              <p>Manage and explore various services we offer.</p>
            </div>
          </a>
          <a href="/blogs" style={{ textDecoration: "none", color: "inherit", flex: 1, maxWidth: "220px" }}>
            <div
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "20px",
                height: "180px",
                width: "100%",
                boxSizing: "border-box",
                transition: "box-shadow 0.2s",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}
            >
              <h3>Blogs</h3>
              <p>Read our latest articles and insights.</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
