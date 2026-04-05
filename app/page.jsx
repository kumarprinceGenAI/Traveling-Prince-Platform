import React from "react";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

async function getFeaturedBlogs() {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "https://travel-blog-generator.onrender.com";
  try {
    const res = await fetch(`${baseUrl}/blogs`, { cache: "no-store" });
    if (!res.ok) return [];
    
    const text = await res.text();
    try {
      const all = JSON.parse(text);
      // Take the first 3 blogs for the homepage
      return Array.isArray(all) ? all.slice(0, 3) : []; 
    } catch (e) {
      console.error("Blogs API returned non-JSON response:", text.slice(0, 100));
      return [];
    }
  } catch (e) {
    console.error("Failed to fetch featured blogs:", e);
    return [];
  }
}

export default async function Home() {
  const featuredBlogs = await getFeaturedBlogs();

  return (
    <div className="flex flex-col gap-0 pt-0">
      {/* 1. Original Hero */}
      <Hero />

      {/* 2. Featured Blogs Snippet */}
      <section className="py-24 bg-bg-dark border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-4">— Travel Journals</div>
              <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter">
                Latest from <span className="gradient-text">the Road.</span>
              </h2>
            </div>
            <Link 
              href="/blog" 
              className="px-8 py-3 bg-white/5 border border-white/10 rounded-full text-white font-bold hover:bg-white/10 hover:border-primary/30 transition-all flex items-center gap-2 whitespace-nowrap"
            >
              Explore Full Feed
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {featuredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredBlogs.map((blog) => (
                <BlogCard key={blog.slug || blog.blog_id || blog.id} blog={blog} />
              ))}
            </div>
          ) : (
            <div className="py-12 text-center glass rounded-3xl border-dashed border-white/10">
              <BookOpen className="w-12 h-12 text-primary/20 mx-auto mb-4" />
              <p className="text-text-muted">Start the journey by generating your first AI blog story.</p>
            </div>
          )}
        </div>
      </section>

      {/* 3. Original About Section */}
      <AboutSection />
    </div>
  );
}
