import React from "react";
import { Youtube, Play, Calendar, Share2, ArrowRight, Video, Compass } from "lucide-react";
import Link from "next/link";

// Using the public RSS feed for YouTube channels (no API Key required for basic list)
// Channel ID for @thetravelingprince4: UCj-3eEZyiTOuW8n2tB6DY4Q
async function getVlogs() {
  const channelId = "UCj-3eEZyiTOuW8n2tB6DY4Q";
  const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
  
  try {
    const res = await fetch(rssUrl, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    
    const xml = await res.text();
    
    // Simple manual parsing for RSS entry fields (since we want to avoid extra dependencies)
    const entries = xml.split("<entry>").slice(1);
    
    return entries.map(entry => {
      const videoId = entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/)?.[1];
      const title = entry.match(/<title>(.*?)<\/title>/)?.[1];
      const published = entry.match(/<published>(.*?)<\/published>/)?.[1];
      const thumbnail = entry.match(/<media:thumbnail url="(.*?)"/)?.[1];
      
      return {
        id: videoId,
        title: title || "Untitled Vlog",
        published: published ? new Date(published).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "",
        thumbnail: thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
        link: `https://www.youtube.com/watch?v=${videoId}`
      };
    }).filter(v => v.id);
  } catch (e) {
    console.error("Failed to fetch vlogs:", e);
    return [];
  }
}

