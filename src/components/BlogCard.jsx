import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogCard({ blog }) {
  return (
    <article className="blog-card">
      <div className="blog-thumb">
        <img src={blog.image} alt={blog.title} />
      </div>
      <div className="blog-content">
        <h2 className="blog-title">{blog.title}</h2>
        <Link to={`/blog/${blog.slug}`} className="read-more-link">
          READ MORE »
        </Link>
      </div>
    </article>
  );
}
