import { Icon } from './Icons'
import { playCabinChime, playButtonBeep } from '../utils/sound'

export function Hero({ onOpenBooking }) {
  return (
    <section id="home" className="relative min-h-[680px] lg:min-h-[780px] flex items-center bg-[#060e18] text-white overflow-hidden w-full">
      {/* Background Media with Cinematic Parallax & Ambient Glowing Overlays */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 scale-100 hover:scale-105"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(6, 14, 24, 0.94) 0%, rgba(6, 14, 24, 0.72) 55%, rgba(6, 14, 24, 0.4) 100%), linear-gradient(0deg, rgba(6, 14, 24, 0.95) 0%, transparent 45%), url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2400&q=90')`,
        }}
      />

      {/* Floating 3D Glowing Radar Circles & Ambient Light */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-12 right-12 w-[520px] h-[520px] bg-[#e6caa0]/15 rounded-full blur-[160px] pointer-events-none" />

      {/* Animated 3D Floating Flight Trail Graphic */}
      <div className="absolute top-16 right-1/4 opacity-35 pointer-events-none animate-glide hidden lg:block">
        <svg width="400" height="200" viewBox="0 0 400 200" fill="none">
          <path
            d="M 10 180 Q 200 40 380 90"
            stroke="url(#trail-gradient-hero)"
            strokeWidth="2.5"
            strokeDasharray="6 6"
          />
          <defs>
            <linearGradient id="trail-gradient-hero" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#00e5ff" stopOpacity="0" />
              <stop offset="100%" stopColor="#e6caa0" stopOpacity="1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-8 space-y-6">
            {/* Glowing Tag Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/15 text-[#e6caa0] text-xs font-mono font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(230,202,160,0.25)] animate-glow">
              <span className="w-2 h-2 rounded-full bg-[#e6caa0] animate-ping" />
              <span>✦ OFFICIAL IATA ACCREDITED AIRLINE PARTNER ✦ FIRST CLASS & CHARTERS</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif font-medium leading-[1.03] tracking-tight text-white drop-shadow-md">
              Excellence in Flight. <br />
              <span className="italic text-[#e6caa0] drop-shadow-[0_0_25px_rgba(230,202,160,0.4)]">
                Luxury Unbounded.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-white/80 max-w-2xl font-light leading-relaxed">
              Experience private jet charters, lie-flat Boeing 787 First Class suites, and bespoke worldwide holiday expeditions curated for discerning travelers.
            </p>

            {/* Glowing CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3 font-mono">
              <a
                href="#booking"
                onClick={() => playButtonBeep()}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#e6caa0] via-[#eed9bb] to-[#d8b884] text-[#050d14] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-[0_0_30px_rgba(230,202,160,0.45)] hover:shadow-[0_0_40px_rgba(230,202,160,0.7)] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                <span>Search Flights Now</span>
                <span className="animate-bounce">
                  <Icon name="planeTakeoff" size={18} />
                </span>
              </a>

              <a
                href="#cabin-experience"
                onClick={() => playCabinChime()}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] cursor-pointer"
              >
                <span>Explore Boeing 787 Cabin</span>
                <Icon name="arrowRight" size={16} />
              </a>
            </div>

            {/* Quick Metrics Trust Bar with Floating 3D Cards */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-xl font-mono">
              <div className="p-3.5 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:border-[#e6caa0]/40 transition-colors">
                <p className="text-2xl sm:text-3xl font-bold font-serif text-[#e6caa0]">120k+</p>
                <p className="text-xs text-white/60">Passengers Flown</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:border-[#e6caa0]/40 transition-colors">
                <p className="text-2xl sm:text-3xl font-bold font-serif text-cyan-300">180+</p>
                <p className="text-xs text-white/60">Destinations</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:border-[#e6caa0]/40 transition-colors">
                <p className="text-2xl sm:text-3xl font-bold font-serif text-[#e6caa0]">4.98 ★</p>
                <p className="text-xs text-white/60">VIP Rating</p>
              </div>
            </div>
          </div>

          {/* Floating 3D Tilt Featured Deal Card */}
          <div className="lg:col-span-4 hidden lg:block card-3d-wrap">
            <div className="card-3d-item relative p-7 bg-[#091724]/90 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8),_0_0_40px_rgba(14,165,233,0.25)] text-white space-y-4 animate-float-slow">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider bg-[#e6caa0] text-[#050d14] rounded-full shadow-[0_0_15px_rgba(230,202,160,0.6)]">
                  ⚡ FIRST CLASS FLASH FARE
                </span>
                <span className="flex items-center gap-1 text-xs text-[#e6caa0] font-semibold font-mono">
                  <Icon name="star" size={14} className="fill-[#e6caa0]" />
                  <span>Suite 1A Verified</span>
                </span>
              </div>

              <div className="space-y-1">
                <h4 className="text-2xl font-serif font-bold text-white leading-tight">
                  New York ➔ Bali, DPS
                </h4>
                <p className="text-xs text-cyan-300 font-mono">
                  Private Lie-Flat Suite · 3x 32kg Luggage Included
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#06111c] border border-white/10 space-y-2.5 text-xs font-mono">
                <div className="flex justify-between items-center text-white/80">
                  <span>Carrier:</span>
                  <span className="font-semibold text-white">Singapore Airlines A380</span>
                </div>
                <div className="flex justify-between items-center text-white/80">
                  <span>Travel Window:</span>
                  <span className="font-semibold text-[#e6caa0]">Nov – Dec 2026</span>
                </div>
                <div className="flex justify-between items-center pt-2.5 border-t border-white/10">
                  <div>
                    <span className="text-[10px] text-white/40 block line-through">$1,850</span>
                    <span className="text-2xl font-extrabold text-[#e6caa0] font-serif">$980</span>
                  </div>
                  <button
                    onClick={() => {
                      playCabinChime()
                      onOpenBooking({
                        type: 'flight',
                        title: 'New York (JFK) to Bali (DPS)',
                        airline: 'Singapore Airlines A380 Suite',
                        price: 980,
                      })
                    }}
                    className="px-5 py-2.5 bg-gradient-to-r from-[#e6caa0] to-[#d6b782] text-[#050d14] rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(230,202,160,0.4)] hover:shadow-[0_0_25px_rgba(230,202,160,0.7)] cursor-pointer"
                  >
                    Quick Reserve
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-white/60 font-mono">
                <Icon name="shield" size={14} className="text-[#e6caa0]" />
                <span>Price-lock guarantee for next 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
