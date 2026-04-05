import React from "react";
import { 
  Mail, 
  MessageSquare, 
  Send, 
  Youtube, 
  Instagram, 
  Facebook, 
  MapPin, 
  Globe, 
  Zap,
  Handshake
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-6 pt-32 pb-24 max-w-7xl">
      {/* Header */}
      <header className="mb-24 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em] shadow-lg shadow-primary/5">
          Get in Touch
        </div>
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">
          Let’s Chart <br />
          <span className="gradient-text">A New Course.</span>
        </h1>
        <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
          Questions about a budget route? Collaboration ideas? Or just want to say hi? I'm always open to new conversations.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
        {/* Contact Form */}
        <section className="glass p-8 lg:p-12 rounded-[3.5rem] border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] pointer-events-none" />
          
          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-8 relative z-10">
            {/* 
              GET YOUR FREE ACCESS KEY AT: https://web3forms.com/
              REPLACE 'YOUR_ACCESS_KEY' WITH YOUR ACTUAL KEY
            */}
            <input type="hidden" name="access_key" value="9de232f1-0086-47f0-a345-1cb6e3b8495c" />
            <input type="hidden" name="subject" value="New Contact from The Traveling Prince" />
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-widest text-text-muted ml-1">Full Name</label>
              <input 
                type="text" 
                name="name"
                required
                placeholder="Prince Kumar"
                className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-5 text-white placeholder:text-text-muted/30 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all font-medium"
              />
            </div>
            
            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-widest text-text-muted ml-1">Email Address</label>
              <input 
                type="email" 
                name="email"
                required
                placeholder="prince@example.com"
                className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-5 text-white placeholder:text-text-muted/30 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all font-medium"
              />
            </div>

            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-widest text-text-muted ml-1">Your Message</label>
              <textarea 
                rows="5"
                name="message"
                required
                placeholder="Tell me about your travel plans..."
                className="w-full bg-white/5 border border-white/5 rounded-3xl px-6 py-5 text-white placeholder:text-text-muted/30 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all resize-none font-medium"
              />
            </div>

            <button 
              type="submit"
              className="w-full py-6 bg-primary text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3"
            >
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </form>
        </section>

        {/* Info & Socials */}
        <div className="space-y-16">
          <section className="space-y-8">
             <h3 className="text-2xl font-black flex items-center gap-3">
                <Globe className="w-6 h-6 text-primary" />
                Connectivity
             </h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <SocialCard 
                   href="https://www.youtube.com/@thetravelingprince4" 
                   icon={<Youtube className="w-5 h-5" />} 
                   label="YouTube" 
                   value="@thetravelingprince4" 
                />
                <SocialCard 
                   href="https://www.instagram.com/thetravelingprince04/" 
                   icon={<Instagram className="w-5 h-5" />} 
                   label="Instagram" 
                   value="@thetravelingprince04" 
                />
                <SocialCard 
                   href="https://www.facebook.com/Thetravelingprince04/" 
                   icon={<Facebook className="w-5 h-5" />} 
                   label="Facebook" 
                   value="travelingprince04" 
                />
                <SocialCard 
                   href="#" 
                   icon={<Mail className="w-5 h-5" />} 
                   label="Email" 
                   value="thetravelingprince4@gmail.com" 
                />
             </div>
          </section>

          <section className="space-y-8">
             <h3 className="text-2xl font-black flex items-center gap-3">
                <Handshake className="w-6 h-6 text-emerald-500" />
                Work With Me
             </h3>
             <div className="glass p-8 rounded-[2.5rem] border-white/5 space-y-6">
                <p className="text-text-muted leading-relaxed text-sm">
                   I am open to collaborations, sponsored trips, guest posts, and brand partnerships that align with authentic budget travel values.
                </p>
                <div className="flex flex-col gap-4">
                   <div className="flex items-center gap-4 text-xs font-bold text-white">
                      <Zap className="w-4 h-4 text-primary" />
                      Guest Post Opportunities
                   </div>
                   <div className="flex items-center gap-4 text-xs font-bold text-white">
                      <Zap className="w-4 h-4 text-primary" />
                      Destination Marketing
                   </div>
                   <div className="flex items-center gap-4 text-xs font-bold text-white">
                      <Zap className="w-4 h-4 text-primary" />
                      Itinerary Consultation
                   </div>
                </div>
             </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function SocialCard({ href, icon, label, value }) {
  return (
    <Link 
      href={href} 
      className="flex flex-col p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all group"
    >
      <div className="p-3 rounded-xl bg-white/5 w-fit mb-4 group-hover:bg-primary/20 group-hover:text-primary transition-all">
        {icon}
      </div>
      <div className="text-[10px] font-black uppercase tracking-widest text-text-muted mb-1">{label}</div>
      <div className="text-sm font-bold text-white group-hover:text-primary transition-colors">{value}</div>
    </Link>
  );
}
