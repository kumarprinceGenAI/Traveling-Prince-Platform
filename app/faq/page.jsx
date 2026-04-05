import React from "react";
import { HelpCircle, ChevronRight, MapPin, Compass, ShieldCheck, CreditCard, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "Who is the 'Traveling Prince'?",
    answer: "Kumar Prince is a Marine Engineer and tech professional who has spent the last decade exploring the Indian subcontinent and beyond. The 'Traveling Prince' brand represents a journey of discovery, sharing raw, budget-friendly itineraries and hidden gems.",
    icon: <Compass className="w-5 h-5" />
  },
  {
    question: "Are these travel stories and itineraries real?",
    answer: "Yes. Every blog post is based on actual journeys undertaken by Kumar Prince. While AI helps curate and present the data as a clean distribution platform, the 'boots on the ground' experience is 100% authentic.",
    icon: <ShieldCheck className="w-5 h-5" />
  },
  {
    question: "How can I follow the budget itineraries mentioned?",
    answer: "Each blog post includes a detailed day-by-day breakdown. We recommend cross-referencing our tips with current local transport schedules and booking budget stays via reputable platforms mentioned in the guides.",
    icon: <MapPin className="w-5 h-5" />
  },
  {
    question: "Do you offer personalized travel consulting?",
    answer: "Currently, we provide all our guides for free to build the community. For specific collaborations or detailed route planning, you can reach out via our 'Contact Us' page.",
    icon: <MessageCircle className="w-5 h-5" />
  },
  {
    question: "Is there a cost to accessing these journals?",
    answer: "No. This is a public content distribution platform. Our goal is to make high-quality travel information accessible to everyone chasing their own horizons.",
    icon: <CreditCard className="w-5 h-5" />
  }
];

export default function FAQPage() {
  return (
    <div className="container mx-auto px-6 pt-32 pb-24 max-w-4xl">
      <header className="mb-20 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest">
          <HelpCircle className="w-3.5 h-3.5" />
          Common Inquiries
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
          Frequently Asked <span className="gradient-text">Questions.</span>
        </h1>
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          Everything you need to know about the journey, the itineraries, and the platform.
        </p>
      </header>

      <div className="space-y-6">
        {faqs.map((faq, idx) => (
          <div 
            key={idx} 
            className="glass p-8 rounded-[2rem] border-white/5 hover:border-primary/20 transition-all duration-500 group"
          >
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-2xl bg-white/5 text-primary group-hover:scale-110 transition-transform">
                {faq.icon}
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors flex items-center gap-2">
                  {faq.question}
                  <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="text-text-muted leading-relaxed font-medium">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 p-12 glass rounded-[3rem] border-primary/20 bg-primary/5 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] pointer-events-none" />
        <h3 className="text-2xl font-black mb-4">Still have questions?</h3>
        <p className="text-text-muted mb-8 italic">"The best stories are found between the pages of a passport."</p>
        <a 
          href="/contact" 
          className="inline-flex items-center gap-3 px-10 py-5 bg-white text-bg-dark rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-white/5"
        >
          Send a Message
        </a>
      </div>
    </div>
  );
}
