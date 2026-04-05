import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const destinations = [
  {
    name: 'Varanasi',
    type: 'Spiritual',
    image: 'https://thetravelingprince.wuaze.com/wp-content/uploads/2025/04/14d562fb-06ab-478a-9f80-e5f38424a2ec-1-scaled.jpg',
    desc: 'The spiritual capital of India — ancient ghats, sacred rituals, and timeless stories.',
  },
  {
    name: 'Rameshwaram',
    type: 'Island',
    image: 'https://thetravelingprince.wuaze.com/wp-content/uploads/2025/04/IMG_20240926_120825706-scaled.jpg',
    desc: 'A sacred journey to the island city at the tip of the subcontinent.',
  },
  {
    name: 'Hyderabad',
    type: 'Heritage',
    image: 'https://thetravelingprince.wuaze.com/wp-content/uploads/2025/04/c6c8147f-f4b1-4c06-a991-a73eb805b62c-1-scaled.jpg',
    desc: 'The city of pearls, Nizami heritage, and world-famous biryani.',
  },
  {
    name: 'Statue of Unity',
    type: 'Monument',
    image: 'https://thetravelingprince.wuaze.com/wp-content/uploads/2025/04/ca9615d1-752a-44fa-8336-3457fecdd5a8-1-scaled.jpg',
    desc: "The world's tallest statue, standing proud in the heart of Gujarat.",
  },
];

const DestCard = ({ dest }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative', borderRadius: '1.5rem', overflow: 'hidden',
        aspectRatio: '1 / 1', cursor: 'pointer',
        transform: hovered ? 'scale(1.02)' : 'scale(1)',
        transition: 'transform 0.4s ease',
      }}
    >
      <img
        src={dest.image}
        alt={dest.name}
        style={{
          width: '100%', height: '100%', objectFit: 'cover',
          transform: hovered ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 0.6s ease',
        }}
      />
      {/* Overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(2,6,23,0.92) 0%, rgba(2,6,23,0.3) 50%, transparent 100%)',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: '1.75rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary)', fontWeight: 700, fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
          </svg>
          {dest.type}
        </div>
        <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'white', marginBottom: '0.5rem', transition: 'color 0.3s', color: hovered ? 'var(--primary)' : 'white' }}>
          {dest.name}
        </h3>
        <p style={{
          color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1rem',
          opacity: hovered ? 1 : 0, transform: hovered ? 'translateY(0)' : 'translateY(10px)',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
        }}>
          {dest.desc}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'white', fontWeight: 700, fontSize: '0.85rem' }}>
          Explore Guide →
        </div>
      </div>
    </div>
  );
};

const Destinations = () => {
  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '5rem', background: 'var(--bg-dark)', minHeight: '100vh' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '4rem', animation: 'fadeInUp 0.7s ease-out' }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--primary)', fontWeight: 600, marginBottom: '1rem' }}>
            — Places I've Explored
          </p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.25rem' }}>
            Featured <span className="gradient-text">Destinations</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '38rem', lineHeight: 1.7 }}>
            My personal favorites and some of the most stunning locations I've encountered on my 10-year journey.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {destinations.map((dest, i) => (
            <DestCard key={i} dest={dest} />
          ))}
        </div>

        {/* Back link */}
        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
          <Link to="/" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)',
            color: 'white', padding: '0.9rem 2rem', borderRadius: '9999px',
            fontWeight: 500, textDecoration: 'none', transition: 'background 0.3s',
          }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
