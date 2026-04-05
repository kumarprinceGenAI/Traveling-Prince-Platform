import Loader from "@/components/Loader";

export default function Loading() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-12">
      <div className="w-full max-w-2xl h-12 bg-white/5 rounded-2xl animate-pulse mb-8" />
      <div className="w-full max-w-4xl h-96 bg-white/5 rounded-[2.5rem] animate-pulse" />
      <Loader text="Unfolding the story..." />
    </div>
  );
}
