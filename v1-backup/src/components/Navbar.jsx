import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'Blog', href: '#' },
    { name: 'Gallery', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 50,
      transition: 'all 0.3s ease',
      background: isScrolled ? 'rgba(15,23,42,0.8)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(12px)' : 'none',
      borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
      padding: isScrolled ? '0.75rem 0' : '1.25rem 0',
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          {/* Compass SVG */}
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
          </svg>
          <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'white', letterSpacing: '-0.02em' }}>
            The<span style={{ color: 'var(--primary)' }}>Traveling</span>Prince
          </span>
        </Link>

        {/* Desktop Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              style={{
                fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.1em',
                textTransform: 'uppercase', textDecoration: 'none',
                color: isActive(link.href) ? 'white' : 'var(--text-muted)',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={e => e.target.style.color = 'white'}
              onMouseLeave={e => e.target.style.color = isActive(link.href) ? 'white' : 'var(--text-muted)'}
            >
              {link.name}
            </Link>
          ))}
          <div style={{ display: 'flex', gap: '1rem', marginLeft: '0.5rem' }}>
            <a href="https://www.youtube.com/@thetravelingprince4" target="_blank" rel="noreferrer"
              style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#ef4444'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
              {/* YouTube SVG */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23 7s-.3-2-1.2-2.8c-1.1-1.2-2.4-1.2-3-1.3C16.2 2.8 12 2.8 12 2.8s-4.2 0-6.8.1c-.6.1-1.9.1-3 1.3C1.3 5 1 7 1 7S.7 9.1.7 11.3V13c0 2.1.3 4.2.3 4.2s.3 2 1.2 2.8c1.1 1.2 2.6 1.1 3.3 1.2C7.2 21.4 12 21.5 12 21.5s4.2 0 6.8-.2c.6-.1 1.9-.1 3-1.3.9-.8 1.2-2.8 1.2-2.8s.3-2.1.3-4.2v-1.7C23.3 9.1 23 7 23 7zM9.7 15.5V8.4l8.1 3.6-8.1 3.5z"/></svg>
            </a>
            <a href="https://www.instagram.com/thetravelingprince04/" target="_blank" rel="noreferrer"
              style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#ec4899'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
              {/* Instagram SVG */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
