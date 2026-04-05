import React from 'react';
import { posts } from '../data/posts';
import BlogCard from './BlogCard';

const BlogSection = () => {
  return (
    <section style={{ padding: '5rem 0', background: 'var(--bg-dark)', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '25%',
        width: '24rem', height: '24rem',
        background: 'rgba(14,165,233,0.06)',
        borderRadius: '50%', filter: 'blur(120px)', zIndex: 0,
        transform: 'translate(-50%, -50%)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', gap: '2rem' }}>
          <div style={{ maxWidth: '38rem' }}>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--primary)', fontWeight: 600, marginBottom: '1rem' }}>
              — Stories from the Road
            </p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1rem' }}>
              Latest <span className="gradient-text">Travel Stories</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7 }}>
              Destination guides, travel tips, and stories from the road — crafted to help you plan your next adventure.
            </p>
          </div>
          <button style={{
            background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)',
            backdropFilter: 'blur(10px)', color: 'white', padding: '0.75rem 2rem',
            borderRadius: '9999px', fontWeight: 500, cursor: 'pointer',
            transition: 'all 0.3s ease', whiteSpace: 'nowrap',
          }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
          >
            View All Posts
          </button>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
