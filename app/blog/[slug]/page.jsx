import React from "react";
import BlogContent from "@/components/BlogContent";
import Link from "next/link";
import { ArrowLeft, Share2, Facebook, Twitter, Ghost } from "lucide-react";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "https://travel-blog-generator.onrender.com";
  
  try {
    const res = await fetch(`${baseUrl}/blog/${slug}`, { cache: "no-store" });
    if (!res.ok) return { title: "Adventure Not Found | The Traveling Prince" };
    
    // The API returns RAW HTML with usually an <h1> at the top
    const html = await res.text();
    const titleMatch = html.match(/<h1>(.*?)<\/h1>/);
    const title = titleMatch ? titleMatch[1] : slug.split("-").join(" ");
    
    return {
      title: `${title} | The Traveling Prince`,
      description: `Read the full journal and itinerary for ${title}. Experience the raw adventures of The Traveling Prince.`,
    };
  } catch (e) {
    return { title: "Blog Journal | The Traveling Prince" };
  }
}

async function getBlogBySlug(slug) {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "https://travel-blog-generator.onrender.com";
  try {
    const res = await fetch(`${baseUrl}/blog/${slug}`, { cache: "no-store" });
    if (!res.ok) return null;
    
    // The single blog endpoint returns RAW HTML according to research
    const html = await res.text();
    if (html.includes("<!DOCTYPE html>") || html.includes("<html") || html.startsWith("<h1>")) {
      return html;
    }
    
    // If it's not HTML, try parsing as JSON just in case (fallback)
    try {
      const data = JSON.parse(html);
      return data.content || html;
    } catch {
      return html;
    }
  } catch (e) {
    console.error(`Failed to fetch blog ${slug}:`, e);
    return null;
  }
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blogHtml = await getBlogBySlug(slug);

  if (!blogHtml) {
    return (
      <div className="container mx-auto px-6 py-32 flex flex-col items-center text-center">
        <Ghost className="w-16 h-16 text-primary/20 mb-6 animate-bounce" />
        <h1 className="text-4xl font-black mb-4">Adventure Lost?</h1>
        <p className="text-text-muted text-lg mb-12 max-w-md">
          We couldn't find the story you're looking for. It might have been deleted or moved.
        </p>
        <Link 
          href="/blog" 
          className="px-8 py-3 bg-primary text-white rounded-full font-bold hover:scale-105 transition-transform"
        >
          Return to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="relative pt-32">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Navigation Bar */}
        <div className="flex items-center justify-between mb-20 max-w-4xl mx-auto border-b border-white/5 pb-8">
          <Link 
            href="/blog" 
            className="flex items-center gap-2 text-text-muted hover:text-white transition-colors group font-bold text-xs uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to journals
          </Link>

          <div className="flex items-center gap-6">
            <button className="text-text-muted hover:text-primary transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="text-text-muted hover:text-blue-500 transition-colors">
              <Twitter className="w-5 h-5" />
            </button>
            <button className="text-text-muted hover:text-blue-600 transition-colors">
               <Facebook className="w-5 h-5" />
            </button>
          </div>
        </div>

        <BlogContent htmlContent={blogHtml} />
      </div>
    </div>
  );
}
