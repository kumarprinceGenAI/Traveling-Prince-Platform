"use client";

import React, { useEffect } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Global Error Caught:", error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center">
      <div className="p-4 rounded-full bg-red-400/10 mb-8 border border-red-400/20">
        <AlertTriangle className="w-12 h-12 text-red-500" />
      </div>

      <h1 className="text-4xl font-black mb-4 tracking-tight">Something went wrong!</h1>
      <p className="text-text-muted text-lg max-w-md mb-12">
        We encountered an unexpected error while exploring. This might be due to a connectivity issue with the backend.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={() => reset()}
          className="flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full font-bold hover:scale-105 transition-transform"
        >
          <RefreshCw className="w-4 h-4" />
          Try Again
        </button>

        <Link
          href="/"
          className="flex items-center gap-2 px-8 py-3 bg-white/5 border border-white/10 text-white rounded-full font-bold hover:bg-white/10 transition-all"
        >
          <Home className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
      
      <div className="mt-12 p-4 glass rounded-xl text-[10px] uppercase tracking-widest text-text-muted font-bold opacity-50 max-w-xs">
        Technical Details: {error?.message || "Unknown Error"}
      </div>
    </div>
  );
}
