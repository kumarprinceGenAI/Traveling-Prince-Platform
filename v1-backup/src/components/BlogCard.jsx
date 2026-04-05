import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ post }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'rgba(15,23,42,0.4)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '1.5rem',
        overflow: 'hidden',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: hovered ? '0 20px 40px rgba(0,0,0,0.4)' : '0 4px 16px rgba(0,0,0,0.2)',
      }}
    >
      {/* Image */}
      <Link to={`/blog/${post.id}`} style={{ display: 'block', position: 'relative', height: '16rem', overflow: 'hidden', textDecoration: 'none' }}>
        <img
          src={post.image}
          alt={post.title}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            transition: 'transform 0.6s ease',
            transform: hovered ? 'scale(1.08)' : 'scale(1)',
          }}
        />
        <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
          <span style={{
            background: 'rgba(14,165,233,0.85)', color: 'white',
            fontSize: '0.65rem', fontWeight: 700, padding: '0.25rem 0.75rem',
            borderRadius: '9999px', textTransform: 'uppercase', letterSpacing: '0.1em',
          }}>
            {post.category}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div style={{ padding: '1.75rem' }}>
        <div style={{ display: 'flex', gap: '1rem', fontSize: '0.65rem', color: 'var(--text-muted)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 500 }}>
          <span>📅 {post.date}</span>
          <span>✍️ {post.author}</span>
        </div>

        <Link to={`/blog/${post.id}`} style={{ textDecoration: 'none' }}>
          <h3 style={{
            fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem',
            lineHeight: 1.3, color: hovered ? 'var(--primary)' : 'white',
            transition: 'color 0.3s ease',
            display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
          }}>
            {post.title}
          </h3>
        </Link>

        <p style={{
          color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.5rem',
          display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden',
        }}>
          {post.excerpt}
        </p>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
            {post.readTime}
          </span>
          <Link to={`/blog/${post.id}`} style={{
            color: 'var(--primary)', textDecoration: 'none', fontWeight: 700,
            fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.3rem',
          }}>
            Read Story ↗
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
