import React from "react";
import BlogCard from "@/components/BlogCard";
import { Sparkles, Compass, Youtube, Instagram, Facebook, Anchor, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import BlogSearch from "@/components/BlogSearch";

export const dynamic = "force-dynamic";

async function getAllBlogs() {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "https://travel-blog-generator.onrender.com";
  try {
    const res = await fetch(`${baseUrl}/blogs`, { cache: "no-store" });
    if (!res.ok) return [];
    
    const text = await res.text();
    try {
      const all = JSON.parse(text);
      return Array.isArray(all) ? all : [];
    } catch (e) {
      console.error("Blogs API returned non-JSON response:", text.slice(0, 100));
      return [];
    }
  } catch (e) {
    console.error("Failed to fetch blogs:", e);
    return [];
  }
}

export default async function BlogPage() {
  const allBlogs = await getAllBlogs();

  // Use the first blog in the list as the Featured/Latest blog
  const latestBlog = allBlogs.length > 0 ? allBlogs[0] : null;

  // Handle case where blog might use slug, blog_id or id
  const getSlug = (b) => b?.slug || b?.blog_id || b?.id;
  const latestBlogSlug = getSlug(latestBlog);
  
  // Filter out the featured blog from the grid
  const otherBlogs = latestBlogSlug 
    ? allBlogs.filter((b) => getSlug(b) !== latestBlogSlug)
    : allBlogs;

  return (
    <div className="container mx-auto px-6 pt-32 pb-24 max-w-7xl">
      {/* Header */}
      <header className="mb-16 border-b border-white/5 pb-10">
        <h1 className="text-5xl md:text-8xl font-black mb-4 tracking-tighter">
          Explorer's <span className="gradient-text">Journals.</span>
        </h1>
        <p className="text-text-muted text-lg max-w-2xl leading-relaxed font-medium">
          Where the road ends, the story begins. A decade of raw adventures, untold journals, and hidden itineraries across the subcontinent.
        </p>
      </header>

      {/* 60/40 Hero Section */}
      {latestBlog && (
        <section className="grid grid-cols-1 lg:grid-cols-10 gap-8 mb-32 items-stretch">
          
          {/* Left Column (60%): Featured Adventure */}
          <div className="lg:col-span-6 group relative flex flex-col justify-end min-h-[500px] rounded-[3rem] overflow-hidden glass border-white/10 shadow-2xl transition-all duration-700 hover:border-primary/30">
            {/* Visual background decoration */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/40 to-transparent z-10" />
            <div className="absolute top-0 right-0 w-full h-full bg-primary/5 blur-[120px] -z-0 opacity-50" />
            
            <div className="relative z-20 p-10 lg:p-14">
              <div className="flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-[0.4em] mb-6">
                <Sparkles className="w-4 h-4" />
                Featured Adventure
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-[1.1] tracking-tight group-hover:text-primary transition-colors line-clamp-3">
                {latestBlog.topic || "Untitled Story"}
              </h2>
              
              <p className="text-text-muted/80 text-lg leading-relaxed mb-10 line-clamp-2 max-w-xl font-medium">
                Dive into this 10-year journey highlights and detailed itinerary.
              </p>
              
              <Link 
                href={`/blog/${latestBlogSlug}`}
                className="flex items-center gap-3 text-white font-black text-xs uppercase tracking-[0.3em] bg-white/5 border border-white/10 w-fit px-10 py-5 rounded-full hover:bg-primary hover:border-primary transition-all active:scale-95 translate-y-0 group-hover:-translate-y-1"
              >
                Read Full Journal
                <Compass className="w-5 h-5 animate-spin-slow" />
              </Link>
            </div>
          </div>

          {/* Right Column (40%): About the Author */}
          <div className="lg:col-span-4 flex flex-col rounded-[3rem] glass border-white/10 p-10 relative overflow-hidden group hover:border-primary/20 transition-all duration-700 shadow-2xl">
            {/* Background Decorative Glow */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/10 blur-[100px] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white text-2xl font-black shadow-lg shadow-primary/20 shrink-0">
                    KP
                  </div>
                  
                  {/* Author Profile Image (Increased Size) */}
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl relative group-hover:scale-105 transition-all duration-700">
                    <img 
                      src="https://thetravelingprince.wuaze.com/wp-content/uploads/2025/04/aed79cfe-b498-469f-9c9e-89670f4154f8-1-scaled.jpg" 
                      alt="Kumar Prince"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </div>

                <h3 className="text-3xl font-black mb-4 tracking-tighter">Kumar <span className="text-primary">Prince.</span></h3>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold text-text-muted/60 uppercase tracking-widest mb-8">
                  <Anchor className="w-3.5 h-3.5" />
                  Engineer & Explorer
                </div>

                <p className="text-text-muted leading-relaxed font-medium mb-12">
                  Marine Engineer turned Traveler. Documenting a decade of chasing horizons and 
                  <span className="text-white"> mapping the unseen </span> across the subcontinent. 
                  Real stories, raw budgets, and high-impact itineraries.
                </p>
              </div>

              {/* Social Connections */}
              <div className="space-y-4">
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-text-muted/40 mb-6">Connect Journey</div>
                <div className="flex flex-wrap gap-4">
                  {[
                    { icon: <Youtube />, href: "https://www.youtube.com/@thetravelingprince4", color: "hover:text-[#FF0000]" },
                    { icon: <Instagram />, href: "https://www.instagram.com/thetravelingprince04/", color: "hover:text-[#E1306C]" },
                    { icon: <Facebook />, href: "https://www.facebook.com/kumar.princu.5", color: "hover:text-[#1877F2]" }
                  ].map((social, i) => (
                    <Link 
                      key={i}
                      href={social.href}
                      className={`p-4 rounded-2xl bg-white/5 border border-white/5 text-text-muted transition-all duration-500 hover:scale-110 hover:bg-white/10 ${social.color} hover:border-current`}
                    >
                      {React.cloneElement(social.icon, { className: "w-5 h-5" })}
                    </Link>
                  ))}
                  <Link 
                    href="/about" 
                    className="flex-grow flex items-center justify-between p-4 px-6 rounded-2xl bg-primary text-white font-black text-[10px] uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary/20"
                  >
                    View Full Bio
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </section>
      )}

      {/* Story Archives (Search & Pagination) */}
      <section>
        <div className="flex items-center gap-4 mb-20">
          <div className="h-px flex-grow bg-white/10" />
          <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-text-muted px-6">Journey Archives</h3>
          <div className="h-px flex-grow bg-white/10" />
        </div>

        <BlogSearch blogs={otherBlogs} />
      </section>
    </div>
  );
}
