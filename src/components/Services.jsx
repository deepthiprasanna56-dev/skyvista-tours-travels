import { services } from '../data/travelData'
import { Icon } from './Icons'

export function Services() {
  return (
    <section id="services" className="py-24 bg-[#fbfaf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#31594f] mb-3">
              <span className="w-6 h-[1.5px] bg-[#31594f]" />
              <span>THE DETAILS, FULLY MANAGED</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#202b29] tracking-tight">
              Aviation & Travel Services <br />
              <span className="italic text-[#728b7e]">Tailored To Your Pace</span>
            </h2>
          </div>

          <p className="text-sm text-[#616c65] max-w-md font-light leading-relaxed">
            From seamless international flight connections to airport VIP fast-track, we take the stress out of your journey so you can focus on the experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv) => (
            <div
              key={srv.id}
              className="relative p-8 rounded-3xl bg-white border border-[#e7eae2] shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Top Row: Icon and Service Number */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#eef3ee] text-[#31594f] flex items-center justify-center">
                    <Icon name={srv.icon} size={22} />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#9da59e] tracking-widest">
                    {srv.number}
                  </span>
                </div>

                <span className="text-[11px] font-bold uppercase tracking-wider text-[#31594f] block mb-1">
                  {srv.subtitle}
                </span>
                <h3 className="text-xl font-serif font-bold text-[#202b29] mb-3">
                  {srv.title}
                </h3>
                <p className="text-xs text-[#636f68] leading-relaxed mb-6 font-light">
                  {srv.desc}
                </p>
              </div>

              {/* Highlights Pill Badges */}
              <div className="pt-4 border-t border-[#f0f0ea] space-y-2">
                <div className="flex flex-wrap gap-1.5">
                  {srv.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md text-[10px] font-medium bg-[#f5f7f3] text-[#47574d] border border-[#e5e9e2]"
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
