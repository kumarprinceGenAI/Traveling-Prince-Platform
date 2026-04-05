import React from "react";

const BlogContent = ({ htmlContent }) => {
  if (!htmlContent) return null;

  return (
    <article className="max-w-4xl mx-auto px-6">
      {/* 
        This component now strictly renders ONLY the HTML provided by the API.
        All titles, dates, and headers are expected to be inside the raw HTML.
      */}
      <div 
        className="prose prose-invert prose-orange max-w-none 
          prose-headings:font-black prose-headings:tracking-tighter prose-headings:text-white
          prose-h1:text-5xl md:prose-h1:text-7xl prose-h1:mb-12 prose-h1:leading-none
          prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:text-primary
          prose-p:text-text-muted prose-p:text-lg prose-p:leading-relaxed prose-p:mb-8
          prose-li:text-text-muted prose-li:text-lg
          prose-img:rounded-[2.5rem] prose-img:shadow-2xl
          prose-strong:text-white prose-strong:font-bold
          prose-a:text-primary prose-a:no-underline hover:prose-a:underline
          pb-24"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </article>
  );
};

export default BlogContent;
