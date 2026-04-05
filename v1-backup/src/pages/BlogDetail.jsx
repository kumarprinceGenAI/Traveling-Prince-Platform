import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { posts } from '../data/posts';

const BlogDetail = () => {
  const { id } = useParams();
  const post = posts.find(p => p.id === id) || posts[0];

  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '5rem', background: 'var(--bg-dark)', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '52rem' }}>

        {/* Back link */}
        <Link to="/" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '3rem',
          fontSize: '0.875rem', fontWeight: 500, transition: 'color 0.3s',
        }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
          </svg>
          Back to Home
        </Link>

        {/* Category + Date */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <span style={{
            background: 'rgba(14,165,233,0.12)', color: 'var(--primary)',
            fontSize: '0.7rem', fontWeight: 700, padding: '0.3rem 0.9rem',
            borderRadius: '9999px', textTransform: 'uppercase', letterSpacing: '0.1em',
          }}>
            {post.category}
          </span>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>📅 {post.date}</span>
        </div>

        {/* Title */}
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '2rem' }}>
          {post.title}
        </h1>

        {/* Author bar */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '1.5rem 0', borderTop: '1px solid rgba(255,255,255,0.08)',
          borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '3rem', height: '3rem', borderRadius: '50%', overflow: 'hidden', border: '2px solid rgba(255,255,255,0.1)' }}>
              <img
                src="https://thetravelingprince.wuaze.com/wp-content/uploads/2025/04/IMG_20240926_120825706-scaled.jpg"
                alt="Author"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div>
              <p style={{ fontWeight: 700, color: 'white', marginBottom: '0.15rem', fontSize: '0.9rem' }}>{post.author}</p>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Traveler & Storyteller</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            <span>⏱ {post.readTime}</span>
            <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '1rem' }}>📤</button>
          </div>
        </div>

        {/* Featured Image */}
        <div style={{
          aspectRatio: '16/9', borderRadius: '1.5rem', overflow: 'hidden',
          background: 'rgba(15,23,42,0.4)', border: '1px solid rgba(255,255,255,0.08)',
          padding: '0.75rem', marginBottom: '3rem',
        }}>
          <img
            src={post.image}
            alt={post.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem' }}
          />
        </div>

        {/* Article content */}
        <article style={{ color: 'var(--text-muted)', lineHeight: 1.85, fontSize: '1.05rem' }}>
          <p style={{ fontSize: '1.2rem', color: 'white', fontWeight: 500, marginBottom: '2rem', lineHeight: 1.7 }}>
            {post.excerpt}
          </p>

          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'white', margin: '2.5rem 0 1rem' }}>
            Introduction to the Journey
          </h2>
          <p style={{ marginBottom: '1.25rem' }}>
            Traveling is more than just checking off destinations; it's about the transformation that happens within.
            My visit to {post.title.split(':')[0]} was no exception. From the first moment I arrived, I felt the energy of the place.
          </p>
          <p style={{ marginBottom: '2rem' }}>
            In this guide, I'll walk you through the hidden gems and the legendary landmarks that make this destination
            a must-visit for every offbeat traveler.
          </p>

          {/* Pull quote */}
          <div style={{
            background: 'rgba(14,165,233,0.06)', border: '1px solid rgba(14,165,233,0.2)',
            borderLeft: '4px solid var(--primary)', borderRadius: '1rem',
            padding: '1.75rem 2rem', margin: '2.5rem 0', fontStyle: 'italic', color: 'white', fontSize: '1.1rem',
          }}>
            "The world is a book and those who do not travel read only one page." This quote resonates more deeply every time I hit the road.
          </div>

          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'white', margin: '2.5rem 0 1rem' }}>
            Key Highlights
          </h2>
          <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li>Ancient cultural heritage and storytelling.</li>
            <li>Hidden vistas away from the tourist traps.</li>
            <li>Authentic local flavors and culinary secrets.</li>
            <li>The warmth of the community and the rhythm of local life.</li>
          </ul>
        </article>

        {/* More posts CTA */}
        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
          <Link to="/" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'var(--primary)', color: 'white', padding: '1rem 2.5rem',
            borderRadius: '9999px', fontWeight: 600, textDecoration: 'none',
            transition: 'transform 0.3s ease',
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            ← Explore More Stories
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
