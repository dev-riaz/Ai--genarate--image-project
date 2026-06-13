import TopGenerations from "@/components/TopGenerations";

export default function AIArtBanner() {
  return (
    <>
      <section className="relative w-full min-h-[320px] md:min-h-[400px] flex items-center overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 via-green-700 to-green-800" />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-black/5" />

        {/* Decorative flower circles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Left side */}
          <div className="absolute top-6 left-8 w-14 h-14 rounded-full bg-pink-500 opacity-70" />
          <div className="absolute top-12 left-16 w-9 h-9 rounded-full bg-orange-400 opacity-60" />
          <div className="absolute top-20 left-5 w-7 h-7 rounded-full bg-red-400 opacity-50" />
          <div className="absolute bottom-10 left-6 w-10 h-10 rounded-full bg-orange-400 opacity-55" />
          <div className="absolute bottom-6 left-14 w-6 h-6 rounded-full bg-pink-400 opacity-50" />
          {/* Right side */}
          <div className="absolute top-4 right-20 w-12 h-12 rounded-full bg-pink-500 opacity-70" />
          <div className="absolute top-10 right-12 w-8 h-8 rounded-full bg-orange-400 opacity-60" />
          <div className="absolute bottom-8 right-10 w-10 h-10 rounded-full bg-pink-500 opacity-65" />
          <div className="absolute bottom-4 right-20 w-6 h-6 rounded-full bg-red-400 opacity-50" />
        </div>

        {/* Swing illustration */}
        <div className="absolute right-[8%] top-1/2 -translate-y-1/2 hidden md:block pointer-events-none">
          <svg width="160" height="220" viewBox="0 0 160 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Ropes */}
            <line x1="55" y1="0" x2="55" y2="110" stroke="#c8a96e" strokeWidth="3" opacity="0.9" />
            <line x1="105" y1="0" x2="105" y2="110" stroke="#c8a96e" strokeWidth="3" opacity="0.9" />
            {/* Seat */}
            <rect x="38" y="108" width="84" height="16" rx="5" fill="#a0724a" />
            {/* Legs */}
            <rect x="34" y="122" width="5" height="38" rx="2" fill="#7a5230" />
            <rect x="121" y="122" width="5" height="38" rx="2" fill="#7a5230" />
            {/* Bottom bar */}
            <rect x="34" y="154" width="92" height="8" rx="4" fill="#8B5E3C" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 px-10 py-12 md:px-16 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-4">
            Turn Ideas into Stunning AI Art
          </h1>
          <p className="text-white/85 text-base md:text-lg mb-8 font-normal">
            Generate high-quality images from simple text prompts.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-7 py-3 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold text-sm shadow-lg shadow-pink-500/30 hover:opacity-90 transition-opacity">
              Generate Now
            </button>
            <button className="px-7 py-3 rounded-full border-2 border-white/70 text-white font-medium text-sm hover:bg-white/10 transition-colors">
              View Pricing
            </button>
          </div>
        </div>
      </section>
      <TopGenerations></TopGenerations>
    </>
  );
}