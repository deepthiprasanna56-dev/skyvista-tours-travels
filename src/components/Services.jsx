import { services } from '../data/travelData'
import { Icon } from './Icons'

export function Services() {
  return (
    <section id="services" className="py-24 bg-[#fbfaf7] w-full">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#31594f] mb-3">
              <span className="w-6 h-[1.5px] bg-[#31594f]" />
              <span>THE DETAILS, FULLY MANAGED</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-medium text-[#202b29] tracking-tight">
              Aviation & Travel Services <br />
              <span className="italic text-[#657d71]">Tailored To Your Pace</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#616c65] max-w-md font-light leading-relaxed">
            From seamless international flight connections to airport VIP fast-track, we take the stress out of your journey so you can focus on the experience.
          </p>
        </div>

        {/* Services Grid with 3D Card Hover & Floating Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv) => (
            <div
              key={srv.id}
              className="group relative p-8 sm:p-9 rounded-3xl bg-white border border-[#e7eae2] shadow-sm hover:shadow-[0_20px_45px_rgba(49,89,79,0.15)] transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between hover:border-[#31594f]/50"
            >
              {/* Top Row: Floating Icon and Service Number */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#edf3ee] to-[#d8e6db] text-[#31594f] flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(49,89,79,0.3)] transition-all duration-300">
                    <Icon name={srv.icon} size={25} />
                  </div>
                  <span className="text-sm font-mono font-bold text-[#9da59e] group-hover:text-[#31594f] transition-colors tracking-widest">
                    {srv.number}
                  </span>
                </div>

                <span className="text-[11px] font-bold uppercase tracking-wider text-[#31594f] block mb-1">
                  {srv.subtitle}
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#202b29] mb-3">
                  {srv.title}
                </h3>
                <p className="text-xs text-[#636f68] leading-relaxed mb-6 font-light">
                  {srv.desc}
                </p>
              </div>

              {/* Highlights Pill Badges */}
              <div className="pt-5 border-t border-[#f0f0ea] space-y-2">
                <div className="flex flex-wrap gap-2">
                  {srv.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-md text-[10px] font-semibold bg-[#f5f7f3] text-[#425448] border border-[#e5e9e2] group-hover:border-[#31594f]/30 transition-colors"
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
