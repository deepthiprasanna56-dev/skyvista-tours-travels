import { stats, testimonials } from '../data/travelData'
import { Icon } from './Icons'

export function AboutUs() {
  return (
    <section id="about" className="py-24 bg-[#07131e] text-white relative overflow-hidden w-full border-t border-b border-white/10">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Visual Showcase with Image Overlap & 3D Tilt Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-[4/3] group">
              <img
                src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=85"
                alt="Tropical beach coast"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#e6caa0]">
                  Global Aviation Excellence
                </span>
                <p className="text-lg sm:text-xl font-serif italic font-medium">
                  “The best souvenirs aren’t things — they’re the stories you bring home.”
                </p>
              </div>
            </div>

            {/* Floating 3D Mini Overlay Badge */}
            <div className="absolute -bottom-6 -right-3 sm:right-6 bg-[#0c1c2b] p-5 rounded-2xl shadow-2xl border border-white/20 max-w-xs space-y-2 animate-float">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#1b3d5b] to-[#e6caa0] text-[#050e17] flex items-center justify-center shadow-md">
                  <Icon name="award" size={20} />
                </span>
                <div>
                  <h4 className="text-xs font-bold text-white">World Aviation Awards</h4>
                  <p className="text-[10px] text-white/60 font-mono">Best Luxury Booking Agency 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* About Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#e6caa0]">
              <span className="w-6 h-[1.5px] bg-[#e6caa0]" />
              <span>WHO WE ARE & WHY WE FLY</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-medium text-white tracking-tight leading-tight">
              We believe every flight <br />
              <span className="italic text-[#e6caa0]">is the prologue to a story.</span>
            </h2>

            <p className="text-sm text-white/70 font-light leading-relaxed">
              Founded by passionate aviators and lifelong globetrotters, Aeroplane Tours & Travels was born out of a simple belief: booking travel shouldn’t be stressful. It should feel as exciting as the journey itself.
            </p>

            <p className="text-sm text-white/70 font-light leading-relaxed">
              We partner directly with over 450 premier world airlines and boutique hospitality brands to secure privileged fares, flexible terms, and private perks you won't find anywhere else.
            </p>

            {/* Core Values Pillars with 3D Hover Lift */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#091724] border border-white/10 shadow-sm hover:border-[#e6caa0]/40 transition-colors">
                <div className="flex items-center gap-2 text-[#e6caa0] font-bold text-xs mb-1 font-mono">
                  <Icon name="shield" size={16} />
                  <span>Transparent Pricing</span>
                </div>
                <p className="text-[11px] text-white/60">No surprise taxes or hidden transaction baggage fees.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#091724] border border-white/10 shadow-sm hover:border-[#e6caa0]/40 transition-colors">
                <div className="flex items-center gap-2 text-[#e6caa0] font-bold text-xs mb-1 font-mono">
                  <Icon name="headset" size={16} />
                  <span>Human Concierge</span>
                </div>
                <p className="text-[11px] text-white/60">Reach real travel specialists 24/7 without automated loops.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Milestone Stats Counter with 3D Hover Lift */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-[#091724] border border-white/10 shadow-lg hover:shadow-[0_0_30px_rgba(230,202,160,0.2)] hover:border-[#e6caa0]/60 transition-all duration-300 transform hover:-translate-y-1.5 text-center space-y-2"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-white/5 text-[#e6caa0] border border-white/10 flex items-center justify-center shadow-inner">
                <Icon name={item.icon} size={22} />
              </div>
              <p className="text-3xl sm:text-4xl font-serif font-bold text-[#e6caa0]">{item.value}</p>
              <p className="text-xs font-mono font-bold text-white/60 uppercase tracking-wider">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Real Customer Testimonials with 3D Depth */}
        <div className="border-t border-white/10 pt-16">
          <div className="text-center mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#e6caa0] block mb-2">
              REAL STORIES FROM OUR PASSENGERS
            </span>
            <h3 className="text-2xl sm:text-4xl font-serif font-medium text-white">
              Trusted by 120,000+ travelers worldwide
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-[#091724] border border-white/10 shadow-xl hover:shadow-[0_20px_50px_rgba(230,202,160,0.2)] transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between space-y-4 hover:border-[#e6caa0]/40"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-[#e6caa0]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Icon key={i} name="star" size={14} className="fill-[#e6caa0]" />
                    ))}
                  </div>
                  <p className="text-xs text-white/80 italic leading-relaxed font-light">
                    “{t.quote}”
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-white/20"
                  />
                  <div>
                    <h5 className="text-xs font-bold text-white">{t.name}</h5>
                    <p className="text-[10px] text-white/50 font-mono">{t.location} · {t.destination}</p>
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
