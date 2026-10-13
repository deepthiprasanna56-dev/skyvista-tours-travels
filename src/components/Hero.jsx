import { Icon } from './Icons'

export function Hero({ onOpenBooking }) {
  return (
    <section id="home" className="relative min-h-[620px] lg:min-h-[700px] flex items-center bg-[#1d322c] text-white overflow-hidden">
      {/* Background Media with Gradient Overlays */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 scale-100 hover:scale-105"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(16, 32, 28, 0.88) 0%, rgba(16, 32, 28, 0.55) 55%, rgba(16, 32, 28, 0.3) 100%), linear-gradient(0deg, rgba(14, 28, 24, 0.8) 0%, transparent 40%), url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2200&q=90')`,
        }}
      />

      {/* Decorative Atmospheric Floating Rings */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-white/10 pointer-events-none" />
      <div className="absolute top-1/4 -right-12 w-[520px] h-[520px] rounded-full border border-white/5 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#e4c99b] text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#e4c99b] animate-ping" />
              <span>✦ IATA ACCREDITED AIR TRAVEL PARTNER</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-medium leading-[1.05] tracking-tight text-white">
              Fly beyond limits. <br />
              <span className="italic text-[#e6caa0]">Discover the wonder.</span>
            </h1>

            <p className="text-base sm:text-lg text-white/85 max-w-2xl font-light leading-relaxed">
              Experience handcrafted flight itineraries, premier airline cabin selections, and unforgettable bespoke holiday packages curated for modern travelers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-[#e6caa0] text-[#1c2c27] text-sm font-bold shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Search Flights Now</span>
                <Icon name="planeTakeoff" size={17} />
              </a>

              <a
                href="#offers"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white text-sm font-semibold transition-all duration-300"
              >
                <span>Explore Packages</span>
                <Icon name="arrowRight" size={16} />
              </a>
            </div>

            {/* Quick Metrics Trust Bar */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/15 max-w-lg">
              <div>
                <p className="text-2xl sm:text-3xl font-bold font-serif text-[#e6caa0]">120k+</p>
                <p className="text-xs text-white/70">Happy Passengers</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold font-serif text-[#e6caa0]">180+</p>
                <p className="text-xs text-white/70">Global Destinations</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold font-serif text-[#e6caa0]">4.95 ★</p>
                <p className="text-xs text-white/70">Verified Reviews</p>
              </div>
            </div>
          </div>

          {/* Floating Live Deal Feature Card */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="relative p-6 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl text-white space-y-4 transform hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-[#e6caa0] text-[#1d322c] rounded-full">
                  Deal of the week
                </span>
                <span className="flex items-center gap-1 text-xs text-[#e6caa0]">
                  <Icon name="star" size={14} className="fill-[#e6caa0]" />
                  <span>Featured</span>
                </span>
              </div>

              <div className="space-y-1">
                <h4 className="text-xl font-serif font-bold">New York ➔ Bali, DPS</h4>
                <p className="text-xs text-white/75">Premium Economy · Free 2x 23kg Luggage</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-black/20 border border-white/10 space-y-2 text-xs">
                <div className="flex justify-between items-center text-white/80">
                  <span>Airline:</span>
                  <span className="font-semibold text-white">Singapore Airlines</span>
                </div>
                <div className="flex justify-between items-center text-white/80">
                  <span>Travel Window:</span>
                  <span className="font-semibold text-white">Nov – Dec 2026</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-white/10">
                  <div>
                    <span className="text-[10px] text-white/60 block line-through">$820</span>
                    <span className="text-2xl font-bold text-[#e6caa0]">$489</span>
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
                    className="px-4 py-2 bg-[#31594f] hover:bg-[#233f37] text-white rounded-xl text-xs font-bold transition-colors"
                  >
                    Quick Book
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-white/70">
                <Icon name="shield" size={14} className="text-[#e6caa0]" />
                <span>Price lock guarantee for 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
