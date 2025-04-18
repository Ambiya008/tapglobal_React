import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useParams } from 'react-router-dom';
import './BlogDetails.scss';

const BlogDetails = () => {
  const { id } = useParams();

  const blogPosts = [
    {
      id: 1,
      title: "Digital Transformation Trends",
      category: "Technology",
      date: "March 15, 2024",
      image: "/images/blog/digital-transformation.jpg",
      excerpt: "Latest trends in digital transformation..."
    },
    // Add more blog posts
  ];

  const currentBlog = blogPosts.find(post => post.id === parseInt(id));
  const otherBlogs = blogPosts.filter(post => post.id !== parseInt(id));

  return (
    <div className="blog-details-page">
      <Header />
      <div className="blog-banner">
        <div className="container">
          <h1>Blog Details</h1>
          <p>Insights and Updates</p>
        </div>
      </div>
      <div className="blog-details-content">
        <div className="container">
          <div className="content-wrapper">
            <div className="sidebar">
              <h2>Recent Posts</h2>
              <div className="recent-posts">
                {otherBlogs.map(blog => (
                  <div key={blog.id} className="blog-card-small">
                    <img src={blog.image} alt={blog.title} />
                    <div className="blog-info">
                      <span className="category">{blog.category}</span>
                      <h3>{blog.title}</h3>
                      <p>{blog.excerpt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="main-content">
              {currentBlog && (
                <article className="blog-post">
                  <img src={currentBlog.image} alt={currentBlog.title} />
                  <h1>{currentBlog.title}</h1>
                  <div className="meta">
                    <span>{currentBlog.category}</span>
                    <span>{currentBlog.date}</span>
                  </div>
                  {/* Add your blog content here */}
                </article>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetails;