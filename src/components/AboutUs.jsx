import { stats, testimonials } from '../data/travelData'
import { Icon } from './Icons'

export function AboutUs() {
  return (
    <section id="about" className="py-24 bg-[#e8eae3]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Visual Showcase with Image Overlap */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=85"
                alt="Tropical beach coast"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase font-bold tracking-widest text-[#e4c99b]">
                  Airlines & Tours Partner
                </span>
                <p className="text-lg font-serif italic font-medium">
                  “The best souvenirs aren’t things — they’re the stories you bring home.”
                </p>
              </div>
            </div>

            {/* Floating Mini Overlay Badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white p-5 rounded-2xl shadow-xl border border-[#e1e4dc] max-w-xs space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[#31594f] text-white flex items-center justify-center">
                  <Icon name="award" size={16} />
                </span>
                <div>
                  <h4 className="text-xs font-bold text-[#202b29]">World Travel Awards</h4>
                  <p className="text-[10px] text-[#717b75]">Best Aviation Booking Agency 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* About Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#31594f]">
              <span className="w-6 h-[1.5px] bg-[#31594f]" />
              <span>WHO WE ARE & WHY WE FLY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#202b29] tracking-tight leading-tight">
              We believe every flight <br />
              <span className="italic text-[#728b7e]">is the prologue to a story.</span>
            </h2>

            <p className="text-sm text-[#5d6861] font-light leading-relaxed">
              Founded by passionate aviators and lifelong globetrotters, Aeroplane Tours & Travels was born out of a simple belief: booking travel shouldn’t be stressful. It should feel as exciting as the journey itself.
            </p>

            <p className="text-sm text-[#5d6861] font-light leading-relaxed">
              We partner directly with over 450 premier world airlines and boutique hospitality brands to secure privileged fares, flexible terms, and private perks you won't find anywhere else.
            </p>

            {/* Core Values Pillars */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-[#e2e5de]">
                <div className="flex items-center gap-2 text-[#31594f] font-bold text-xs mb-1">
                  <Icon name="shield" size={16} />
                  <span>Transparent Pricing</span>
                </div>
                <p className="text-[11px] text-[#6d7972]">No surprise taxes or hidden transaction baggage fees.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#e2e5de]">
                <div className="flex items-center gap-2 text-[#31594f] font-bold text-xs mb-1">
                  <Icon name="headset" size={16} />
                  <span>Human Concierge</span>
                </div>
                <p className="text-[11px] text-[#6d7972]">Reach real travel specialists 24/7 without automated loops.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Milestone Stats Counter */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-[#e0e4db] shadow-sm text-center space-y-2"
            >
              <div className="w-10 h-10 mx-auto rounded-full bg-[#eef3ee] text-[#31594f] flex items-center justify-center">
                <Icon name={item.icon} size={20} />
              </div>
              <p className="text-3xl sm:text-4xl font-serif font-bold text-[#202b29]">{item.value}</p>
              <p className="text-xs font-semibold text-[#6d7972] uppercase tracking-wider">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Real Customer Testimonials */}
        <div className="border-t border-[#d8dcd3] pt-16">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#31594f] block mb-2">
              REAL STORIES FROM OUR PASSENGERS
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-medium text-[#202b29]">
              Trusted by 120,000+ travelers worldwide
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-[#e3e7df] shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Icon key={i} name="star" size={14} className="fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-xs text-[#525f58] italic leading-relaxed">
                    “{t.quote}”
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-[#f0f0ea]">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-[#e0e0d8]"
                  />
                  <div>
                    <h5 className="text-xs font-bold text-[#202b29]">{t.name}</h5>
                    <p className="text-[10px] text-[#7d8780]">{t.location} · {t.destination}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
