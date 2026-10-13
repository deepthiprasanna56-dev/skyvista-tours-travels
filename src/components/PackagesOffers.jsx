import { packages } from '../data/travelData'
import { Icon } from './Icons'

export function PackagesOffers({ onSelectPackage }) {
  return (
    <section id="offers" className="py-24 bg-[#07131e] text-white w-full border-t border-b border-white/10">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#e6caa0] mb-3">
            <span className="w-6 h-[1.5px] bg-[#e6caa0]" />
            <span>ALL-INCLUSIVE EXPEDITIONS & SUITE PACKAGES</span>
            <span className="w-6 h-[1.5px] bg-[#e6caa0]" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-medium text-white tracking-tight">
            Curated Flight Packages <br />
            <span className="italic text-[#e6caa0]">& Bespoke Expeditions</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-white/70 font-light leading-relaxed">
            Every package is backed by our best fare promise, luxury partner hotels, airport lounge passes, and dedicated 24/7 personal travel concierges.
          </p>
        </div>

        {/* Packages Cards Grid with 3D Depth & Glowing Accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="group bg-[#0a1827] rounded-3xl overflow-hidden border border-white/15 shadow-2xl hover:shadow-[0_20px_50px_rgba(230,202,160,0.25)] transition-all duration-500 transform hover:-translate-y-2 flex flex-col hover:border-[#e6caa0]/60"
            >
              {/* Photo & Badge Banner */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1827] via-black/30 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-[#e6caa0] shadow-md border border-[#e6caa0]/40">
                    {pkg.badge}
                  </span>
                </div>

                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 text-xs font-mono font-bold text-white border border-white/20">
                  <Icon name="star" size={13} className="text-[#e6caa0] fill-[#e6caa0]" />
                  <span>{pkg.rating}</span>
                  <span className="text-[10px] text-white/60">({pkg.reviews})</span>
                </div>

                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="text-xs font-mono text-cyan-300 font-bold block">{pkg.category}</span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">{pkg.title}</h3>
                </div>
              </div>

              {/* Package Content */}
              <div className="p-7 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#e6caa0] mb-4">
                    <Icon name="plane" size={16} />
                    <span>{pkg.destination}</span>
                  </div>

                  {/* Bullet features */}
                  <ul className="space-y-2.5 text-xs text-white/75 font-light">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-[#e6caa0] font-bold">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price and CTA */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-white/40 line-through font-mono">${pkg.oldPrice}</span>
                      <span className="text-2xl font-bold font-serif text-[#e6caa0]">${pkg.price}</span>
                    </div>
                    <span className="text-[10px] text-white/50 font-mono block">per guest / VIP transfers incl.</span>
                  </div>

                  <button
                    onClick={() =>
                      onSelectPackage({
                        type: 'package',
                        title: pkg.title,
                        subtitle: pkg.destination,
                        image: pkg.image,
                        price: pkg.price,
                      })
                    }
                    className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#e6caa0] to-[#d6b782] text-[#050e17] text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(230,202,160,0.35)] hover:shadow-[0_0_30px_rgba(230,202,160,0.6)] cursor-pointer"
                  >
                    Claim Package
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
