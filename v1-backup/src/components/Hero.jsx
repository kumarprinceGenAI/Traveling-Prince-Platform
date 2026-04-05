import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      {/* Background Image */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img
          src="https://thetravelingprince.wuaze.com/wp-content/uploads/2025/04/ca9615d1-752a-44fa-8336-3457fecdd5a8-1-scaled.jpg"
          alt="Travel background"
          style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.05)' }}
        />
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(to bottom, rgba(2,6,23,0.55), rgba(2,6,23,0.35), rgba(2,6,23,1))'
        }} />
      </div>

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '48rem', animation: 'fadeInUp 0.9s ease-out forwards' }}>
          {/* Tag */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', marginBottom: '1rem' }}>
            {/* MapPin SVG */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>Explore the Unseen</span>
          </div>

          {/* Heading */}
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 800, lineHeight: 1.05, marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>
            Journey Beyond the{' '}
            <span className="gradient-text">Ordinary.</span>
          </h1>

          {/* Subtext */}
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '38rem', lineHeight: 1.7 }}>
            Sharing 10+ years of raw travel experiences, from offbeat road trips to high-altitude treks. Join the adventure.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <Link to="/destinations" style={{
              background: 'var(--primary)', color: 'white', padding: '1rem 2rem',
              borderRadius: '9999px', fontWeight: 600, textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              transition: 'all 0.3s ease', fontSize: '0.95rem',
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              Start Reading
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
            <a href="https://www.youtube.com/@thetravelingprince4" target="_blank" rel="noreferrer" style={{
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)',
              backdropFilter: 'blur(10px)', color: 'white', padding: '1rem 2rem',
              borderRadius: '9999px', fontWeight: 600, textDecoration: 'none',
              transition: 'all 0.3s ease', fontSize: '0.95rem',
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
            >
              Watch Vlogs
            </a>
          </div>
        </div>
      </div>

      {/* Lat/Lon decorative */}
      <div style={{ position: 'absolute', bottom: '2.5rem', right: '2.5rem', zIndex: 10, opacity: 0.25, textAlign: 'right' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.25rem' }}>Latitude 25.3176° N</p>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--accent)' }}>Longitude 82.9739° E</p>
      </div>
    </section>
  );
};

export default Hero;