export default async function VlogsPage() {
  const vlogs = await getVlogs();
  const featuredVlog = vlogs[0];
  const otherVlogs = vlogs.slice(1);

  return (
    <div className="bg-bg-dark min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Cinema Header */}
        <header className="mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF0000]/10 border border-[#FF0000]/20 text-[#FF0000] text-[10px] font-black uppercase tracking-widest">
            <Youtube className="w-4 h-4" />
            Prince's Cinema
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
            Travel <span className="gradient-text">Vlogs.</span>
          </h1>
          <p className="text-text-muted text-xl max-w-2xl font-medium leading-relaxed">
            Experience the journey in 4K. From raw road trips to detailed budget guides, witness the subcontinent through my lens.
          </p>
        </header>

        {/* Featured Video: Theater Mode */}
        {featuredVlog && (
          <section className="mb-32">
            <div className="group relative rounded-[3rem] overflow-hidden glass border-white/10 shadow-2xl aspect-video lg:aspect-[21/9]">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-bg-dark via-transparent to-transparent opacity-80" />
              
              <img 
                src={featuredVlog.thumbnail} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                alt={featuredVlog.title}
              />
              
              {/* Play Button Overlay */}
              <a 
                href={featuredVlog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-20 flex items-center justify-center group/btn"
              >
                <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white group-hover/btn:scale-110 group-hover/btn:bg-primary transition-all duration-500 shadow-2xl">
                  <Play className="w-10 h-10 fill-current ml-1" />
                </div>
              </a>

              <div className="absolute bottom-10 left-10 right-10 z-30 space-y-4">
                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-primary">
                  <span>Latest Release</span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="text-white/60">{featuredVlog.published}</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter max-w-3xl leading-tight">
                  {featuredVlog.title}
                </h2>
              </div>
            </div>
          </section>
        )}

        {/* Video Grid */}
        <section className="mb-40">
          <div className="flex items-center gap-4 mb-16 px-2">
            <div className="p-3 bg-white/5 rounded-2xl"><Video className="w-6 h-6 text-primary" /></div>
            <div>
               <h3 className="text-2xl font-black text-white tracking-tight">Recent Uploads</h3>
               <p className="text-[10px] font-black uppercase tracking-widest text-text-muted mt-1">Updated in real-time from YouTube</p>
            </div>
            <div className="h-px flex-grow bg-white/5 ml-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {otherVlogs.map((vlog) => (
              <div key={vlog.id} className="group space-y-6">
                <div className="relative aspect-video rounded-3xl overflow-hidden glass border-white/5 shadow-lg group-hover:shadow-primary/5 transition-all duration-500">
                  <img src={vlog.thumbnail} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={vlog.title} />
                  <div className="absolute inset-0 bg-bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <a 
                      href={vlog.link}
                      target="_blank"
                      className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-xl scale-90 group-hover:scale-100 transition-all duration-500"
                    >
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </a>
                  </div>
                </div>

                <div className="space-y-3 px-2">
                  <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-text-muted/60">
                    <span className="flex items-center gap-2"><Calendar className="w-3 h-3" /> {vlog.published}</span>
                    <Share2 className="w-3 h-3 hover:text-primary cursor-pointer transition-colors" />
                  </div>
                  <h4 className="text-lg font-bold text-white line-clamp-2 leading-tight group-hover:text-primary transition-colors">
                    {vlog.title}
                  </h4>
                  <a 
                    href={vlog.link}
                    target="_blank"
                    className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary group-hover:gap-3 transition-all"
                  >
                    Watch Now <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Curated Playlists Section */}
        <section className="mb-40">
          <div className="flex items-center gap-4 mb-16 px-2">
            <div className="p-3 bg-white/5 rounded-2xl"><Compass className="w-6 h-6 text-emerald-500" /></div>
            <div>
               <h3 className="text-2xl font-black text-white tracking-tight">Curated Series</h3>
               <p className="text-[10px] font-black uppercase tracking-widest text-text-muted mt-1">Full journey collections</p>
            </div>
            <div className="h-px flex-grow bg-white/5 ml-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Sacred Temples of India", id: "PLjadt0liAJFN-BVNp5w6DeEiUH2GY97bd", count: "15+ Videos", color: "from-amber-600/20" },
              { name: "Uttrakhand Char Dham Yatra", id: "PLjadt0liAJFMTImiBLlxU21F9-ase8OIO", count: "10+ Videos", color: "from-blue-600/20" },
              { name: "12 Jyotirlinga Darshan Yatra", id: "PLjadt0liAJFN-O2y3veeeiUDqqrMryw_E", count: "12+ Videos", color: "from-emerald-600/20" },
              { name: "City Tours of India", id: "PLjadt0liAJFOqnGNFH_KzJzD8oPk4veyE", count: "20+ Videos", color: "from-purple-600/20" },
            ].map((playlist) => (
              <a 
                key={playlist.id}
                href={`https://www.youtube.com/playlist?list=${playlist.id}`}
                target="_blank"
                className={`group relative overflow-hidden glass rounded-[2.5rem] border-white/5 p-8 flex items-center justify-between hover:border-white/20 transition-all duration-500 bg-gradient-to-r ${playlist.color} to-transparent`}
              >
                <div className="space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">{playlist.count}</span>
                  <h4 className="text-2xl font-black text-white group-hover:text-primary transition-colors leading-tight">
                    {playlist.name}
                  </h4>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary">
                    Open Series <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
                <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:rotate-12 transition-transform shadow-2xl">
                   <Youtube className="w-10 h-10 text-white/20 group-hover:text-[#FF0000] transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-40 p-12 lg:p-20 glass rounded-[4rem] border-[#FF0000]/20 bg-[#FF0000]/5 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF0000]/10 blur-[120px] pointer-events-none" />
          <Youtube className="w-20 h-20 text-[#FF0000] mx-auto mb-8 animate-bounce-slow" />
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Join the Adventure <br /> on YouTube.</h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto mb-12 font-medium">
            Over 200+ stories documenting the hidden corners of India. Subscribe for weekly updates from the road.
          </p>
          <a 
            href="https://www.youtube.com/@thetravelingprince4?sub_confirmation=1"
            className="inline-flex items-center gap-4 px-12 py-6 bg-[#FF0000] text-white rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-[#FF0000]/20"
          >
            Subscribe Now
            <Youtube className="w-5 h-5 font-black uppercase tracking-widest" />
          </a>
        </section>
      </div>
    </div>
  );
}
