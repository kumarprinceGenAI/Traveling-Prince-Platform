import React from "react";
import { 
  Anchor, 
  MapPin, 
  Award, 
  Milestone, 
  CheckCircle2, 
  Youtube, 
  Instagram, 
  Facebook, 
  ArrowRight,
  TrendingUp,
  ShieldCheck
} from "lucide-react";
import Link from "next/link";

const milestones = [
  { 
    title: "12 Jyotirlinga Yatra", 
    desc: "A massive spiritual journey across India, completing 9 Jyotirlingas in a single 2024 trip.", 
    icon: <ShieldCheck className="w-6 h-6" /> 
  },
  { 
    title: "Kedarnath & Yamunotri", 
    desc: "Challenging treks to the sacred peaks of Uttarakhand.", 
    icon: <Milestone className="w-6 h-6" /> 
  },
  { 
    title: "India Char Dham", 
    desc: "Visited Rameshwaram, Dwarka, Puri, and Badrinath — the four cardinal corners of Indian spirituality.", 
    icon: <Award className="w-6 h-6" /> 
  },
  { 
    title: "Vasudhara Falls", 
    desc: "Expedition to the mystical falls near Badrinath on the Indo-China border.", 
    icon: <MapPin className="w-6 h-6" /> 
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 pt-32 pb-24 max-w-7xl">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center gap-16 mb-32">
        <div className="lg:w-1/2 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest">
            <Anchor className="w-3.5 h-3.5" />
            The Traveler's Bio
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">
            Meet the <span className="gradient-text">Prince.</span>
          </h1>
          <p className="text-xl text-text-muted leading-relaxed max-w-xl">
            A Marine Engineer by education and a Software Professional by trade, but a 
            <span className="text-white font-bold"> traveler by soul.</span> I’ve traded the corporate 
            binary for the vibrant colors of the world.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link 
              href="https://www.youtube.com/@thetravelingprince4" 
              className="flex items-center gap-3 px-8 py-4 bg-[#FF0000]/10 border border-[#FF0000]/20 rounded-2xl text-[#FF0000] font-bold hover:bg-[#FF0000]/20 transition-all group"
            >
              <Youtube className="w-5 h-5 group-hover:scale-110" />
              YouTube Channel
            </Link>
            <Link 
              href="https://www.instagram.com/thetravelingprince04/" 
              className="flex items-center gap-3 px-8 py-4 bg-[#E1306C]/10 border border-[#E1306C]/20 rounded-2xl text-[#E1306C] font-bold hover:bg-[#E1306C]/20 transition-all group"
            >
              <Instagram className="w-5 h-5 group-hover:scale-110" />
              Instagram
            </Link>
          </div>
        </div>

        <div className="lg:w-1/2 relative">
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden glass border-white/5 relative z-10 p-4">
             <div className="w-full h-full rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-primary/5 to-bg-dark flex items-center justify-center border border-white/5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://thetravelingprince.wuaze.com/wp-content/uploads/2025/04/IMG_20240926_120825706-scaled.jpg')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-110 opacity-70" />
                <div className="relative z-20 text-center">
                   <div className="text-white/20 text-8xl font-black mb-4">KP</div>
                   <div className="px-6 py-2 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-full text-xs font-black uppercase tracking-[0.3em]">Kumar Prince</div>
                </div>
             </div>
          </div>
          {/* Decoration */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/20 blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary/10 blur-[100px] pointer-events-none" />
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="mb-32">
        <div className="glass p-12 lg:p-20 rounded-[3rem] border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] pointer-events-none" />
          <div className="max-w-4xl space-y-12 relative z-10">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-black tracking-tight leading-tight">
                Travel isn't a luxury. <br />
                <span className="text-primary italic">It's a perspective.</span>
              </h2>
              <p className="text-lg text-text-muted leading-relaxed">
                I believe that exploring the world shouldn’t cost a fortune. My mission is to help you experience the planet's hidden wonders through firsthand, experience-based advice on a <span className="text-white font-bold">shoestring budget.</span>
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              <div className="flex gap-6 items-start">
                <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 text-primary">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Budget Mindset</h4>
                  <p className="text-text-muted text-sm leading-relaxed">Optimizing costs without sacrificing the authenticity of the experience.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Authentic Insights</h4>
                  <p className="text-text-muted text-sm leading-relaxed">No generic lists. Every guide is born from actual boots on the ground.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestone Milestones */}
      <section className="mb-32">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-6xl font-black tracking-tighter">The <span className="gradient-text">Journey</span> Highlights.</h2>
          <p className="text-text-muted font-medium">Major landmarks in 10 years of worldwide exploration.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((ms, idx) => (
            <div key={idx} className="glass p-8 rounded-3xl border-white/5 hover:border-primary/30 transition-all duration-500 group">
              <div className="p-4 rounded-2xl bg-white/5 w-fit mb-8 group-hover:bg-primary/20 group-hover:text-primary transition-all duration-500">
                {ms.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{ms.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{ms.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center py-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 blur-[150px] -z-10" />
        <h2 className="text-4xl md:text-6xl font-black mb-12 flex flex-col items-center gap-4">
           Ready to start your journey?
           <div className="h-1 w-24 bg-primary rounded-full mt-4" />
        </h2>
        <Link 
          href="/contact" 
          className="inline-flex items-center gap-3 px-10 py-5 bg-white text-bg-dark rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/5"
        >
          Work With Me
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>
    </div>
  );
}
