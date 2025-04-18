import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { CalendarToday, Person, ArrowForward } from '@mui/icons-material';
import './Blog.scss';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Business Turnaround: Key Strategies for Success",
      excerpt: "Discover the essential strategies and methodologies that drive successful business turnarounds in today's dynamic market.",
      author: "John Smith",
      date: "March 15, 2024",
      image: "/images/blog/turnaround-strategies.jpg",
      category: "Business Strategy"
    },
    {
      id: 2,
      title: "Understanding Mergers & Acquisitions in 2024",
      excerpt: "An in-depth look at the current M&A landscape and what businesses should consider before pursuing strategic acquisitions.",
      author: "Sarah Johnson",
      date: "March 10, 2024",
      image: "/images/blog/mergers-acquisitions.jpg",
      category: "M&A"
    },
    {
      id: 3,
      title: "Financial Restructuring: A Comprehensive Guide",
      excerpt: "Learn about the latest approaches to financial restructuring and how they can benefit your organization.",
      author: "Michael Chen",
      date: "March 5, 2024",
      image: "/images/blog/financial-restructuring.jpg",
      category: "Finance"
    }
  ];

  return (
    <>
      <Header />
      <div className="blog-page">
        <div className="blog-banner">
          <div className="container">
            <h1>Our Blog</h1>
            <p>Insights and Updates from TAP Global</p>
          </div>
        </div>
        <div className="blog-content">
          <div className="container">
            <div className="blog-grid">
              {blogPosts.map(post => (
                <div key={post.id} className="blog-card">
                  <div className="blog-image">
                    <img src={post.image} alt={post.title} />
                    <span className="category">{post.category}</span>
                  </div>
                  <div className="blog-details">
                    <h2>{post.title}</h2>
                    <p>{post.excerpt}</p>
                    <div className="meta-info">
                      <span className="author">
                        <Person /> {post.author}
                      </span>
                      <span className="date">
                        <CalendarToday /> {post.date}
                      </span>
                    </div>
                    <a href={`/blog/${post.id}`} className="read-more">
                      Read More <ArrowForward />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Blog;