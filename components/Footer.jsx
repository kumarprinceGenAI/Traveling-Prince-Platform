import React from "react";
import Link from "next/link";
import { Youtube, Instagram, Facebook, Compass, ChevronRight, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-white/5 bg-bg-dark pt-20 pb-10 overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group mb-8">
              <div className="relative w-12 h-12 overflow-hidden rounded-2xl border border-white/10 shadow-lg shadow-primary/10">
                <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">
                The<span className="text-primary">Traveling</span>Prince
              </span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs font-medium">
              Documenting a decade of raw travel experiences and mapping the hidden corners of the subcontinent.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Youtube />, href: "https://www.youtube.com/@thetravelingprince4", color: "hover:bg-[#FF0000]/20 hover:text-[#FF0000]" },
                { icon: <Instagram />, href: "https://www.instagram.com/thetravelingprince04/", color: "hover:bg-[#E1306C]/20 hover:text-[#E1306C]" },
                { icon: <Facebook />, href: "https://www.facebook.com/kumar.princu.5", color: "hover:bg-[#1877F2]/20 hover:text-[#1877F2]" }
              ].map((social, i) => (
                <Link 
                  key={i} 
                  href={social.href}
                  className={`w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-text-muted transition-all ${social.color} hover:border-current`}
                >
                  {React.cloneElement(social.icon, { className: "w-5 h-5" })}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-white">Navigation</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Explore Blogs", href: "/blog" },
                { name: "Travel Vlogs", href: "/vlogs" },
                { name: "About the Prince", href: "/about" },
                { name: "Contact & Collaboration", href: "/contact" },
                { name: "Metrics Dashboard", href: "/metrics" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-text-muted hover:text-primary text-sm flex items-center gap-2 group transition-colors">
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all font-bold" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Trust */}
          <div className="space-y-6">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-white">Trust Center</h4>
            <ul className="space-y-3">
              {[
                { name: "FAQs", href: "/faq" },
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
                { name: "Cookie Settings", href: "#" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-text-muted hover:text-white text-sm flex items-center gap-2 group transition-colors underline-offset-4 hover:underline">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach Out */}
          <div className="space-y-6">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-white">Reach Out</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <div className="text-sm">
                  <p className="text-white font-bold mb-0.5">Email Me</p>
                  <a href="mailto:thetravelingprince4@gmail.com" className="text-text-muted hover:text-primary transition-colors">thetravelingprince4@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div className="text-sm">
                  <p className="text-white font-bold mb-0.5">Location</p>
                  <p className="text-text-muted">India | Traveling Globally</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Credit */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-text-muted text-[10px] font-bold uppercase tracking-[0.2em] text-center md:text-left leading-loose">
            Copyright © {currentYear} <Link href="https://www.youtube.com/@thetravelingprince4" className="text-white hover:text-primary transition-colors">The Traveling Prince</Link> | 
            Developed by <span className="text-white">The Traveling Prince</span>
          </div>
          
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-text-muted/40">
            <span>Sitemap</span>
            <span>RSS Feed</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
