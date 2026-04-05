import React from "react";
import { Gavel, CheckCircle2, ShieldCheck, FileText, AlertTriangle, Scale } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-6 pt-32 pb-24 max-w-4xl">
      <header className="mb-20 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-black uppercase tracking-widest">
          <Gavel className="w-3.5 h-3.5" />
          Standard Terms
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
          Terms of <span className="gradient-text">Service.</span>
        </h1>
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          Last updated: April 2025. Defining the journey and the rules of the road.
        </p>
      </header>

      <div className="glass p-8 md:p-16 rounded-[3rem] border-white/5 space-y-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 blur-[120px] pointer-events-none" />

        <section className="space-y-6">
          <div className="flex items-center gap-4 text-white">
            <div className="p-3 bg-white/5 rounded-xl"><FileText className="w-5 h-5 text-blue-500" /></div>
            <h2 className="text-2xl font-black tracking-tight">1. Acceptance</h2>
          </div>
          <p className="text-text-muted leading-relaxed font-medium">
            By accessing 'The Traveling Prince', you agree to these terms. This platform is a content distribution engine designed to share travel journals and itineraries.
          </p>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-4 text-white">
            <div className="p-3 bg-white/5 rounded-xl"><CheckCircle2 className="w-5 h-5 text-blue-500" /></div>
            <h2 className="text-2xl font-black tracking-tight">2. Content Usage</h2>
          </div>
          <p className="text-text-muted leading-relaxed font-medium">
            All itineraries, images, and text content are the intellectual property of <strong>The Traveling Prince</strong>. You may use this information for personal travel purposes but cannot reproduce or republish it for commercial use without express written consent.
          </p>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-4 text-white">
            <div className="p-3 bg-white/5 rounded-xl"><AlertTriangle className="w-5 h-5 text-blue-500" /></div>
            <h2 className="text-2xl font-black tracking-tight">3. Disclaimer</h2>
          </div>
          <p className="text-text-muted leading-relaxed font-medium italic bg-white/5 p-6 rounded-2xl border-l-4 border-blue-500">
            Travel involves inherent risks. The itineraries provided are for informational purposes based on actual past experiences. We are not liable for any changes in local transit, closures, or incidents that may occur during your own travels.
          </p>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-4 text-white">
            <div className="p-3 bg-white/5 rounded-xl"><Scale className="w-5 h-5 text-blue-500" /></div>
            <h2 className="text-2xl font-black tracking-tight">4. Modifications</h2>
          </div>
          <p className="text-text-muted leading-relaxed font-medium">
            We reserve the right to modify these terms or the content of the journals at any time to ensure the information remains current and relevant.
          </p>
        </section>

        <div className="pt-12 text-center text-text-muted/40 text-[10px] font-black uppercase tracking-widest border-t border-white/5">
          "Explorer's Honor System applies to all our journals."
        </div>
      </div>
    </div>
  );
}
