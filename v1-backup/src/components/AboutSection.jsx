import React from 'react';

const AboutSection = () => {
  const stats = [
    { label: 'Years of Travel', value: '10+', emoji: '🌏' },
    { label: 'Destinations', value: '50+', emoji: '📍' },
    { label: 'Subscribers', value: '100K+', emoji: '▶️' },
  ];

  return (
    <section style={{ padding: '5rem 0', background: 'var(--bg-dark)', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative glow */}
      <div style={{
        position: 'absolute', bottom: 0, right: 0,
        width: '20rem', height: '20rem',
        background: 'rgba(249,115,22,0.06)',
        borderRadius: '50%', filter: 'blur(100px)', zIndex: 0,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>

        {/* Image Column */}
        <div style={{ position: 'relative' }}>
          <div style={{
            aspectRatio: '4/5', borderRadius: '2rem', overflow: 'hidden',
            background: 'rgba(15,23,42,0.4)', backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.08)', padding: '1rem',
          }}>
            <img
              src="https://thetravelingprince.wuaze.com/wp-content/uploads/2025/04/IMG_20240926_120825706-scaled.jpg"
              alt="Kumar Prince"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1.5rem' }}
            />
          </div>
          {/* Floating badge */}
          <div style={{
            position: 'absolute', bottom: '-1.5rem', right: '-1rem',
            background: 'rgba(15,23,42,0.8)', backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.12)',
            padding: '1rem 1.5rem', borderRadius: '1.5rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                width: '2.75rem', height: '2.75rem', borderRadius: '50%',
                background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.1rem',
              }}>🚢</div>
              <div>
                <p style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-muted)', marginBottom: '0.15rem' }}>Currently in</p>
                <p style={{ fontWeight: 700, fontSize: '0.95rem', color: 'white' }}>Exploring India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Text Column */}
        <div>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--primary)', fontWeight: 600, marginBottom: '1rem' }}>
            — About Me
          </p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.5rem' }}>
            I'm <span className="gradient-text">Kumar Prince</span>, a Marine Engineer turned{' '}
            <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>Traveler.</span>
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.75, marginBottom: '2.5rem' }}>
            <p>
              By education, a Marine Engineer; by profession, a Software Engineer; but by passion, I am a traveler and storyteller.
            </p>
            <p>
              My journey isn't just about visiting locations — it's about road trips, high-altitude treks, and offbeat paths most travelers overlook. Over the past 10 years, I've dedicated myself to capturing the soul of every place I visit.
            </p>
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '2.5rem' }}>
            {stats.map((s, i) => (
              <div key={i} style={{
                background: 'rgba(15,23,42,0.4)', backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '1rem', padding: '1.25rem 1rem', textAlign: 'center',
              }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.4rem' }}>{s.emoji}</div>
                <p style={{ fontSize: '1.5rem', fontWeight: 800, color: 'white', marginBottom: '0.25rem' }}>{s.value}</p>
                <p style={{ fontSize: '0.6rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>{s.label}</p>
              </div>
            ))}
          </div>

          {/* Social links */}
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="https://www.youtube.com/@thetravelingprince4" target="_blank" rel="noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500, transition: 'color 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#ef4444'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23 7s-.3-2-1.2-2.8c-1.1-1.2-2.4-1.2-3-1.3C16.2 2.8 12 2.8 12 2.8s-4.2 0-6.8.1c-.6.1-1.9.1-3 1.3C1.3 5 1 7 1 7S.7 9.1.7 11.3V13c0 2.1.3 4.2.3 4.2s.3 2 1.2 2.8c1.1 1.2 2.6 1.1 3.3 1.2C7.2 21.4 12 21.5 12 21.5s4.2 0 6.8-.2c.6-.1 1.9-.1 3-1.3.9-.8 1.2-2.8 1.2-2.8s.3-2.1.3-4.2v-1.7C23.3 9.1 23 7 23 7zM9.7 15.5V8.4l8.1 3.6-8.1 3.5z"/></svg>
              YouTube
            </a>
            <a href="https://www.instagram.com/thetravelingprince04/" target="_blank" rel="noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500, transition: 'color 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#ec4899'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              Instagram
            </a>
            <a href="https://www.facebook.com/Thetravelingprince04/" target="_blank" rel="noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500, transition: 'color 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#3b82f6'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
