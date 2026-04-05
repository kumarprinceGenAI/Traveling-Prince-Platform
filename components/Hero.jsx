import React from 'react';
import Link from 'next/link';
import { MapPin, ArrowRight, Video } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://thetravelingprince.wuaze.com/wp-content/uploads/2025/04/ca9615d1-752a-44fa-8336-3457fecdd5a8-1-scaled.jpg"
          alt="Travel background"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-bg-dark/55 via-bg-dark/35 to-bg-dark" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-3xl animate-up">
          {/* Tag */}
          <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-[0.25em] mb-6">
            <MapPin className="w-4 h-4" />
            <span>Explore the Unseen</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.05] tracking-tighter text-white">
            Journey Beyond the{' '}
            <span className="gradient-text">Ordinary.</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-text-muted mb-10 max-w-2xl leading-relaxed">
            Sharing 10+ years of raw travel experiences, from offbeat road trips to high-altitude treks. Join the adventure.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/blog" 
              className="px-8 py-4 bg-primary text-white rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-all shadow-lg shadow-primary/20"
            >
              Start Reading
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="https://www.youtube.com/@thetravelingprince4" 
              target="_blank" 
              rel="noreferrer" 
              className="px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-xl text-white rounded-full font-bold flex items-center gap-2 hover:bg-white/10 transition-all"
            >
              <Video className="w-5 h-5" />
              Watch Vlogs
            </a>
          </div>
        </div>
      </div>

      {/* Lat/Lon decorative */}
      <div className="absolute bottom-10 right-10 z-20 opacity-30 text-right hidden lg:block">
        <p className="text-[10px] tracking-[0.5em] uppercase text-primary mb-1">Latitude 25.3176° N</p>
        <p className="text-[10px] tracking-[0.5em] uppercase text-accent">Longitude 82.9739° E</p>
      </div>
    </section>
  );
};

export default Hero;
