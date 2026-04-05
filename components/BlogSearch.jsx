"use client";

import React, { useState, useMemo } from "react";
import BlogCard from "./BlogCard";
import { Search, ChevronLeft, ChevronRight, Filter, Compass } from "lucide-react";

export default function BlogSearch({ blogs }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Real-time filtering logic
  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const title = (blog.topic || "").toLowerCase();
      const content = (blog.content || "").toLowerCase();
      const query = searchQuery.toLowerCase();
      return title.includes(query) || content.includes(query);
    });
  }, [blogs, searchQuery]);

  // Pagination logic
  const totalItems = filteredBlogs.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedBlogs = filteredBlogs.slice(startIndex, startIndex + itemsPerPage);

  // Reset to first page on search
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const currentCount = Math.min(startIndex + itemsPerPage, totalItems);

  return (
    <div className="space-y-12">
      {/* Premium Search Hub */}
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-16 px-2">
        <div className="relative w-full max-w-xl group">
          <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted group-focus-within:text-primary transition-colors" />
          <input 
            type="text"
            placeholder="Search journeys (e.g. 'Monsoon', 'Budget', 'Goa')..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full bg-white/5 border border-white/10 rounded-full pl-16 pr-8 py-5 text-white placeholder:text-text-muted/40 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all font-medium"
          />
        </div>
        
        <div className="flex items-center gap-4 text-text-muted text-[10px] font-black uppercase tracking-[0.3em]">
          <Filter className="w-4 h-4 text-primary" />
          <span>Showing {totalItems > 0 ? startIndex + 1 : 0}–{currentCount} of {totalItems}journals</span>
        </div>
      </div>

      {/* Results Grid */}
      {paginatedBlogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {paginatedBlogs.map((blog) => (
            <BlogCard key={blog.slug || blog.blog_id || blog.id} blog={blog} />
          ))}
        </div>
      ) : (
        <div className="text-center py-32 glass rounded-[3rem] border-dashed border-white/10">
          <Compass className="w-20 h-20 text-primary/10 mx-auto mb-8 animate-spin-slow" />
          <h3 className="text-3xl font-black mb-4 tracking-tighter">The path is clear.</h3>
          <p className="text-text-muted font-medium">No adventures found matching "{searchQuery}". Try a different route.</p>
        </div>
      )}

      {/* Modern Pagination Controls */}
      {totalPages > 1 && (
        <div className="pt-16 flex flex-col items-center gap-8 border-t border-white/5">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="p-4 rounded-2xl bg-white/5 border border-white/5 text-white disabled:opacity-20 disabled:cursor-not-allowed hover:bg-white/10 transition-all group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            </button>
            
            <div className="flex items-center gap-2">
              {[...Array(totalPages)].map((_, i) => {
                const pg = i + 1;
                // Only show a limited number of page numbers if too many
                if (totalPages > 5 && Math.abs(pg - currentPage) > 1 && pg !== 1 && pg !== totalPages) {
                   if (pg === 2 || pg === totalPages - 1) return <span key={pg} className="text-text-muted/20 px-2 font-bold">...</span>;
                   return null;
                }
                return (
                  <button
                    key={pg}
                    onClick={() => setCurrentPage(pg)}
                    className={`w-12 h-12 rounded-xl text-xs font-black transition-all ${
                      currentPage === pg 
                      ? "bg-primary text-white shadow-lg shadow-primary/20 scale-110" 
                      : "bg-white/5 text-text-muted hover:bg-white/10"
                    }`}
                  >
                    {pg}
                  </button>
                )
              })}
            </div>

            <button 
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="p-4 rounded-2xl bg-white/5 border border-white/5 text-white disabled:opacity-20 disabled:cursor-not-allowed hover:bg-white/10 transition-all group"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="text-[10px] font-black uppercase tracking-[0.4em] text-text-muted/40">
            Page {currentPage} of {totalPages}
          </div>
        </div>
      )}
    </div>
  );
}
