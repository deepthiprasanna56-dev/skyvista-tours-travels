import { services } from '../data/travelData'
import { Icon } from './Icons'

export function Services() {
  return (
    <section id="services" className="py-24 bg-[#050e17] text-white w-full">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#e6caa0] mb-3">
              <span className="w-6 h-[1.5px] bg-[#e6caa0]" />
              <span>THE DETAILS, FULLY MANAGED</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-medium text-white tracking-tight">
              Aviation & Concierge Services <br />
              <span className="italic text-[#e6caa0]">Tailored To Your Pace</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-white/70 max-w-md font-light leading-relaxed">
            From seamless international flight connections to airport VIP fast-track, we take the stress out of your journey so you can focus on the experience.
          </p>
        </div>

        {/* Services Grid with 3D Card Hover & Floating Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv) => (
            <div
              key={srv.id}
              className="group relative p-8 sm:p-9 rounded-3xl bg-[#081726] border border-white/10 shadow-xl hover:shadow-[0_20px_45px_rgba(230,202,160,0.2)] transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between hover:border-[#e6caa0]/60"
            >
              {/* Top Row: Floating Icon and Service Number */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/15 text-[#e6caa0] flex items-center justify-center shadow-md group-hover:scale-110 group-hover:border-[#e6caa0]/60 transition-all duration-300">
                    <Icon name={srv.icon} size={25} />
                  </div>
                  <span className="text-sm font-mono font-bold text-white/40 group-hover:text-[#e6caa0] transition-colors tracking-widest">
                    {srv.number}
                  </span>
                </div>

                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-300 block mb-1">
                  {srv.subtitle}
                </span>
                <h3 className="text-2xl font-serif font-bold text-white mb-3">
                  {srv.title}
                </h3>
                <p className="text-xs text-white/70 leading-relaxed mb-6 font-light">
                  {srv.desc}
                </p>
              </div>

              {/* Highlights Pill Badges */}
              <div className="pt-5 border-t border-white/10 space-y-2">
                <div className="flex flex-wrap gap-2">
                  {srv.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-md text-[10px] font-mono bg-white/5 text-white/80 border border-white/10 group-hover:border-[#e6caa0]/40 transition-colors"
                    >
                      ✓ {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
