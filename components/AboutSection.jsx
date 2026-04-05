import React from 'react';
import { Youtube, Instagram, Facebook, Award, MapPin, Globe, Users } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { label: 'Years of Travel', value: '10+', icon: <Globe className="w-5 h-5" /> },
    { label: 'Destinations', value: '50+', icon: <MapPin className="w-5 h-5" /> },
    { label: 'Subscribers', value: '100K+', icon: <Users className="w-5 h-5" /> },
  ];

  const socials = [
    { name: 'YouTube', href: 'https://www.youtube.com/@thetravelingprince4', icon: <Youtube className="w-5 h-5" />, color: 'hover:text-red-500' },
    { name: 'Instagram', href: 'https://www.instagram.com/thetravelingprince04/', icon: <Instagram className="w-5 h-5" />, color: 'hover:text-pink-500' },
    { name: 'Facebook', href: 'https://www.facebook.com/Thetravelingprince04/', icon: <Facebook className="w-5 h-5" />, color: 'hover:text-blue-500' },
  ];

  return (
    <section className="py-24 bg-bg-dark relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-primary/5 blur-[120px] rounded-full translate-x-1/4 translate-y-1/4" />
      
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Image Column */}
        <div className="relative order-2 lg:order-1">
          <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden glass p-3 border-white/5 relative">
            <img 
              src="https://thetravelingprince.wuaze.com/wp-content/uploads/2025/04/IMG_20240926_120825706-scaled.jpg" 
              alt="Kumar Prince" 
              className="w-full h-full object-cover rounded-[2rem]"
            />
          </div>
          
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -right-6 glass p-6 rounded-3xl border-white/10 shadow-2xl backdrop-blur-3xl animate-up">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-xl shadow-lg shadow-primary/30 text-white">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-text-muted font-bold mb-1">Currently in</p>
                <p className="text-white font-black text-xs">Exploring India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="order-1 lg:order-2">
          <div className="text-primary font-bold text-xs uppercase tracking-[0.4em] mb-4">— About Me</div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter text-white">
            I'm <span className="gradient-text">Kumar Prince</span>, an Engineer turned <span className="italic text-primary">Traveler.</span>
          </h2>
          
          <div className="space-y-6 text-text-muted text-lg leading-relaxed mb-10">
            <p>
              By education, an Engineer; by profession, a Software Engineer; but by passion, I am a traveler and storyteller.
            </p>
            <p>
              My journey isn't just about visiting locations — it's about road trips, high-altitude treks, and offbeat paths most travelers overlook. Over the past 10 years, I've dedicated myself to capturing the soul of every place I visit.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            {stats.map((stat, i) => (
              <div key={i} className="glass py-6 px-4 rounded-2xl text-center border-white/5 hover:border-primary/20 transition-all group">
                <div className="text-primary opacity-50 mb-3 flex justify-center group-hover:scale-110 transition-all">{stat.icon}</div>
                <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-text-muted">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-8">
            {socials.map((social) => (
              <a 
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-2 text-text-muted font-bold text-sm tracking-widest uppercase transition-all ${social.color}`}
              >
                {social.icon}
                <span className="hidden sm:inline">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
