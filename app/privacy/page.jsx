import React from "react";
import { Lock, ShieldCheck, Eye, Database, Globe, Mail } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-6 pt-32 pb-24 max-w-4xl">
      <header className="mb-20 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-black uppercase tracking-widest">
          <ShieldCheck className="w-3.5 h-3.5" />
          Trust Verified
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
          Privacy <span className="gradient-text">Policy.</span>
        </h1>
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          Last updated: April 2025. Your data is your own, and your privacy is our priority.
        </p>
      </header>

      <div className="glass p-8 md:p-16 rounded-[3rem] border-white/5 space-y-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[120px] pointer-events-none" />
        
        <section className="space-y-6">
          <div className="flex items-center gap-4 text-white">
            <div className="p-3 bg-white/5 rounded-xl"><Lock className="w-5 h-5 text-emerald-500" /></div>
            <h2 className="text-2xl font-black tracking-tight">Data Collection</h2>
          </div>
          <p className="text-text-muted leading-relaxed font-medium">
            We collect minimal personal data. This typically includes information you voluntarily provide via our <strong>Contact Form</strong> (Name and Email) to facilitate communication. We do not sell or trade this information to third parties.
          </p>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-4 text-white">
            <div className="p-3 bg-white/5 rounded-xl"><Eye className="w-5 h-5 text-emerald-500" /></div>
            <h2 className="text-2xl font-black tracking-tight">Usage Information</h2>
          </div>
          <p className="text-text-muted leading-relaxed font-medium">
            Our platform uses standard server logs and analytical tools to understand how our users interact with the journals. This data is anonymized and used exclusively to improve the content distribution experience.
          </p>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-4 text-white">
            <div className="p-3 bg-white/5 rounded-xl"><Database className="w-5 h-5 text-emerald-500" /></div>
            <h2 className="text-2xl font-black tracking-tight">Cookies</h2>
          </div>
          <p className="text-text-muted leading-relaxed font-medium">
            We use small data files (cookies) to enhance your browsing experience. You can manage cookie preferences via your browser settings at any time.
          </p>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-4 text-white">
            <div className="p-3 bg-white/5 rounded-xl"><Globe className="w-5 h-5 text-emerald-500" /></div>
            <h2 className="text-2xl font-black tracking-tight">Third-Party Links</h2>
          </div>
          <p className="text-text-muted leading-relaxed font-medium">
            Our journals contain links to external sites (like YouTube and Instagram). We are not responsible for the privacy practices of these external platforms.
          </p>
        </section>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row gap-8 justify-between items-center bg-white/5 -mx-8 md:-mx-16 px-8 md:px-16 pb-0 rounded-b-[3rem]">
          <div className="space-y-2">
            <h4 className="text-white font-bold">Questions?</h4>
            <p className="text-text-muted text-sm pb-8">If you have concerns about your privacy, reach out to us directly.</p>
          </div>
          <a href="/contact" className="flex items-center gap-3 px-8 py-4 bg-emerald-500 text-white rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-emerald-500/20 mb-8">
            <Mail className="w-4 h-4" />
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}
