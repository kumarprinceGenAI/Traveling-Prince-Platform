"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { MapPin, ArrowRight, ArrowLeft } from 'lucide-react';

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
      className="relative rounded-[2rem] overflow-hidden aspect-square cursor-pointer transition-all duration-500 hover:scale-[1.02]"
    >
      <img
        src={dest.image}
        alt={dest.name}
        className={`w-full h-full object-cover transition-transform duration-700 ${hovered ? 'scale-110' : 'scale-100'}`}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/95 via-bg-dark/40 to-transparent flex flex-col justify-end p-8">
        <div className="flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest mb-2">
          <MapPin className="w-3 h-3" />
          {dest.type}
        </div>
        <h3 className={`text-2xl font-black mb-2 transition-colors duration-300 ${hovered ? 'text-primary' : 'text-white'}`}>
          {dest.name}
        </h3>
        <p className={`text-text-muted text-sm leading-relaxed mb-6 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {dest.desc}
        </p>
        <div className="flex items-center gap-2 text-white font-bold text-sm group">
          Explore Guide 
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};

export default function DestinationsPage() {
  return (
    <div className="container mx-auto px-6 py-12 pt-32 min-h-screen">
      {/* Header */}
      <header className="mb-20">
        <div className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-4">
          — Places I've Explored
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
          Featured <span className="gradient-text">Destinations</span>
        </h1>
        <p className="text-xl text-text-muted max-w-2xl leading-relaxed">
          My personal favorites and some of the most stunning locations I've encountered on my 10-year journey.
        </p>
      </header>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((dest, i) => (
          <DestCard key={i} dest={dest} />
        ))}
      </div>

      {/* Footer CTA */}
      <div className="mt-20 flex justify-center">
        <Link 
          href="/" 
          className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-bold hover:bg-white/10 transition-all group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
