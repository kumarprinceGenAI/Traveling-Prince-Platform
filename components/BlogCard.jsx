import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Sparkles, Tag } from "lucide-react";

/**
 * Refined Premium Blog Card Component
 * Dynamically extracts tags and titles from the backend 'topic' field.
 */
const BlogCard = ({ blog }) => {
  if (!blog) return null;

  // Format the date properly
  const dateStr = blog.created_at ? new Date(blog.created_at).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }) : "Apr 5, 2026";

  // Logic to split the topic into Tag and descriptive Title
  // Pattern: "Category/Tag: Full Descriptive Title (Details)"
  const fullTopic = blog.topic || "Untitled Adventure";
  const hasColon = fullTopic.includes(":");
  
  const extractedTag = hasColon ? fullTopic.split(":")[0].trim() : "Travel Journey";
  const extractedTitle = hasColon ? fullTopic.split(":").slice(1).join(":").trim() : fullTopic;

  // Use slug or fallback IDs
  const blogId = blog.slug || blog.blog_id || blog.id;

  return (
    <Link href={`/blog/${blogId}`} className="group block h-full">
      <div className="relative flex flex-col h-full glass border-white/5 rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:-translate-y-3 hover:border-primary/40 hover:shadow-[0_20px_80px_-20px_rgba(14,165,233,0.15)] shadow-2xl">
        
        {/* Top Accent Glow */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Floating Background Glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 blur-[80px] group-hover:bg-primary/10 transition-colors duration-700" />

        <div className="p-10 flex flex-col h-full relative z-10">
          {/* Metadata Row */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-text-muted/60">
              <span className="flex items-center gap-1.5 group-hover:text-primary transition-colors">
                <Calendar className="w-3.5 h-3.5" />
                {dateStr}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                5 min read
              </span>
            </div>
            <Sparkles className="w-4 h-4 text-primary/20 group-hover:text-primary/60 transition-colors duration-700" />
          </div>

          {/* Section 1: Extracted Tag / High-Level Category */}
          <div className="flex items-center gap-2 text-primary font-black text-xs uppercase tracking-[0.3em] mb-4">
             <Tag className="w-3 h-3" />
             {extractedTag}
          </div>

          {/* Section 2: Detailed Title / Description */}
          <h3 className="text-xl lg:text-2xl font-black mb-10 leading-[1.3] tracking-tight text-white group-hover:text-primary/90 transition-colors duration-500 line-clamp-4">
            {extractedTitle}
          </h3>
          
          {/* Action Footer */}
          <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between group-hover:border-primary/20 transition-colors">
            <div className="flex items-center gap-3 text-white font-black text-[10px] uppercase tracking-[0.3em] group-hover:gap-5 transition-all duration-500">
              <span className="relative">
                Read Full Story
                <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-700" />
              </span>
              <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
            </div>
            
            <div className="text-[10px] font-bold text-text-muted/20 uppercase tracking-widest hidden sm:block">
              EP. {blog.id || "01"}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
