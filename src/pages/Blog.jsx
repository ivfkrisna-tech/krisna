import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';
import { blogs } from '../data/blogs';
import '../styles/blog.css';

export default function Blog() {
  return (
    <>
      <Header />
      
      <main>
        <section className="blog-page-header"> 
          <h1 style={{ fontWeight: '800' }}>Fertility Insights & Stories</h1>
          <p style={{ maxWidth: '700px', margin: '15px auto 0' }}>
            Expert advice, latest medical breakthroughs, and heartwarming success stories to guide you on your journey to parenthood.
          </p>
        </section>

        <section className="blog-container">
          <div className="blog-grid">
            {blogs.map(blog => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
