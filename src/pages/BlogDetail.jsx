import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { blogs } from '../data/blogs';

// Dynamic imports for blog content
import BlogPost1 from '../data/blogContent/BlogPost1';
import BlogPost2 from '../data/blogContent/BlogPost2';
import BlogPost3 from '../data/blogContent/BlogPost3';
import BlogPost4 from '../data/blogContent/BlogPost4';
import BlogPost5 from '../data/blogContent/BlogPost5';
import BlogPost6 from '../data/blogContent/BlogPost6';
import BlogPost7 from '../data/blogContent/BlogPost7';
import BlogPost8 from '../data/blogContent/BlogPost8';
import BlogPost9 from '../data/blogContent/BlogPost9';
import BlogPost10 from '../data/blogContent/BlogPost10';

const contentMap = {
  'BlogPost1': BlogPost1,
  'BlogPost2': BlogPost2,
  'BlogPost3': BlogPost3,
  'BlogPost4': BlogPost4,
  'BlogPost5': BlogPost5,
  'BlogPost6': BlogPost6,
  'BlogPost7': BlogPost7,
  'BlogPost8': BlogPost8,
  'BlogPost9': BlogPost9,
  'BlogPost10': BlogPost10,
};

function TOC({ blog }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="toc-card">
      <div className="toc-header" onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>
        <strong>Table of Contents</strong>
        <i className={`fa-solid fa-chevron-up toggle-icon ${isOpen ? '' : 'collapsed'}`}></i>
      </div>
      
      {isOpen && (
        <ul className="toc-list">
          <li>
            <span>1.</span>
            <a href="#" className="active-toc-item">{blog.title}</a>
          </li>
          {blog.toc && blog.toc.map((item, idx) => (
            <li key={idx}>
              <span>{idx + 2}.</span> 
              <a href={`#${item.id}`}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function BlogDetail() {
  const { slug } = useParams();
  const blog = blogs.find(b => b.slug === slug);

  if (!blog) {
    return (
      <>
        <Header />
        <div style={{ padding: '100px 8%', textAlign: 'center' }}>
          <h2>Blog not found</h2>
          <Link to="/blog" style={{ color: 'var(--brand-teal)', fontWeight: '600' }}>← Back to All Blogs</Link>
        </div>
        <Footer />
      </>
    );
  }

  const BlogContentComponent = contentMap[blog.contentFile];

  return (
    <>
      <Header />

      {/* Hero Banner - same light background with blog title on it */}
      <div className="blog-detail-hero">
        <h1 style={{ fontSize: 'clamp(2rem,4vw,3rem)', position: 'relative', zIndex: 2 }}>
          {blog.title}
        </h1>
      </div>

      {/* Content Area */}
      <div className="blog-detail-container">
        
        {/* Left: Content */}
        <div className="blog-detail-content">
          <h2 className="detail-main-title">{blog.title}</h2>
          <div className="title-underline"></div>
          {BlogContentComponent ? <BlogContentComponent /> : <p>Content coming soon...</p>}
        </div>

        {/* Right: Featured Image & TOC */}
        <div className="blog-detail-sidebar">
          <img src={blog.image} alt={blog.title} className="sidebar-featured-img" />
          
          <TOC blog={blog} />
        </div>

      </div>

      {/* Back Link */}
      <div style={{ textAlign:'center', padding:'20px 0 60px' }}>
        <Link to="/blog" style={{ color:'var(--brand-teal)', 
          fontWeight:'600', fontSize:'1rem' }}>
          ← Back to All Blogs
        </Link>
      </div>

      <Footer />
    </>
  );
}

/**
 * HOW TO ADD NEW BLOGS IN FUTURE:
 * 1. Create a new file in src/data/blogContent/ (e.g., BlogPost4.jsx) with your content.
 * 2. Add an entry to the 'blogs' array in src/data/blogs.js, specifying the new slug, title, image, and contentFile name.
 * 3. Import the new BlogPost4 component at the top of this file and add it to the 'contentMap' object.
 * The new blog will automatically appear on the /blog listing page and have its own detail page.
 */
