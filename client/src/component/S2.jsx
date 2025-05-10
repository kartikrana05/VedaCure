import React from 'react';
import d8 from '../assets/image/d8.jpg';
import d9 from '../assets/image/d9.jpg';

const blogPosts = [
  {
    category: 'Exercise & Fitness',
    title: 'The skincare routine that works expert tips.',
    date: 'July 18, 2024',
    image: d8,
  },
  {
    category: 'Mental Health',
    title: 'The art of managing business and patient.',
    date: 'Aug 26, 2024',
    image: d9,
  },
  {
    category: "Children's Health",
    title: 'Successful transitional rehab; more than just exercise',
    isIconCard: true,
  },
];

const HealthBlogs = () => {
  return (
    <section className="blogs-section" data-scroll>
      <div className="blogs-header" data-scroll data-scroll-speed="1.5">
        <span className="latest-news">● Our latest news</span>
        <h2>
          Check out our most recent <br /> <span>health blogs.</span>
        </h2>
        <button className="view-all-posts">View all Post →</button>
      </div>

      <div className="blogs-grid" data-scroll data-scroll-speed="1.2">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className={`blog-card ${post.isIconCard ? 'icon-card' : ''}`}
            style={post.image ? { backgroundImage: `url(${post.image})` } : {}}
            data-scroll
            data-scroll-speed="1"
          >
            <span className="blog-tag">● {post.category}</span>
            <div className="blog-content">
              <h3 className="blog-title">{post.title}</h3>
              {post.date && <span className="blog-date">{post.date}</span>}
              {post.isIconCard && <div className="icon-circle">↑</div>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HealthBlogs;
