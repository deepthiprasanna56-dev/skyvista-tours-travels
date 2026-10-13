import { Icon } from './Icons'

export function Hero({ onOpenBooking }) {
  return (
    <section id="home" className="relative min-h-[660px] lg:min-h-[760px] flex items-center bg-[#132621] text-white overflow-hidden w-full">
      {/* Background Media with Cinematic Parallax & Ambient Glowing Overlays */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 scale-100 hover:scale-105"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(14, 28, 24, 0.92) 0%, rgba(14, 28, 24, 0.65) 55%, rgba(14, 28, 24, 0.35) 100%), linear-gradient(0deg, rgba(11, 23, 20, 0.9) 0%, transparent 45%), url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2400&q=90')`,
        }}
      />

      {/* Floating 3D Glowing Radar Circles & Ambient Light */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-12 right-12 w-[500px] h-[500px] bg-[#e4c99b]/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Animated 3D Floating Flight Trail Graphic */}
      <div className="absolute top-16 right-1/4 opacity-30 pointer-events-none animate-glide hidden lg:block">
        <svg width="400" height="200" viewBox="0 0 400 200" fill="none">
          <path
            d="M 10 180 Q 200 40 380 90"
            stroke="url(#trail-gradient)"
            strokeWidth="2"
            strokeDasharray="6 6"
          />
          <defs>
            <linearGradient id="trail-gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#31594f" stopOpacity="0" />
              <stop offset="100%" stopColor="#e4c99b" stopOpacity="1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-8 space-y-6">
            {/* Glowing Tag Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#e4c99b] text-xs font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(228,201,155,0.25)] animate-glow">
              <span className="w-2 h-2 rounded-full bg-[#e4c99b] animate-ping" />
              <span>✦ CERTIFIED IATA AIRLINE PARTNER ✦ FLY IN LUXURY</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif font-medium leading-[1.03] tracking-tight text-white drop-shadow-md">
              Fly beyond limits. <br />
              <span className="italic text-[#e4c99b] drop-shadow-[0_0_25px_rgba(228,201,155,0.35)]">
                Discover the wonder.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-white/85 max-w-2xl font-light leading-relaxed">
              Experience handcrafted flight itineraries, premier airline cabin selections, and unforgettable bespoke holiday packages curated for modern travelers.
            </p>

            {/* Glowing CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#e4c99b] to-[#d6b782] text-[#132621] text-xs sm:text-sm font-extrabold shadow-[0_0_30px_rgba(228,201,155,0.45)] hover:shadow-[0_0_40px_rgba(228,201,155,0.7)] transition-all duration-300 transform hover:-translate-y-1"
              >
                <span>Search Flights Now</span>
                <span className="animate-bounce">
                  <Icon name="planeTakeoff" size={18} />
                </span>
              </a>

              <a
                href="#offers"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]"
              >
                <span>3D Flight Packages</span>
                <Icon name="arrowRight" size={16} />
              </a>
            </div>

            {/* Quick Metrics Trust Bar with Floating 3D Cards */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/15 max-w-xl">
              <div className="p-3 rounded-2xl bg-white/[0.04] backdrop-blur-sm border border-white/10 hover:border-[#e4c99b]/40 transition-colors">
                <p className="text-2xl sm:text-3xl font-bold font-serif text-[#e4c99b]">120k+</p>
                <p className="text-xs text-white/70">Happy Flyers</p>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.04] backdrop-blur-sm border border-white/10 hover:border-[#e4c99b]/40 transition-colors">
                <p className="text-2xl sm:text-3xl font-bold font-serif text-[#e4c99b]">180+</p>
                <p className="text-xs text-white/70">Destinations</p>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.04] backdrop-blur-sm border border-white/10 hover:border-[#e4c99b]/40 transition-colors">
                <p className="text-2xl sm:text-3xl font-bold font-serif text-[#e4c99b]">4.95 ★</p>
                <p className="text-xs text-white/70">Top Rating</p>
              </div>
            </div>
          </div>

          {/* Floating 3D Tilt Featured Deal Card */}
          <div className="lg:col-span-4 hidden lg:block card-3d-wrap">
            <div className="card-3d-item relative p-7 bg-white/[0.08] backdrop-blur-2xl rounded-3xl border border-white/25 shadow-[0_20px_50px_rgba(0,0,0,0.6),_0_0_40px_rgba(49,89,79,0.4)] text-white space-y-4 animate-float-slow">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider bg-[#e4c99b] text-[#132621] rounded-full shadow-[0_0_15px_rgba(228,201,155,0.6)]">
                  ⚡ 3D FLASH FARE
                </span>
                <span className="flex items-center gap-1 text-xs text-[#e4c99b] font-semibold">
                  <Icon name="star" size={14} className="fill-[#e4c99b]" />
                  <span>Verified 5.0</span>
                </span>
              </div>

              <div className="space-y-1">
                <h4 className="text-2xl font-serif font-bold text-white leading-tight">
                  New York ➔ Bali, DPS
                </h4>
                <p className="text-xs text-emerald-100/75">
                  Premium Cabin · Free 2x 32kg Baggage Included
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-black/30 border border-white/15 space-y-2.5 text-xs">
                <div className="flex justify-between items-center text-white/80">
                  <span>Carrier:</span>
                  <span className="font-semibold text-white">Singapore Airlines</span>
                </div>
                <div className="flex justify-between items-center text-white/80">
                  <span>Travel Window:</span>
                  <span className="font-semibold text-[#e4c99b]">Nov – Dec 2026</span>
                </div>
                <div className="flex justify-between items-center pt-2.5 border-t border-white/10">
                  <div>
                    <span className="text-[10px] text-white/50 block line-through">$820</span>
                    <span className="text-2xl font-extrabold text-[#e4c99b]">$489</span>
                  </div>
                  <button
                    onClick={() =>
                      onOpenBooking({
                        type: 'flight',
                        title: 'New York (JFK) to Bali (DPS)',
                        airline: 'Singapore Airlines',
                        price: 489,
                      })
                    }
                    className="px-5 py-2.5 bg-[#31594f] hover:bg-[#233f37] text-white rounded-xl text-xs font-bold transition-all shadow-[0_0_15px_rgba(49,89,79,0.5)] hover:shadow-[0_0_20px_rgba(49,89,79,0.8)] cursor-pointer"
                  >
                    Quick Book
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-white/70">
                <Icon name="shield" size={14} className="text-[#e4c99b]" />
                <span>Price-lock guarantee for next 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
