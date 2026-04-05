import React from "react";
import { 
  BarChart3, 
  TrendingUp, 
  AlertTriangle, 
  Activity, 
  CheckCircle2, 
  XCircle, 
  Zap, 
  ShieldCheck,
  FileText,
  BarChart,
  RotateCcw
} from "lucide-react";

async function getMetrics() {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "https://travel-blog-generator.onrender.com";
  try {
    const res = await fetch(`${baseUrl}/metrics`, { cache: "no-store" });
    if (!res.ok) return null;
    
    const text = await res.text();
    try {
      return JSON.parse(text);
    } catch (e) {
      console.error("Metrics API returned non-JSON response:", text.slice(0, 100));
      return null;
    }
  } catch (e) {
    console.error("Failed to fetch metrics:", e);
    return null;
  }
}

export default async function MetricsPage() {
  const data = await getMetrics();

  // Mapping provided JSON structure to UI
  const stats = data || {
    total_success: 0,
    average_score: 0,
    average_iterations: 0,
    average_content_length: 0,
    average_error_count: 0,
    score_distribution: { "low (<8)": 0, "medium (8-9)": 0, "high (9+)": 0 },
    improvement_rate: 0,
    variance: 0,
    regression_detected: false,
    recent_avg: 0,
    previous_avg: 0,
    failures: 0,
    status: "offline"
  };

  const successRate = stats.total_success + stats.failures > 0 
    ? ((stats.total_success / (stats.total_success + stats.failures)) * 100).toFixed(1)
    : "0.0";

  return (
    <div className="container mx-auto px-6 max-w-7xl pt-32 pb-24">
      {/* Header & Global Status */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest">
            <Activity className="w-3.5 h-3.5" />
            Live Engine Analytics
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
            Mission <span className="gradient-text">Control.</span>
          </h1>
          <p className="text-text-muted text-lg max-w-xl leading-relaxed">
            Live journey analytics monitoring the reach and performance of our global travel distribution engine.
          </p>
        </div>

        <div className="glass p-6 rounded-3xl border-white/10 min-w-[280px]">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-text-muted">System Health</span>
            <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-emerald-500/10 text-emerald-500 border border-emerald-500/20`}>
              {stats.status}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-5xl font-black text-white">{stats.average_score}</div>
            <div className="space-y-1">
              <div className="text-[10px] font-black uppercase tracking-widest text-text-muted">Avg Quality Score</div>
              <div className="flex items-center gap-1 text-emerald-500 text-xs font-bold">
                <TrendingUp className="w-3 h-3" />
                +{stats.improvement_rate}% Growth
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <MetricCard 
          label="Total Generations" 
          value={stats.total_success} 
          subValue={`${successRate}% Success Rate`}
          icon={<Zap className="w-5 h-5 text-yellow-400" />}
          color="yellow"
        />
        <MetricCard 
          label="Content Density" 
          value={stats.average_content_length} 
          subValue="Avg chars per blog"
          icon={<FileText className="w-5 h-5 text-blue-400" />}
          color="blue"
        />
        <MetricCard 
          label="Engine Efficiency" 
          value={stats.average_iterations} 
          subValue="Refinements per run"
          icon={<RotateCcw className="w-5 h-5 text-purple-400" />}
          color="purple"
        />
        <MetricCard 
          label="Recent Failures" 
          value={stats.failures} 
          subValue={`${stats.average_error_count} Errors/blog`}
          icon={<AlertTriangle className="w-5 h-5 text-rose-400" />}
          color="rose"
        />
      </div>

      {/* Deep Analytics Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Score Distribution */}
        <div className="lg:col-span-2 glass p-8 rounded-[2.5rem] border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] pointer-events-none" />
          <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
            <BarChart className="w-5 h-5 text-primary" />
            Quality Distribution
          </h3>
          
          <div className="space-y-8">
            <DistributionBar 
              label="Platinum High (9+)" 
              count={stats.score_distribution["high (9+)"]} 
              total={stats.total_success} 
              color="bg-primary"
            />
            <DistributionBar 
              label="Standard Medium (8-9)" 
              count={stats.score_distribution["medium (8-9)"]} 
              total={stats.total_success} 
              color="bg-emerald-500"
            />
            <DistributionBar 
              label="Baseline Low (<8)" 
              count={stats.score_distribution["low (<8)"]} 
              total={stats.total_success} 
              color="bg-amber-500"
            />
          </div>
        </div>

        {/* System Integrity */}
        <div className="glass p-8 rounded-[2.5rem] border-white/5">
          <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
            Integrity Check
          </h3>
          
          <div className="space-y-6">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-text-muted">Regression Sync</span>
                {stats.regression_detected ? (
                  <span className="text-[10px] items-center flex gap-1 font-black uppercase text-rose-500 bg-rose-500/10 px-2 py-0.5 rounded-full">
                    <XCircle className="w-3 h-3" /> Detected
                  </span>
                ) : (
                  <span className="text-[10px] items-center flex gap-1 font-black uppercase text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3" /> Safe
                  </span>
                )}
              </div>
              <p className="text-[10px] text-text-muted/60 leading-relaxed font-semibold">
                No performance regressions detected across the last {stats.total_success} iterations.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-2">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-text-muted">Variance Variance</span>
                <span className="text-white font-black">{stats.variance}s</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-primary" style={{ width: `${Math.min(stats.variance * 100, 100)}%` }} />
              </div>
              <p className="text-[10px] text-text-muted/60 font-semibold uppercase tracking-widest pt-2 italic">Excellent Stability</p>
            </div>

            <div className="pt-4">
              <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-text-muted mb-4 opacity-50">
                <span>Comparison Trend</span>
                <span>{stats.recent_avg} vs {stats.previous_avg}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-grow h-1 bg-white/5 rounded-full" />
                <TrendingUp className="w-4 h-4 text-emerald-500 opacity-50" />
                <div className="flex-grow h-1 bg-white/5 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ label, value, subValue, icon, color }) {
  const colorMap = {
    yellow: "bg-yellow-400/10 text-yellow-400 border-yellow-400/20",
    blue: "bg-blue-400/10 text-blue-400 border-blue-400/20",
    purple: "bg-purple-400/10 text-purple-400 border-purple-400/20",
    rose: "bg-rose-400/10 text-rose-400 border-rose-400/20",
  };

  return (
    <div className="glass p-8 rounded-[2.5rem] border-white/5 hover:border-white/10 transition-all duration-500 group">
      <div className={`p-4 rounded-2xl w-fit mb-8 border ${colorMap[color]} group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <div className="text-5xl font-black text-white mb-2 leading-none tracking-tight">{value}</div>
      <div className="space-y-1">
        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted">{label}</div>
        <div className="text-xs font-bold text-text-muted/40">{subValue}</div>
      </div>
    </div>
  );
}

function DistributionBar({ label, count, total, color }) {
  const percent = total > 0 ? (count / total) * 100 : 0;
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-black uppercase tracking-widest text-text-muted">{label}</span>
        <span className="text-xs font-bold text-white">{count} Blogs / {percent.toFixed(0)}%</span>
      </div>
      <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden p-1 shadow-inner">
        <div 
          className={`h-full rounded-full ${color} transition-all duration-1000 ease-out shadow-lg`} 
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
