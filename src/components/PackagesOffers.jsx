import { packages } from '../data/travelData'
import { Icon } from './Icons'

export function PackagesOffers({ onSelectPackage }) {
  return (
    <section id="offers" className="py-24 bg-[#f3f2ec] w-full">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#31594f] mb-3">
            <span className="w-6 h-[1.5px] bg-[#31594f]" />
            <span>ALL-INCLUSIVE FLIGHT & HOTEL EXPERIENCES</span>
            <span className="w-6 h-[1.5px] bg-[#31594f]" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-medium text-[#202b29] tracking-tight">
            Curated Flight Packages <br />
            <span className="italic text-[#876747]">& Limited-Time Offers</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-[#66726b] font-light leading-relaxed">
            Every package is backed by our best fare promise, luxury partner hotels, airport lounge passes, and dedicated 24/7 personal travel concierges.
          </p>
        </div>

        {/* Packages Cards Grid with 3D Depth & Glowing Accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="group bg-white rounded-3xl overflow-hidden border border-[#e4e7df] shadow-sm hover:shadow-[0_20px_50px_rgba(49,89,79,0.18)] transition-all duration-500 transform hover:-translate-y-2 flex flex-col hover:border-[#31594f]/50"
            >
              {/* Photo & Badge Banner */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#31594f] text-[#e4c99b] shadow-md border border-[#e4c99b]/30">
                    {pkg.badge}
                  </span>
                </div>

                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 text-xs font-bold text-[#202b29] shadow-sm">
                  <Icon name="star" size={13} className="text-amber-500 fill-amber-500" />
                  <span>{pkg.rating}</span>
                  <span className="text-[10px] text-[#717b75]">({pkg.reviews})</span>
                </div>

                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="text-xs text-[#e4c99b] font-bold block">{pkg.category}</span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight drop-shadow-sm">{pkg.title}</h3>
                </div>
              </div>

              {/* Package Content */}
              <div className="p-7 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#35483d] mb-4">
                    <Icon name="plane" size={16} className="text-[#31594f]" />
                    <span>{pkg.destination}</span>
                  </div>

                  {/* Bullet features */}
                  <ul className="space-y-2.5 text-xs text-[#5f6b64]">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-4 h-4 rounded-full bg-[#eef4ee] text-[#31594f] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-[10px]">
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price and CTA */}
                <div className="pt-4 border-t border-[#f0f0ea] flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[#959e98] line-through">${pkg.oldPrice}</span>
                      <span className="text-2xl font-extrabold text-[#31594f]">${pkg.price}</span>
                    </div>
                    <span className="text-[10px] text-[#7c8680] block">per person / all taxes included</span>
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
                    className="px-5 py-3 rounded-xl bg-[#31594f] hover:bg-[#233f37] text-white text-xs font-bold transition-all shadow-[0_4px_14px_rgba(49,89,79,0.3)] hover:shadow-[0_0_20px_rgba(49,89,79,0.5)] cursor-pointer"
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
